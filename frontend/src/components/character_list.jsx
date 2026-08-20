import styles from './campaign_list.module.css'

const STATUS_LABELS = {
  all: 'Todos',
  alive: 'Ativos',
  dead: 'Mortos',
  unlinked: 'Desvinculados',
}

function resolveCharacterStatus(character) {
  if (character?.status) {
    return String(character.status).toLowerCase()
  }

  return character?.campaign_id ? 'alive' : 'unlinked'
}

export default function CharacterList({ characters, onEdit, onDelete }) {
  return (
    <div className={styles.list}>
      {characters.map((character) => {
        const status = resolveCharacterStatus(character)
        const statusLabel = STATUS_LABELS[status] || 'Ativos'
        const statusClass =
          status === 'dead'
            ? styles.statusBadgeDead
            : status === 'unlinked'
              ? styles.statusBadgeUnlinked
              : styles.statusBadgeAlive

        return (
          <article key={character.id} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3>{character.name}</h3>
                <span className={`${styles.statusBadge} ${statusClass}`}>
                  {statusLabel}
                </span>
              </div>
              <p>{character.description || 'Sem descrição'}</p>
            </div>

            <div className={styles['card-actions']}>
              <button className={styles['btn-edit']}
                onClick={() => onEdit(character)}
                title="Editar personagem">
                ✏️ Editar
              </button>

              <button className={styles['btn-delete']}
                onClick={() => onDelete(character.id)}
                title="Excluir personagem">
                🗑️ Excluir
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}
