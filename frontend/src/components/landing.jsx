export default function Landing({ onLoginClick, onRegisterClick }) {
    return (
        <main className="landing-shell">
            <section className="landing-hero">
                <span className="eyebrow">Arcane AI</span>
                <h1 className="title">RPG narrativo com IA e memória persistente</h1>
                <p className="description">
                    Crie campanhas, jogue sessões e mantenha a história viva entre partidas.
                    Esta primeira fase traz landing page, login e cadastro.
                </p>
                <div className="landing-actions">
                    <button className="btn-primary" onClick={onLoginClick}>
                        Entrar
                    </button>
                    <button className="btn-secondary" onClick={onRegisterClick}>
                        Cadastrar
                    </button>
                </div>
            </section>

            <section className="landing-features">
                <div className="feature">
                    <h2>Autenticação Simples</h2>
                    <p>Login e Cadastro direto conectados ao backend.</p>
                </div>
                <div className="feature">
                    <h2>Fase 0.1 concluida</h2>
                    <p>Landing page + formulários + integração com API.</p>
                </div>
                <div className="feature">
                    <h2>Estrutura Modular</h2>
                    <p>Componentes reutilizáveis e fácil manutenção, separados para evoluir rápido.</p>
                </div>
            </section>
        </main>
    )
}
