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
            <div>
                <p>Nenhuma campanha disponível. Crie uma campanha primeiro.</p>
            </div>
        )
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do Personagem:
                    <input value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required/>
                </label>

                <label>
                    Descrição:
                    <textarea value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        required/>
                </label>

                <label>
                    Campanha:
                    <select value={campaignId} onChange={(e) => setCampaignId(e.target.value)} 
                        required>
                        {campaigns.map((campaign) => (
                            <option key={campaign.id} value={campaign.id}>
                                {campaign.name}
                            </option>
                        ))}
                    </select>
                </label>

                <button type="submit">Criar Personagem</button>
                {message && (
                    <p className={`${styles['form-message']} ${isSuccessMessage ? styles.success : styles.error}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    )
}