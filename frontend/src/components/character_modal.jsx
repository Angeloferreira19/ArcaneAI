import { useMemo, useState } from 'react'
import styles from './character_modal.module.css'
import Pagination from './pagination'
import CharacterList from './character_list'

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'alive', label: 'Ativos' },
  { key: 'dead', label: 'Mortos' },
  { key: 'unlinked', label: 'Desvinculados' },
]

function getCharacterStatus(character) {
  if (character?.status) {
    return String(character.status).toLowerCase()
  }

  return character?.campaign_id ? 'alive' : 'unlinked'
}

export default function CharacterModal({
  isOpen,
  onClose,
  characters,
  loading,
  currentPage,
  totalPages,
  onChangePage,
  onEdit,
  onDelete,
}) {
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredCharacters = useMemo(() => {
    if (statusFilter === 'all') return characters
    return characters.filter((character) => getCharacterStatus(character) === statusFilter)
  }, [characters, statusFilter])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Personagens Criados</h2>
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
                    className={`${styles.filterButton} ${statusFilter === filter.key ? styles.filterButtonActive : ''}`}
                    onClick={() => setStatusFilter(filter.key)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <p className={styles.loading}>Carregando personagens...</p>
          ) : filteredCharacters.length === 0 ? (
            <p className={styles.empty}>Nenhum personagem encontrado para este filtro.</p>
          ) : (
            <>
              <CharacterList
                characters={filteredCharacters}
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
