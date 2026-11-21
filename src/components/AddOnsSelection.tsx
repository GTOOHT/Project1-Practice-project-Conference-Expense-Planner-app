import { useAppDispatch, useAppSelector } from '../store/hooks'
import { incrementAvQuantity, decrementAvQuantity } from '../store/avSlice'
import { svgFallbacks } from '../assets/images'

const fallbackMap: Record<string, string> = {
  Projectors: svgFallbacks.projector,
  Speaker: svgFallbacks.speaker,
  Microphones: svgFallbacks.microphone,
  Whiteboards: svgFallbacks.whiteboard,
  Signage: svgFallbacks.signage,
}

export function AddOnsSelection() {
  const dispatch = useAppDispatch()
  const avItems = useAppSelector((state) => state.av)

  const totalAvCost = avItems.reduce(
    (sum, item) => sum + item.cost * item.quantity,
    0,
  )

  return (
    <section id="addons" className="selection-section">
      <div className="section-header-banner">
        <h2>Add-ons Selection</h2>
      </div>

      <div className="cards-grid">
        {avItems.map((item, index) => (
          <div key={item.name} className="product-card">
            <div className="card-image-wrap">
              <img
                src={item.img}
                alt={item.name}
                className="card-image"
                loading="lazy"
                onError={(e) => {
                  const fallback = fallbackMap[item.name] || svgFallbacks.projector
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback
                  }
                }}
              />
            </div>

            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-cost">${item.cost}</p>

              <div className="quantity-controls">
                <button
                  type="button"
                  className="btn-stepper btn-decrement"
                  onClick={() => dispatch(decrementAvQuantity(index))}
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
                  onClick={() => dispatch(incrementAvQuantity(index))}
                  aria-label={`Increase ${item.name}`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="subtotal-container">
        <div className="subtotal-pill">
          <span>Total Cost: ${totalAvCost}</span>
        </div>
      </div>
    </section>
  )
}
