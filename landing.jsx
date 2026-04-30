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

const SOCIALS = [
  { name: "Facebook",  href: "https://facebook.com/49thonline",     path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
  { name: "Instagram", href: "https://instagram.com/49thonline",    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" },
  { name: "X",         href: "https://x.com/49thonline",            path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "YouTube",   href: "https://youtube.com/@49thonline",     path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "Threads",   href: "https://threads.net/@49thonline",     path: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.757-.502-.584-1.278-.88-2.309-.88h-.028c-.825 0-1.945.227-2.66 1.286l-1.51-.97c.96-1.421 2.516-2.205 4.17-2.205h.052c2.768.018 4.413 1.726 4.582 4.726.957.307 1.671.762 2.179 1.388.708.874 1.04 2.03.99 3.439-.084 2.366-1.33 4.298-3.484 5.43-1.625.86-3.583 1.262-5.71 1.262zm1.27-7.802c-.275 0-.553.014-.834.044-1.282.103-2.078.706-2.044 1.546.04.97 1.121 1.418 2.276 1.357 1.07-.058 2.473-.477 2.713-3.193a10.44 10.44 0 0 0-2.108-.182z" },
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

      <main className="hero">
        <p className="eyebrow">{HEADLINE.eyebrow}</p>
        <h1>{HEADLINE.h1}</h1>
        <p className="dek">{HEADLINE.dek}</p>

        <div className="signup">
          {status === "success" ? (
            <SuccessState email={submittedEmail} />
          ) : (
            <form className="signupForm" onSubmit={onSubmit} noValidate>
              <label htmlFor="emailInput" className="label">Get early access</label>
              <div className="emailRow">
                <input
                  ref={inputRef}
                  id="emailInput"
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
      </main>

      <footer className="footer">
        <span>© 2026 The 49th</span>
        <div className="links">
          <SocialLinks />
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

const SocialLinks = () => (
  <span className="socials">
    {SOCIALS.map((s) => (
      <a key={s.name} href={s.href} aria-label={"The 49th on " + s.name} target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={s.path} /></svg>
      </a>
    ))}
  </span>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Landing />);
