import styles from './campaign_list.module.css'

export default function CampaignList({ campaigns }) {
    if (!campaigns.length) {
        return <p className={styles.noCampaigns}>Nenhuma campanha criada ainda.</p>
    }

    return (
        <div className={styles.list}>
            {campaigns.map((campaign) => (
                <article key={campaign.id} className={styles.card}>
                    <h3>{campaign.name}</h3>
                    <p>{campaign.description || 'Sem descrição'}</p>
                </article>
            ))}
        </div>
    )
}
