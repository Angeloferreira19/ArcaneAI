import { useMemo, useState } from 'react'
import CampaignList from './campaign_list'
import styles from './campaign_modal.module.css'

import Pagination from './pagination'

const FILTERS = [
  { key: 'all', label: 'Tudo em Jogo' },
  { key: 'started', label: 'A Jornada Começou' },
  { key: 'finished', label: 'Crônicas Encerradas' },
  { key: 'not_started', label: 'Ainda no Pergaminho' },
]

function getCampaignStatus(campaign) {
  const explicitStatus = String(campaign?.status || '').toLowerCase()

  if (['finished', 'completed', 'concluded'].includes(explicitStatus)) {
    return 'finished'
  }

  if (['started', 'in_progress', 'active'].includes(explicitStatus)) {
    return 'started'
  }

  if (campaign?.is_completed || campaign?.completed_at) {
    return 'finished'
  }

  const sessionCount = campaign?.sessions_count ?? campaign?.session_count
  const hasSessions = Array.isArray(campaign?.sessions)
    ? campaign.sessions.length > 0
    : Number(sessionCount) > 0

  return campaign?.started_at || hasSessions ? 'started' : 'not_started'
}

export default function CampaignModal({
  isOpen,
  onClose,
  campaigns,
  loading,
  currentPage,
  totalPages,
  onChangePage,
  onEdit,
  onDelete,
}) {
  const [campaignFilter, setCampaignFilter] = useState('all')

  const filteredCampaigns = useMemo(() => {
    if (campaignFilter === 'all') return campaigns
    return campaigns.filter((campaign) => getCampaignStatus(campaign) === campaignFilter)
  }, [campaigns, campaignFilter])

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
          {!loading && (
            <div className={styles.toolbar}>
              <div className={styles.filterGroup}>
                {FILTERS.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    className={`${styles.filterButton} ${styles[`filterButton${filter.key}`]} ${campaignFilter === filter.key ? styles.filterButtonActive : ''}`}
                    onClick={() => setCampaignFilter(filter.key)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <p className={styles.loading}>Carregando campanhas...</p>
          ) : filteredCampaigns.length === 0 ? (
            <p className={styles.empty}>Nenhuma campanha encontrada neste filtro.</p>
          ) : (
            <>
              <CampaignList 
                campaigns={filteredCampaigns} 
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={onChangePage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
