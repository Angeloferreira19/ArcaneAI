import styles from './character_modal.module.css'

import Pagination from './pagination'

export default function CharacterModal({
  isOpen,
  onClose,
  characters,
  loading,
  currentPage,
  totalPages,
  onChangePage,
}) {
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
          {loading ? (
            <p className={styles.loading}>Carregando personagens...</p>
          ) : characters.length === 0 ? (
            <p className={styles.empty}>Nenhum personagem criado ainda.</p>
          ) : (
            <>
              <ul className={styles.list}>
                {characters.map((character) => (
                  <li key={character.id} className={styles.item}>
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                  </li>
                ))}
              </ul>
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
