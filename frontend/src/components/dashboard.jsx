import { useCallback, useEffect, useState } from 'react'
import Header from './header'
import CampaignList from './campaign_list'
import CampaignForm from './campaign_form'
import CharacterForm from './character_form'
import CharacterModal from './character_modal'
import CampaignModal from './campaign_modal'
import styles from './dashboard.module.css'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function Dashboard({ user, onLogout, onBrandClick }) {
  const [campaigns, setCampaigns] = useState([])
  const [campaignsSelect, setCampaignsSelect] = useState([])
  const [campaignsSelectLoading, setCampaignsSelectLoading] = useState(false)

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingCharacters, setLoadingCharacters] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenCampaigns, setIsModalOpenCampaigns] = useState(false)
  const [campaignPage, setCampaignPage] = useState(1)
  const [campaignTotalPages, setCampaignTotalPages] = useState(1)
  const [characterPage, setCharacterPage] = useState(1)
  const [characterTotalPages, setCharacterTotalPages] = useState(1)
  const token = typeof window !== 'undefined' ? localStorage.getItem('arcane_token') : null

  const fetchCampaigns = useCallback(async (page = 1) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/campaigns?page=${page}&page_size=3`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setCampaigns(data.items || [])
      setCampaignPage(data.current_page || page)
      setCampaignTotalPages(data.pages || 1)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [token])

  const fetchCampaignsSelect = useCallback(async () => {
    // Carrega campanhas completas para o seletor (não limitar a 4)
    setCampaignsSelectLoading(true)
    try {
      const response = await fetch(`${API_URL}/campaigns`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setCampaignsSelect(data.items || data || [])
    } catch (error) {
      console.error(error)
      setCampaignsSelect([])
    } finally {
      setCampaignsSelectLoading(false)
    }
  }, [token])

  useEffect(() => {
    if (!token) return
    fetchCampaigns(1)
    fetchCampaignsSelect()
  }, [token, fetchCampaigns, fetchCampaignsSelect])


  const createCampaign = async (campaignData) => {
    const response = await fetch(`${API_URL}/campaigns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(campaignData),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.detail || 'Erro ao criar campanha')
    setCampaigns((prev) => [...prev, data])
  }

  const createCharacter = async (characterData) => {
    const response = await fetch(`${API_URL}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(characterData),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.detail || 'Erro ao criar personagem')
    return data
  }

  const fetchCharacters = useCallback(async (page = 1) => {
    setLoadingCharacters(true)
    try {
      const response = await fetch(`${API_URL}/characters?page=${page}&page_size=3`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setCharacters(data.items || [])
      setCharacterPage(data.current_page || page)
      setCharacterTotalPages(data.pages || 1)
    } catch (error) {
      console.error(error)
      setCharacters([])
    } finally {
      setLoadingCharacters(false)
    }
  }, [token])

  const openCharactersModal = async () => {
    setIsModalOpen(true)
    await fetchCharacters(1)
  }

  const openCampaignsModal = async () => {
    setIsModalOpenCampaigns(true)
  }

  return (
    <div className={styles['dashboard-shell']}>
      <Header user={user} onBrandClick={onBrandClick} />
      <main className={styles['dashboard-content']}>
        <section className={styles['dashboard-hero']}>
          <h1>Bem-vindo, {user.username}!</h1>
          <p>Seu e-mail: {user.email}</p>
          <button className='btn-secondary' onClick={onLogout}>Sair</button>
        </section>

        <section className={styles['dashboard-grid']}>
          <article 
            className={styles['dashboard-card']}
            onClick={openCampaignsModal}
            style={{ cursor: 'pointer' }}
          >
            <h2>Campanhas</h2>
            <p>Clique para visualizar todas as suas campanhas criadas</p>
          </article>

          <article className={styles['dashboard-card']}>
            <h2>Criar nova campanha</h2>
            <CampaignForm onCreate={createCampaign} />
          </article>

          <article className={styles['dashboard-card']}>
            <h2>Criar personagem</h2>
            <CharacterForm campaigns={campaignsSelect} onCreate={createCharacter} />
          </article>

          <article 
            className={styles['dashboard-card']}
            onClick={openCharactersModal}
            style={{ cursor: 'pointer' }}
          >
            <h2>Personagens</h2>
            <p>Clique para visualizar todos os seus personagens criados</p>
          </article>
        </section>

        <CampaignModal
          isOpen={isModalOpenCampaigns}
          onClose={() => setIsModalOpenCampaigns(false)}
          campaigns={campaigns}
          loading={loading}
          currentPage={campaignPage}
          totalPages={campaignTotalPages}
          onChangePage={async (next) => {
            // Evita que uma resposta antiga sobrescreva a página atual
            const pageToFetch = next
            setCampaignPage(pageToFetch)
            await fetchCampaigns(pageToFetch)
          }}
        />


        <CharacterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          characters={characters}
          loading={loadingCharacters}
          currentPage={characterPage}
          totalPages={characterTotalPages}
          onChangePage={async (next) => {
            const pageToFetch = next
            setCharacterPage(pageToFetch)
            await fetchCharacters(pageToFetch)
          }}

        />
      </main>
    </div>
  )
}
