import CampaignEditForm from './campaign_edit_form'
import styles from './campaign_modal.module.css'

export default function CampaignEditModal({
    isOpen,
    campaign,
    onClose,
    onSave,
}) {
    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Editar Campanha</h2>
                    <button
                        className={styles['close-btn']}
                        onClick={onClose}
                        aria-label="Fechar modal"
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.content}>
                    <CampaignEditForm
                        campaign={campaign}
                        onSave={onSave}
                        onCancel={onClose}
                    />
                </div>
            </div>
        </div>
    )
}