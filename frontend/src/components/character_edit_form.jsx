import { useState, useEffect } from 'react'
import styles from './form_styles.module.css'

export default function CharacterEditForm({ character, campaigns, onSave, onCancel }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [campaignId, setCampaignId] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const isSuccessMessage = message && message.toLowerCase().includes('sucesso')

    useEffect(() => {
        if (character) {
            setName(character.name || '')
            setDescription(character.description || '')
            setCampaignId(character.campaign_id || '')
        }
    }, [character])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            await onSave({
                name,
                description,
                campaign_id: campaignId || null,
            })
            setMessage('Personagem atualizado com sucesso!')
            setTimeout(onCancel, 1500)
        } catch (error) {
            setMessage(error.message || 'Erro ao atualizar personagem.')
        } finally {
            setLoading(false)
        }
    }

    if (!character) return null

    return (
        <div className={styles['form-container']}>
            <h3>Editar Personagem</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do Personagem:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Campanha:
                    <select
                        value={campaignId}
                        onChange={(e) => setCampaignId(e.target.value)}
                    >
                        <option value="">Não Linkado</option>
                        {campaigns.map((campaign) => (
                            <option key={campaign.id} value={campaign.id}>
                                {campaign.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Descrição:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={3}
                    />
                </label>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className={`${styles['btn-primary']}`} type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar Alterações'}
                    </button>
                    <button
                        className={`${styles['btn-secondary']}`}
                        type="button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>

                {message && (
                    <p
                        className={`${styles['form-message']} ${
                            isSuccessMessage ? styles.success : styles.error
                        }`}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    )
}