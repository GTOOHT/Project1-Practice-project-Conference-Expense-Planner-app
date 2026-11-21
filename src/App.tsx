import { useState } from 'react'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { ConferenceEvent } from './pages/ConferenceEvent'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'planner'>('landing')

  return (
    <div className="app-root">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={() => setCurrentPage('planner')} />
      ) : (
        <ConferenceEvent onNavigateHome={() => setCurrentPage('landing')} />
      )}
    </div>
  )
}

export default App
