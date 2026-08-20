import styles from './campaign_list.module.css'

const STATUS_LABELS = {
    started: 'A Jornada Começou',
    finished: 'Crônica Encerrada',
    not_started: 'Sessão 0',
}

function resolveCampaignStatus(campaign) {
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

export default function CampaignList({ campaigns, onEdit, onDelete }) {
    if (!campaigns.length) {
        return <p className={styles.noCampaigns}>Nenhuma campanha criada ainda.</p>
    }

    return (
        <div className={styles.list}>
            {campaigns.map((campaign) => {
                const status = resolveCampaignStatus(campaign)

                return (
                    <article key={campaign.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3>{campaign.name}</h3>
                                <span className={`${styles.statusBadge} ${styles[`statusBadge${status}`]}`}>
                                    {STATUS_LABELS[status]}
                                </span>
                            </div>
                            <p>{campaign.description || 'Sem descrição'}</p>
                        </div>

                        <div className={styles['card-actions']}>
                            <button className={styles['btn-edit']} 
                                onClick={() => onEdit(campaign)} 
                                title="Editar campanha">
                                ✏️ Editar
                            </button>
                            <button className={styles['btn-delete']}
                                onClick={() => onDelete(campaign.id)}
                                title="Deletar campanha">
                                    🗑️ Deletar
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
