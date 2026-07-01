import styles from './dashboard.module.css'
import Header from './header'

export default function Dashboard({ user, onLogout, onBrandClick }) {
    return (
        <div className={styles['dashboard-shell']}>
            <Header user={user} onBrandClick={onBrandClick} />
            <main className={styles['dashboard-content']}>
                <section className={styles['dashboard-hero']}>
                    <h1>Bem-vindo, {user.username}!</h1>
                    <p>Seu e-mail: {user.email}</p>
                    <button className={styles['btn-secondary']} type="button" onClick={onLogout}>
                        Sair
                    </button>
                </section>

                <section className={styles['dashboard-grid']}>
                    <article className={styles['dashboard-card']}>
                        <h2>Seu painel</h2>
                        <p>Aqui ficará o resumo da sua jornada Arcane AI.</p>
                    </article>
                    <article className={styles['dashboard-card']}>
                        <h2>Próximos passos</h2>
                        <p>Crie campanhas, personagens e acompanhe tudo em um só lugar.</p>
                    </article>
                </section>
            </main>
        </div>
    )
}
