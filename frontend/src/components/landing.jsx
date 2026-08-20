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
                    Crie campanhas, organize personagens e prepare sessões que mantêm a história viva entre partidas.
                    A base de autenticação, campanhas e personagens já está pronta para a próxima aventura.
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
                    <h2>Acesso Seguro</h2>
                    <p>Cadastro e login com autenticação protegida para manter sua mesa sob seu controle.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Campanhas Vivas</h2>
                    <p>Crie, edite e organize campanhas com descrição, progresso e gerenciamento completo.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Personagens em Foco</h2>
                    <p>Associe personagens às campanhas e encontre ativos, mortos ou desvinculados com filtros rápidos.</p>
                </div>
                <div className={styles.feature}>
                    <h2>Próxima Sessão</h2>
                    <p>A base está preparada para sessões narrativas, histórico de eventos e continuidade assistida por IA.</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}
