import { useEffect } from 'react'
import { useAppSelector } from '../store/hooks'
import type { SummaryLineItem } from '../types'

interface ShowDetailsModalProps {
  open: boolean
  onClose: () => void
  numberOfPeople: number
}

export function ShowDetailsModal({
  open,
  onClose,
  numberOfPeople,
}: ShowDetailsModalProps) {
  const venues = useAppSelector((state) => state.venue)
  const avItems = useAppSelector((state) => state.av)
  const meals = useAppSelector((state) => state.meals)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  const itemsList: SummaryLineItem[] = []

  // Selected venues
  venues.forEach((item) => {
    if (item.quantity > 0) {
      itemsList.push({
        name: item.name,
        unitCost: item.cost,
        quantity: item.quantity.toString(),
        totalCost: item.cost * item.quantity,
      })
    }
  })

  // Selected AV equipment
  avItems.forEach((item) => {
    if (item.quantity > 0) {
      itemsList.push({
        name: item.name,
        unitCost: item.cost,
        quantity: item.quantity.toString(),
        totalCost: item.cost * item.quantity,
      })
    }
  })

  // Selected meals
  meals.forEach((meal) => {
    if (meal.selected && numberOfPeople > 0) {
      itemsList.push({
        name: meal.name,
        unitCost: meal.cost,
        quantity: `For ${numberOfPeople} people`,
        totalCost: meal.cost * numberOfPeople,
      })
    }
  })

  const grandTotal = itemsList.reduce((acc, line) => acc + line.totalCost, 0)

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            TOTAL COST FOR THE EVENT
          </h2>
          <div className="modal-grand-total">${grandTotal}</div>
        </div>

        <div className="modal-table-wrap">
          {itemsList.length === 0 ? (
            <p className="no-items-message">
              No items selected yet. Select rooms, add-ons, or meals to view the breakdown.
            </p>
          ) : (
            <table className="details-table">
              <thead>
                <tr>
                  <th scope="col" className="col-name">Name</th>
                  <th scope="col" className="col-unit">Unit Cost</th>
                  <th scope="col" className="col-qty">Quantity</th>
                  <th scope="col" className="col-total">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {itemsList.map((item, idx) => (
                  <tr key={`${item.name}-${idx}`}>
                    <td className="cell-name">{item.name}</td>
                    <td className="cell-unit">${item.unitCost}</td>
                    <td className="cell-qty">{item.quantity}</td>
                    <td className="cell-total">${item.totalCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-modal-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
