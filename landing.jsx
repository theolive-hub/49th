// THE 49TH — Pre-launch landing page
// Minimal, hero-led, single column.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqvwavy";

const HEADLINE = {
  eyebrow: "Launching soon",
  h1: "Production intelligence for Canadian film & TV.",
  dek: "A real-time record of what's in production, who's making it, and where the money is moving. Built for the people working in the industry.",
};

const SIGNALS = [
  { text: "Netflix greenlights 'Echoes' limited series",                    time: "2h" },
  { text: "Top director attached to untitled sci-fi project",               time: "3h" },
  { text: "ACTRA reaches tentative deal with producers",                    time: "5h" },
  { text: "Bell Fund announces $12M Q2 allocation",                         time: "7h" },
  { text: "Major studio lease signed at Vancouver Film Studios",            time: "9h" },
];

const TRACKS = [
  { num: "01", title: "Projects",    body: "Every active film, series and pilot in development, production or post. Tracked by status, location and company." },
  { num: "02", title: "People",      body: "Directors, writers, cinematographers, department heads. Who's attached to what, and when they signed on." },
  { num: "03", title: "Companies",   body: "Production companies, broadcasters, studios, post houses. Their slates, partners and movement." },
  { num: "04", title: "Financing",   body: "Tax credits, fund allocations, broadcaster commitments, equity deals. The money behind the slate." },
];

const COUNTERS = [
  { num: "142",  label: "Active projects" },
  { num: "28",   label: "New this week" },
  { num: "64",   label: "Companies tracked" },
  { num: "10",   label: "Provinces covered" },
];

const Landing = () => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState("");
  const [submittedEmail, setSubmittedEmail] = React.useState("");
  const inputRef = React.useRef(null);

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("invalid");
      setError("Enter a valid email address.");
      inputRef.current?.focus();
      return;
    }
    setStatus("submitting");
    setError("");

    try {
      const fd = new FormData();
      fd.append("email", email.trim());
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.[0]?.message || "Something went wrong. Try again, or email tips@49th.io.";
        throw new Error(msg);
      }
      setSubmittedEmail(email.trim());
      setStatus("success");
    } catch (err) {
      setStatus("invalid");
      setError(err.message || "Network error. Try again.");
    }
  };

  const onChange = (v) => {
    setEmail(v);
    if (status === "invalid") {
      setStatus("idle");
      setError("");
    }
  };

  return (
    <div className="page">
      <header className="topbar">
        <a href="/" className="markRow" aria-label="The 49th">
          <img src="assets/49-lockup.svg" alt="The 49th" width="140" height="140" />
        </a>
        <div className="meta">
          <span><span className="dot"></span>Pre-launch</span>
          <span>Spring 2026</span>
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">{HEADLINE.eyebrow}</p>
        <h1>{HEADLINE.h1}</h1>
        <p className="dek">{HEADLINE.dek}</p>

        <div className="signup">
          {status === "success" ? (
            <SuccessState email={submittedEmail} />
          ) : (
            <form className="signupForm" onSubmit={onSubmit} noValidate>
              <span className="label">Get early access</span>
              <div className="emailRow">
                <input
                  ref={inputRef}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@productioncompany.ca"
                  value={email}
                  onChange={(e) => onChange(e.target.value)}
                  className={status === "invalid" ? "invalid" : ""}
                  aria-invalid={status === "invalid"}
                  aria-describedby="form-note"
                />
                <button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting" : "Request access"}
                  <span className="arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
              <p id="form-note" className={"formNote " + (status === "invalid" ? "error" : "")}>
                {status === "invalid"
                  ? error
                  : "No spam. We'll just let you know when we're out of beta."}
              </p>
            </form>
          )}
        </div>

        <SignalsStrip />
        <Counter />
        <Tracks />
      </section>

      <footer className="footer">
        <span>© 2026 The 49th</span>
        <div className="links">
          <a href="mailto:tips@49th.io">Tips</a>
        </div>
      </footer>
    </div>
  );
};

const SuccessState = ({ email }) => (
  <div className="success" role="status" aria-live="polite">
    <span className="check" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
    <div className="body">
      <strong>You're on the list.</strong>
      <p>
        Confirmation sent to <span className="em">{email}</span>. The 49th will be in touch when early access opens.
      </p>
    </div>
  </div>
);

const SignalsStrip = () => (
  <div className="signalsStrip">
    <h2 className="stripLabel">
      <span>Industry signals (sample)</span>
    </h2>
    <div>
      {SIGNALS.map((s, i) => (
        <div className="signalRow" key={i}>
          <span className="text">{s.text}</span>
          <time>{s.time} ago</time>
        </div>
      ))}
    </div>
  </div>
);

const Counter = () => (
  <div className="counter">
    <h2 className="visually-hidden">By the numbers</h2>
    {COUNTERS.map((c, i) => (
      <div className="cell" key={i}>
        <p className="num">{c.num}</p>
        <p className="label">{c.label}</p>
      </div>
    ))}
  </div>
);

const Tracks = () => (
  <div className="tracks">
    <h2 className="stripLabel">What we track</h2>
    <div className="grid">
      {TRACKS.map((t) => (
        <div className="item" key={t.num}>
          <span className="num">{t.num}</span>
          <div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Landing />);
