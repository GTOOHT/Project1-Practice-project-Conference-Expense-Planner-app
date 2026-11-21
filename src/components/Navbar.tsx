interface NavbarProps {
  onShowDetails: () => void
  onNavigateHome: () => void
}

export function Navbar({ onShowDetails, onNavigateHome }: NavbarProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-brand"
          onClick={onNavigateHome}
          title="Return to Home"
        >
          Conference Expense Planner
        </button>

        <div className="navbar-links">
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollTo('venue')}
          >
            Venue
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollTo('addons')}
          >
            Add-ons
          </button>
          <button
            type="button"
            className="nav-link-btn"
            onClick={() => scrollTo('meals')}
          >
            Meals
          </button>
        </div>

        <button
          type="button"
          className="btn-show-details"
          onClick={onShowDetails}
        >
          Show Details
        </button>
      </div>
    </nav>
  )
}
