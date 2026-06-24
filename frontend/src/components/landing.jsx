import styles from './landing.module.css'
import Footer from './footer.jsx'

export default function Landing({ onLoginClick, onRegisterClick }) {
    return (
        <main className={styles['landing-shell']}>
            <div className="background-particles" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <section className={styles['landing-hero']}>
                <span className={styles.eyebrow}>Arcane AI</span>
                <h1 className={styles.title}>RPG narrativo com IA e memória persistente</h1>
                <p className={styles.description}>
                    Crie campaingas, jogue sessões e mantenha a história viva entre partidas.
                    Esta primeira fase traz landing page, login e cadastro.
                </p>
                <div className={styles['landing-actions']}>
                    <button className="btn-primary" onClick={onLoginClick}>
                        Entrar
                    </button>
                    <button className="btn-secondary" onClick={onRegisterClick}>
                        Cadastrar
                    </button>
                </div>
            </section>

            <section className={styles['landing-features']}>
                <div className={styles.feature}>
                    <h2>Autenticação Simples</h2>
                    <p>Login e Cadastro direto conectados ao backend.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Fase 0.1 concluida</h2>
                    <p>Landing page + formulários + integração com API.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Estrutura Modular</h2>
                    <p>Componentes reutilizáveis e fácil manutenção, separados para evoluir rápido.</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}
