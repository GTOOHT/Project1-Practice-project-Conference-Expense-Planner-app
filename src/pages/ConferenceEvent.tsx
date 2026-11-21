import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { VenueSelection } from '../components/VenueSelection'
import { AddOnsSelection } from '../components/AddOnsSelection'
import { MealsSelection } from '../components/MealsSelection'
import { ShowDetailsModal } from '../components/ShowDetailsModal'

interface ConferenceEventProps {
  onNavigateHome: () => void
}

export function ConferenceEvent({ onNavigateHome }: ConferenceEventProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [numberOfPeople, setNumberOfPeople] = useState(50)

  return (
    <div className="conference-event-page">
      <Navbar
        onShowDetails={() => setShowDetails(true)}
        onNavigateHome={onNavigateHome}
      />

      <main className="conference-main-content">
        <VenueSelection />
        <AddOnsSelection />
        <MealsSelection
          numberOfPeople={numberOfPeople}
          onNumberOfPeopleChange={setNumberOfPeople}
        />
      </main>

      <ShowDetailsModal
        open={showDetails}
        onClose={() => setShowDetails(false)}
        numberOfPeople={numberOfPeople}
      />
    </div>
  )
}
