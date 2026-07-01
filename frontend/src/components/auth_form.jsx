import styles from './auth_form.module.css';
import Header from './header.jsx'
import Footer from './footer.jsx'

export default function AuthForm({ mode, form, onChange, onSubmit, loading, message, onSwitchMode }) {
    const isSuccessMessage = message?.toLowerCase().includes('sucesso') || message?.toLowerCase().includes('concluído') ||
     message?.toLowerCase().includes('bem-vindo') || message?.toLowerCase().includes('entrando');

    return (
        <main className={styles['auth-form-shell']}>
            <section className={styles['card']}>
                <h1>{mode === 'login' ? 'Entrar' : 'Criar Conta'}</h1>
                <form className={styles.form} onSubmit={onSubmit}>
                    {mode === 'register' && (
                        <label className={styles['form-group']}>
                            Nome
                            <input
                                name="username"
                                value={form.username}
                                onChange={onChange}
                                placeholder="Seu Nome"
                                required
                            />
                        </label>
                    )}

                    <label className={styles['form-group']}>
                        Email
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={onChange}
                            placeholder="seu@email.com"
                            required
                        />
                    </label>

                    <label className={styles['form-group']}>
                        Senha
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            placeholder="••••••••"
                            required
                            minLength={8}
                        />
                    </label>
                    <button className={styles['btn-primary']} type="submit" disabled={loading}>
                        {loading ? 'Processando...' : mode === 'login' ? 'Entrar' : 'Registrar'}
                    </button>

                    {message && (
                        <p className={`${styles.message} ${isSuccessMessage ? styles['message-success'] : styles['message-error']}`}>
                            {message}
                        </p>
                    )}
                </form>
            </section>
        </main>
    )
}

