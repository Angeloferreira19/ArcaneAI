import { useState, useEffect } from 'react'
import styles from './form_styles.module.css'

export default function CampaignEditForm({ campaign, onSave, onCancel }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const isSuccessMessage = message && message.toLowerCase().includes('sucesso')

    // Preencher campos quando campanha mudar
    useEffect(() => {
        if (campaign) {
            setName(campaign.name || '')
            setDescription(campaign.description || '')
        }
    }, [campaign])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            await onSave({
                name,
                description,
            })
            setMessage('Campanha atualizada com sucesso!')
            setTimeout(onCancel, 1500) // Fecha após 1.5s
        } catch (error) {
            setMessage(error.message || 'Erro ao atualizar campanha.')
        } finally {
            setLoading(false)
        }
    }

    if (!campaign) return null

    return (
        <div className={styles['form-container']}>
            <h3>Editar Campanha</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome da Campanha:
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Descrição:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className={`${styles['btn-primary']}`} type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar Alterações'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className={`${styles['btn-secondary']}`}
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