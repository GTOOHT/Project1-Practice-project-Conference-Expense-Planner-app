import { useAppDispatch, useAppSelector } from '../store/hooks'
import { incrementQuantity, decrementQuantity } from '../store/venueSlice'
import { svgFallbacks } from '../assets/images'

const fallbackMap: Record<string, string> = {
  'Conference Room (Capacity:15)': svgFallbacks.conferenceRoom,
  'Auditorium Hall (Capacity:200)': svgFallbacks.auditoriumHall,
  'Presentation Room (Capacity:50)': svgFallbacks.presentationRoom,
  'Large Meeting Room (Capacity:10)': svgFallbacks.largeMeetingRoom,
  'Small Meeting Room (Capacity:5)': svgFallbacks.smallMeetingRoom,
}

export function VenueSelection() {
  const dispatch = useAppDispatch()
  const venueItems = useAppSelector((state) => state.venue)

  const totalVenueCost = venueItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0,
  )

  return (
    <section id="venue" className="selection-section">
      <div className="section-header-banner">
        <h2>Venue Room Selection</h2>
      </div>

      <div className="cards-grid">
        {venueItems.map((item, index) => {
          // Parse out name and capacity if contained in parenthesis
          const match = item.name.match(/^(.*?)\s*(\(.*?\))?$/)
          const displayName = match ? match[1] : item.name
          const displayCapacity = match && match[2] ? match[2] : `(Capacity:${item.capacity})`

          return (
            <div key={item.name} className="product-card">
              <div className="card-image-wrap">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => {
                    const fallback = fallbackMap[item.name] || svgFallbacks.conferenceRoom
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback
                    }
                  }}
                />
              </div>

              <div className="card-content">
                <h3 className="card-title">{displayName}</h3>
                <p className="card-capacity">{displayCapacity}</p>
                <p className="card-cost">${item.cost}</p>

                <div className="quantity-controls">
                  <button
                    type="button"
                    className="btn-stepper btn-decrement"
                    onClick={() => dispatch(decrementQuantity(index))}
                    disabled={item.quantity === 0}
                    aria-label={`Decrease ${item.name}`}
                  >
                    –
                  </button>
                  <span className="quantity-display" aria-live="polite">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="btn-stepper btn-increment"
                    onClick={() => dispatch(incrementQuantity(index))}
                    aria-label={`Increase ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="subtotal-container">
        <div className="subtotal-pill">
          <span>Total Cost: ${totalVenueCost}</span>
        </div>
      </div>
    </section>
  )
}
