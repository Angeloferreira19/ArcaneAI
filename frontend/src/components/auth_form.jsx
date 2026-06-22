export default function AuthForm({ mode, form, onChange, onSubmit, loading, message }) {
    return (
        <section className="card">
            <h1>{mode === 'login' ? 'Entrar' : 'Criar Conta'}</h1>
            <form onSubmit={onSubmit}>
                {mode === 'register' && (
                    <label className="form-group">
                        Nome
                        <input
                         name="username"
                         value={form.username}
                         onChange={onChange}
                         placeholder="Seu Nome" 
                         required/>
                    </label>
                )}

                <label className="form-group">
                    Email
                    <input
                     name="email"
                     type="email"
                     value={form.email}
                     onChange={onChange}
                     placeholder="seu@email.com"
                     required/>
                </label>
                
                <label className="form-group">
                    Senha
                    <input
                     name="password"
                     type="password"
                     value={form.password}
                     onChange={onChange}
                     placeholder="••••••••"
                     required
                     minLength={8}/>
                </label>

                <button className="btn-primary" type="submit" disabled={loading}>
                    {loading ? 'Processando...'
                     : mode === 'login' ? 'Entrar'
                     : 'Registrar'}
                </button>

                {message && <p className="message">{message}</p>}
            </form>
        </section>
    )
}
