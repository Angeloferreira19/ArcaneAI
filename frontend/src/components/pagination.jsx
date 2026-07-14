import styles from './pagination.module.css'

export default function Pagination({ currentPage, totalPages, onChangePage }) {
  if (!totalPages || totalPages <= 1) return null

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn}
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage <= 1}
        type="button"
      >
        Anterior
      </button>

      <div className={styles.pageInfo}>
        Página {currentPage} de {totalPages}
      </div>

      <button
        className={styles.btn}
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        type="button"
      >
        Próxima
      </button>
    </div>
  )
}

