import { useState, useEffect } from 'react'
import styles from './form_styles.module.css'

export default function CharacterForm({ campaigns, onCreate }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [campaignId, setCampaignId] = useState('')
    const [message, setMessage] = useState('')
    const isSuccessMessage = message && (message.toLowerCase().includes('sucesso') || message.toLowerCase().includes('criado'))
    
    // Atualiza campaignId quando campaigns mudar
    useEffect(() => {
        if (campaigns.length > 0 && !campaignId) {
            setCampaignId(campaigns[0].id)
        }
    }, [campaigns, campaignId])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!campaignId) {
            setMessage('Por favor, selecione uma campanha')
            return
        }

        setMessage('')
        try {
            await onCreate({ name, description, campaign_id: campaignId })
            setName('')
            setDescription('')
            setMessage('Personagem criado com sucesso!')
        } catch (error) {
            setMessage(error.message || 'Erro ao criar personagem')
        }
    }

    if (campaigns.length === 0) {
        return (
            <div className={styles['form-container']}>
                <p>{`Nenhuma campanha disponível. Crie uma campanha primeiro.`}</p>
            </div>
        )
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles['form-grid']}>
                    <label className={styles.field}>
                        <span className={styles.label}>Nome do Personagem</span>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Ex.: Arya" 
                        />
                    </label>

                <label className={styles.field}>
                    <span className={styles.label}>Campanha</span>
                    <select
                        value={campaignId}
                        onChange={(e) => setCampaignId(e.target.value)}
                        required
                        className={styles['campaign-select']}

                    >
                        {campaigns.map((campaign) => (
                            <option key={campaign.id} value={campaign.id}>
                                {campaign.name}
                            </option>
                        ))}
                    </select>
                </label>

                </div>

                <label className={styles.field}>
                    <span className={styles.label}>Descrição</span>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={3}
                        placeholder="Descreva o personagem..."
                    />
                </label>

                <div className={styles.actions}>
                    <button type="submit">Criar Personagem</button>
                </div>

                {message && (
                    <p className={`${styles['form-message']} ${isSuccessMessage ? styles.success : styles.error}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    )
}
