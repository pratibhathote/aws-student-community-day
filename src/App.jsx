import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { sessions, faqs } from "./data";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [selectedSession, setSelectedSession] = useState(null);
  const [flippedFaq, setFlippedFaq] = useState(null);

  const [registered, setRegistered] = useState(() => {
    return localStorage.getItem("awsRegistered") || "";
  });

  const [email, setEmail] = useState(registered);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const categories = [
    "All",
    "Cloud",
    "AI / ML",
    "DevOps",
    "Serverless",
  ];

  const levels = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  const filteredSessions = sessions.filter((session) => {
    const categoryMatch =
      category === "All" || session.category === category;

    const levelMatch =
      level === "All" || session.level === level;

    return categoryMatch && levelMatch;
  });

  const handleRegister = (event) => {
    event.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail) return;

    localStorage.setItem("awsRegistered", cleanEmail);

    setRegistered(cleanEmail);
    setRegistrationComplete(true);
  };

  const scrollToRegister = () => {
    document.getElementById("register")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToSessions = () => {
    document.getElementById("sessions")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <a href="#" className="brand">
          <span className="brand-mark">aws</span>
          <span className="brand-divider"></span>
          <span className="brand-text">
            Student Community Day
          </span>
        </a>

        <nav className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#sessions">
            Sessions
          </a>

          <a href="#venue">
            Venue
          </a>

          <a href="#faq">
            FAQ
          </a>

          {registered && (
            <a
              href="#register"
              className="registered-link"
            >
              Registered
            </a>
          )}

        </nav>

        <button
          className="nav-cta"
          onClick={scrollToRegister}
        >
          Register
          <ArrowRight size={16} />
        </button>

      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="hero-eyebrow">
              AWS STUDENT COMMUNITY DAY
            </div>

            <h1>
              Learn cloud.
              <br />
              <span>Build what's next.</span>
            </h1>

            <p className="hero-description">
              A student-first community experience designed
              to help you explore AWS, build practical skills
              and connect with fellow builders.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={scrollToRegister}
              >
                Register Free
                <ArrowRight size={20} />
              </button>

              <button
                className="secondary-button"
                onClick={scrollToSessions}
              >
                Explore Sessions
              </button>

            </div>

          </div>


          {/* EVENT CARD */}

          <div className="event-card">

            <div className="event-card-top">

              <span className="event-label">
                SAVE THE DATE
              </span>

              <span className="event-status">
                FREE
              </span>

            </div>

            <div className="event-date">

              <span>
                27
              </span>

              <div>
                <strong>
                  SEP
                </strong>

                <small>
                  2026
                </small>
              </div>

            </div>

            <div className="event-details">

              <div className="event-detail">
                <span>DATE</span>
                <strong>
                  Sunday, 27 September 2026
                </strong>
              </div>

              <div className="event-detail">
                <span>VENUE</span>
                <strong>
                  IGDTUW, New Delhi
                </strong>
              </div>

              <div className="event-detail">
                <span>TIME</span>
                <strong>
                  9:00 AM – 5:00 PM
                </strong>
              </div>

              <div className="event-detail">
                <span>FOR</span>
                <strong>
                  Students & Builders
                </strong>
              </div>

            </div>

            <div className="event-card-footer">
              LEARN • BUILD • CONNECT
            </div>

          </div>


          {/* OLD HERO STRIP
              THIS IS THE VERSION BEFORE THE NOTE-CARD EXPERIMENT
          */}

          <div className="hero-strip">

            <div>
              <span>01</span>
              <strong>Learn</strong>
              <p>Explore cloud & AI</p>
            </div>

            <div>
              <span>02</span>
              <strong>Build</strong>
              <p>Turn ideas into projects</p>
            </div>

            <div>
              <span>03</span>
              <strong>Connect</strong>
              <p>Meet fellow builders</p>
            </div>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section className="about-section" id="about">

          <div className="section-heading">

            <span className="section-label">
              WHY THIS EVENT
            </span>

            <h2>
              Built around
              <br />
              <span>your learning journey.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-intro">

              <p>
                AWS Student Community Day is a space for
                students to explore cloud technology through
                talks, practical sessions and conversations
                with people already building with AWS.
              </p>

              <p>
                Whether you're discovering cloud for the
                first time or already working on projects,
                you can find something relevant to your next
                step.
              </p>

            </div>


            <div className="about-points">

              <div className="about-point">

                <span>
                  01
                </span>

                <div>
                  <h3>
                    Discover
                  </h3>

                  <p>
                    Understand what cloud can help you build.
                  </p>
                </div>

              </div>


              <div className="about-point">

                <span>
                  02
                </span>

                <div>
                  <h3>
                    Practice
                  </h3>

                  <p>
                    Learn concepts you can apply to real projects.
                  </p>
                </div>

              </div>


              <div className="about-point">

                <span>
                  03
                </span>

                <div>
                  <h3>
                    Connect
                  </h3>

                  <p>
                    Meet students, developers and cloud builders.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section className="skills-section">

          <div className="section-heading centered">

            <span className="section-label">
              WHAT YOU CAN EXPLORE
            </span>

            <h2>
              Pick your
              <br />
              <span>next skill.</span>
            </h2>

          </div>


          <div className="skills-grid">

            <div className="skill-card">

              <span className="skill-number">
                01
              </span>

              <div className="skill-symbol">
                ◌
              </div>

              <h3>
                Cloud
              </h3>

              <p>
                Build a strong foundation in cloud computing
                and AWS services.
              </p>

            </div>


            <div className="skill-card">

              <span className="skill-number">
                02
              </span>

              <div className="skill-symbol">
                ✦
              </div>

              <h3>
                AI / ML
              </h3>

              <p>
                Discover how AI applications can be built
                and deployed on AWS.
              </p>

            </div>


            <div className="skill-card">

              <span className="skill-number">
                03
              </span>

              <div className="skill-symbol">
                ↗
              </div>

              <h3>
                DevOps
              </h3>

              <p>
                Understand deployment workflows and cloud
                infrastructure.
              </p>

            </div>


            <div className="skill-card">

              <span className="skill-number">
                04
              </span>

              <div className="skill-symbol">
                ◇
              </div>

              <h3>
                Serverless
              </h3>

              <p>
                Explore event-driven applications and scalable
                architectures.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SESSIONS
        ========================= */}

        <section
          className="sessions-section"
          id="sessions"
        >

          <div className="section-heading">

            <span className="section-label">
              EXPLORE THE DAY
            </span>

            <h2>
              Sessions that
              <br />
              <span>match your level.</span>
            </h2>

            <p>
              Filter by topic and experience level to find
              sessions relevant to you.
            </p>

          </div>


          {/* FILTERS */}

          <div className="filters">

            <div className="filter-group">

              <span className="filter-title">
                TOPIC
              </span>

              <div className="filter-buttons">

                {categories.map((item) => (

                  <button
                    key={item}
                    className={
                      category === item
                        ? "filter-button active"
                        : "filter-button"
                    }
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>


            <div className="filter-group">

              <span className="filter-title">
                EXPERIENCE
              </span>

              <div className="filter-buttons">

                {levels.map((item) => (

                  <button
                    key={item}
                    className={
                      level === item
                        ? "filter-button active"
                        : "filter-button"
                    }
                    onClick={() => setLevel(item)}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* SESSION CARDS */}

          <div className="sessions-grid">

            {filteredSessions.map((session) => (

              <article
                className="session-card"
                key={session.id}
                onClick={() =>
                  setSelectedSession(session)
                }
              >

                <div className="session-top">

                  <span className="session-category">
                    {session.category}
                  </span>

                  <span className="session-level">
                    {session.level}
                  </span>

                </div>


                <h3>
                  {session.title}
                </h3>


                <p>
                  {session.description}
                </p>


                <div className="session-meta">

                  <span>
                    {session.time}
                  </span>

                  <span>
                    {session.duration}
                  </span>

                </div>


                <div className="session-bottom">

                  <span>
                    {session.speaker}
                  </span>

                  <ArrowRight size={18} />

                </div>

              </article>

            ))}

          </div>


          {filteredSessions.length === 0 && (

            <div className="empty-state">

              <div className="empty-icon">
                ◇
              </div>

              <h3>
                No sessions found
              </h3>

              <p>
                Try changing your filters to explore more sessions.
              </p>

            </div>

          )}

        </section>


        {/* =========================
            SESSION MODAL
        ========================= */}

        {selectedSession && (

          <div
            className="modal-backdrop"
            onClick={() =>
              setSelectedSession(null)
            }
          >

            <div
              className="session-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedSession(null)
                }
                aria-label="Close"
              >
                <X size={20} />
              </button>


              <div className="modal-label">
                {selectedSession.category}
              </div>


              <h2>
                {selectedSession.title}
              </h2>


              <div className="modal-meta">

                <span>
                  {selectedSession.time}
                </span>

                <span>
                  {selectedSession.duration}
                </span>

                <span>
                  {selectedSession.level}
                </span>

              </div>


              <div className="modal-speaker">

                <span className="speaker-dot"></span>

                <div>

                  <small>
                    SESSION BY
                  </small>

                  <strong>
                    {selectedSession.speaker}
                  </strong>

                </div>

              </div>


              <p className="modal-description">
                {selectedSession.description}
              </p>


              <div className="learn-box">

                <span className="learn-label">
                  WHAT YOU'LL LEARN
                </span>

                <ul>

                  {selectedSession.learn.map((item) => (

                    <li key={item}>

                      <Check size={16} />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>


              <button
                className="primary-button modal-button"
                onClick={() => {
                  setSelectedSession(null);
                  scrollToRegister();
                }}
              >
                Register for the day
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        )}


        {/* =========================
            VENUE
        ========================= */}

        <section
          className="venue-section"
          id="venue"
        >

          <div className="venue-content">

            <span className="section-label">
              FIND YOUR WAY
            </span>


            <h2>
              Meet us at
              <br />
              <span>IGDTUW.</span>
            </h2>


            <p className="venue-intro">
              Your AWS Student Community Day experience starts
              the moment you walk through the doors. Come ready
              to learn, meet fellow builders and find your next
              thing to build.
            </p>


            <div className="venue-card">

              <div className="venue-icon">
                <span>⌂</span>
              </div>


              <div>

                <span className="venue-type">
                  MAIN VENUE
                </span>


                <h3>
                  Auditorium
                </h3>


                <p>
                  Indira Gandhi Delhi Technical University
                  for Women
                </p>


                <p className="venue-location">
                  Kashmere Gate, Delhi
                </p>

              </div>

            </div>


            <div className="venue-experience">

              <div>
                <strong>
                  01
                </strong>

                <span>
                  Check in
                </span>
              </div>


              <div>
                <strong>
                  02
                </strong>

                <span>
                  Learn & build
                </span>
              </div>


              <div>
                <strong>
                  03
                </strong>

                <span>
                  Connect
                </span>
              </div>

            </div>

          </div>


          <div className="map-container">

            <iframe
              title="IGDTUW venue map"
              src="https://www.google.com/maps?q=Indira+Gandhi+Delhi+Technical+University+for+Women,+Kashmere+Gate,+Delhi&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>


            <div className="map-overlay">

              <span>
                📍
              </span>

              <div>

                <strong>
                  IGDTUW Auditorium
                </strong>

                <p>
                  Kashmere Gate, Delhi
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            QUOTE
        ========================= */}

        <section className="quote-section">

          <div className="quote-mark">
            “
          </div>

          <blockquote>
            Come curious.
            <br />
            Leave ready to build.
          </blockquote>

          <p>
            Learn from the community. Build with the cloud.
          </p>

        </section>


        {/* =========================
            REGISTRATION
        ========================= */}

        <section
          className="registration-section"
          id="register"
        >

          <div className="registration-copy">

            <span className="section-label">
              YOUR NEXT STEP
            </span>


            <h2>
              Ready to
              <br />
              <span>show up?</span>
            </h2>


            <p>
              Reserve your place and get ready for a full day
              of learning, building and meeting the community.
            </p>

          </div>


          <div className="registration-card">

            {registrationComplete || registered ? (

              <div className="confirmation">

                <div className="confirmation-icon">
                  <Check size={28} />
                </div>


                <span className="confirmation-label">
                  REGISTRATION CONFIRMED
                </span>


                <h3>
                  You're registered!
                </h3>


                <p>
                  We have your registration for AWS Student
                  Community Day.
                </p>


                <div className="confirmation-details">

                  <div>
                    <span>
                      EMAIL
                    </span>

                    <strong>
                      {registered || email}
                    </strong>
                  </div>


                  <div>
                    <span>
                      DATE
                    </span>

                    <strong>
                      27 September 2026
                    </strong>
                  </div>


                  <div>
                    <span>
                      VENUE
                    </span>

                    <strong>
                      IGDTUW Auditorium
                    </strong>
                  </div>

                </div>

              </div>

            ) : (

              <form
                className="registration-form"
                onSubmit={handleRegister}
              >

                <div className="form-header">

                  <span>
                    REGISTER FREE
                  </span>

                  <h3>
                    Save your spot.
                  </h3>

                </div>


                <label>

                  Full Name

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                  />

                </label>


                <label>

                  Email

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />

                </label>


                <label>

                  College / University

                  <input
                    type="text"
                    placeholder="Your college"
                    required
                  />

                </label>


                <label>

                  Year of Study

                  <select
                    defaultValue=""
                    required
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select your year
                    </option>

                    <option value="1">
                      1st Year
                    </option>

                    <option value="2">
                      2nd Year
                    </option>

                    <option value="3">
                      3rd Year
                    </option>

                    <option value="4">
                      4th Year
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </label>


                <button
                  type="submit"
                  className="primary-button register-button"
                >
                  Complete Registration
                  <ArrowRight size={18} />
                </button>


                <small className="form-note">
                  No payment required. Your registration is
                  saved on this device.
                </small>

              </form>

            )}

          </div>

        </section>


        {/* =========================
            FAQ
        ========================= */}

        <section
          className="faq-section"
          id="faq"
        >

          <div className="section-heading centered">

            <span className="section-label">
              BEFORE YOU COME
            </span>

            <h2>
              Questions?
              <br />
              <span>We've got you.</span>
            </h2>

          </div>


          <div className="faq-grid">

            {faqs.map((faq, index) => {

              const isFlipped =
                flippedFaq === index;

              return (

                <button
                  className={
                    isFlipped
                      ? "faq-card flipped"
                      : "faq-card"
                  }
                  key={faq.question}
                  onClick={() =>
                    setFlippedFaq(
                      isFlipped
                        ? null
                        : index
                    )
                  }
                  type="button"
                >

                  <div className="faq-front">

                    <span className="faq-number">
                      0{index + 1}
                    </span>

                    <h3>
                      {faq.question}
                    </h3>

                    <span className="faq-hint">
                      CLICK TO FLIP ↗
                    </span>

                  </div>


                  <div className="faq-back">

                    <span className="faq-number">
                      0{index + 1}
                    </span>

                    <p>
                      {faq.answer}
                    </p>

                    <span className="faq-hint">
                      CLICK TO FLIP ↗
                    </span>

                  </div>

                </button>

              );
            })}

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-brand">

          <span className="brand-mark">
            aws
          </span>

          <span className="brand-divider"></span>

          <span>
            Student Community Day
          </span>

        </div>


        <div className="footer-center">
          Learn. Build. Connect.
        </div>


        <div className="footer-right">
          <span>
            © 2026
          </span>

          <span>
            Student Community
          </span>
        </div>

      </footer>

    </div>
  );
}

export default App;