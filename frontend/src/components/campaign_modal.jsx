import CampaignList from './campaign_list'
import styles from './campaign_modal.module.css'

export default function CampaignModal({ isOpen, onClose, campaigns, loading }) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Minhas Campanhas</h2>
          <button
            className={styles['close-btn']}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {loading ? (
            <p className={styles.loading}>Carregando campanhas...</p>
          ) : campaigns.length === 0 ? (
            <p className={styles.empty}>Nenhuma campanha criada ainda.</p>
          ) : (
            <CampaignList campaigns={campaigns} />
          )}
        </div>
      </div>
    </div>
  )
}
