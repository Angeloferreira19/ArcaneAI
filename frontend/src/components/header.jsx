import { useRouter } from 'next/router'
import styles from './header.module.css'

export default function Header({ title = 'Arcane AI', children, user, onBrandClick }) {
  const router = useRouter()

  const handleBrandClick = (e) => {
    if (onBrandClick) return onBrandClick(e)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('arcane_token')
      if (token) {
        router.push('/')
      } else {
        router.push('/')
      }
    }
  }

  return (
    <header className={styles.header}>
      <div
        className={styles.brand}
        role="button"
        tabIndex={0}
        onClick={handleBrandClick}
        onKeyDown={(e) => { if (e.key === 'Enter') handleBrandClick(e) }}
      >
        <span className={styles.logo} />
        <div>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <nav className={styles.nav}>{children}</nav>
    </header>
  )
}
