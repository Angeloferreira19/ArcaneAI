import CharacterEditForm from './character_edit_form'
import styles from './character_modal.module.css'

export default function CharacterEditModal({
    isOpen,
    character,
    campaigns,
    onClose,
    onSave,
}) {
    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Editar Personagem</h2>
                    <button
                        className={styles['close-btn']}
                        onClick={onClose}
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.content}>
                    <CharacterEditForm
                        character={character}
                        campaigns={campaigns}
                        onSave={onSave}
                        onCancel={onClose}
                    />
                </div>
            </div>
        </div>
    )
}