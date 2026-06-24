import styles from './dashboard.module.css'
import Header from './header'

export default function Dashboard({ user, onLogout, onBrandClick }) {
    return (
        <div>
            <Header user={user} onBrandClick={onBrandClick} />
            <section className={styles.card}>
                <h1>Bem-vindo, {user.username}!</h1>
                <p>Seu e-mail: {user.email}</p>
                <button className={styles['btn-secondary']} type="button" onClick={onLogout}>
                    Sair
                </button>
            </section>
        </div>
    )
}
