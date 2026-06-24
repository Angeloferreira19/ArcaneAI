import React, { useState } from 'react'
import Landing from '../components/landing'
import AuthForm from '../components/auth_form'
import Dashboard from '../components/dashboard'
import Header from '../components/header'
import Footer from '../components/footer'
import headerStyles from '../components/header.module.css'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Home() {
  const [view, setView] = useState('landing')
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        }),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.detail || 'Erro ao autenticar')

      localStorage.setItem('arcane_token', result.access_token)
      setUser(result.user)
      setForm({ username: '', email: '', password: '' })
      setView('dashboard')
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password
        }),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.detail || 'Erro ao registrar')

      setMessage('Cadastro bem-sucedido! Faça login para continuar.')
      setForm({ username: '', email: '', password: '' })
      setView('login')
    } catch (err) {
      setMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('arcane_token')
    setUser(null)
    setView('landing')
  }

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} onBrandClick={() => { setMessage(''); setView('landing') }} />
  }

  if (view === 'landing') {
    return (
      <Landing
        onLoginClick={() => setView('login')}
        onRegisterClick={() => setView('register')}
      />
    )
  }

  return (
    <div className="app-shell">
      <Header title="Arcane AI" user={user} onBrandClick={() => { setMessage(''); setView(user ? 'dashboard' : 'landing') }}>
        <button
          type="button"
          className={view === 'login' ? headerStyles.active : ''}
          onClick={() => {
            setView('login')
            setMessage('')
          }}
        >
          Entrar
        </button>
        <button
          type="button"
          className={view === 'register' ? headerStyles.active : ''}
          onClick={() => {
            setView('register')
            setMessage('')
          }}
        >
          Registrar
        </button>
      </Header>

      <AuthForm
        mode={view}
        form={form}
        onChange={handleChange}
        onSubmit={view === 'login' ? handleLogin : handleRegister}
        loading={loading}
        message={message}
      />
      <Footer />
    </div>
    
  )
}
