interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="landing-page-container">
      <div className="landing-overlay" />
      <div className="landing-content">
        {/* Left column: Brand, Tagline, Get Started button */}
        <div className="landing-left">
          <h1 className="landing-title">Conference Expense Planner</h1>
          <p className="landing-subtitle">Plan your next major event with us!</p>
          <button
            type="button"
            className="btn-get-started"
            onClick={onGetStarted}
          >
            Get Started
          </button>
        </div>

        {/* Right column: About the company card */}
        <div className="landing-right">
          <div className="about-company-card">
            <p>
              Welcome to <strong>BudgetEase Solutions</strong>, your trusted partner
              in simplifying budget management and financial solutions. At
              BudgetEase, we understand the importance of effective budget planning
              and strive to provide intuitive, user-friendly solutions to meet the
              diverse needs of our clients.
            </p>
            <p>
              With a commitment to efficiency and innovation, we empower individuals
              and businesses to take control of their finances and achieve their
              goals with ease.
            </p>
            <p>
              At BudgetEase Solutions, our mission is to make budgeting effortless
              and accessible for everyone. Whether you're a small business owner, a
              busy professional, or an individual looking to manage your personal
              finances, we offer tailored solutions to streamline your budgeting
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
