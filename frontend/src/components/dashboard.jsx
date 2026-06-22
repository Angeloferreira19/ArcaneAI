export default function Dashboard({ user, onLogout }) {
    return (
        <section className="card">
            <h1>Bem-vindo, {user.username}!</h1>
            <p>Seu e-mail: {user.email}</p>
            <button className="btn-secondary" type="button" onClick={onLogout}>
                Sair
            </button>
        </section>
    )
}
