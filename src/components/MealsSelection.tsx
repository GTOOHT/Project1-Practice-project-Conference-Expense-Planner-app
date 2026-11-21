import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMealSelection } from '../store/mealsSlice'

interface MealsSelectionProps {
  numberOfPeople: number
  onNumberOfPeopleChange: (val: number) => void
}

export function MealsSelection({
  numberOfPeople,
  onNumberOfPeopleChange,
}: MealsSelectionProps) {
  const dispatch = useAppDispatch()
  const meals = useAppSelector((state) => state.meals)

  const selectedMealsUnitSum = meals
    .filter((meal) => meal.selected)
    .reduce((sum, meal) => sum + meal.cost, 0)

  const totalMealsCost = selectedMealsUnitSum * (numberOfPeople > 0 ? numberOfPeople : 0)

  return (
    <section id="meals" className="selection-section">
      <div className="section-header-banner">
        <h2>Meals Selection</h2>
      </div>

      <div className="meals-container">
        <div className="people-input-wrapper">
          <label htmlFor="numberOfPeople" className="people-label">
            Number of People:
          </label>
          <input
            id="numberOfPeople"
            type="number"
            min="1"
            max="10000"
            className="people-input"
            value={numberOfPeople === 0 ? '' : numberOfPeople}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10)
              onNumberOfPeopleChange(isNaN(val) ? 0 : Math.max(0, val))
            }}
          />
        </div>

        <div className="meals-grid">
          {meals.map((meal, index) => (
            <div key={meal.name} className="meal-option-card">
              <label className="meal-checkbox-label">
                <input
                  type="checkbox"
                  checked={meal.selected}
                  onChange={() => dispatch(toggleMealSelection(index))}
                  className="meal-checkbox"
                />
                <div className="meal-info">
                  <span className="meal-name">{meal.name}</span>
                  <span className="meal-price">${meal.cost}</span>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="subtotal-container">
          <div className="subtotal-pill">
            <span>Total Cost: ${totalMealsCost}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
