import { useState } from "react"
import styles from './form_styles.module.css'

export default function CampaignForm({ onCreate }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const isSuccessMessage = message && (message.toLowerCase().includes('sucesso') || message.toLowerCase().includes('criada'))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            await onCreate({ name, description })
            setName('')
            setDescription('')
            setMessage('Campanha criada com sucesso!')
        } catch (error) {
            setMessage(error.message || 'Erro ao criar campanha.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome da Campanha:
                    <input value = {name}
                        onChange={(e) => setName(e.target.value)}
                        required/>
                </label>
                
                <label>
                    Descrição:
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? 'Criando...' : 'Criar Campanha'}
                </button>
                {message && (
                    <p className={`${styles['form-message']} ${isSuccessMessage ? styles.success : styles.error}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    )
}