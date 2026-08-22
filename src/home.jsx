/* global React */
const { useState, useEffect, useMemo } = React;

// -------- small helpers --------
const cx = (...a) => a.filter(Boolean).join(" ");
const authorList = (authors) =>
  authors.map((a, i) => {
    const isMe = /Ali Emami/i.test(a);
    return React.createElement(
      React.Fragment,
      { key: i },
      React.createElement("span", { className: isMe ? "me" : "" }, a),
      i < authors.length - 1 ? ", " : ""
    );
  });

// -------- Nav --------
function Nav({ route, go }) {
  const [open, setOpen] = useState(false);
  const items = [
    ["home", "Home"],
    ["research", "Research"],
    ["group", "Group & PhD"],
    ["teaching", "Teaching & Talks"],
    ["news", "News"],
    ["contact", "Contact"],
  ];
  const handle = (k) => (e) => { e.preventDefault(); go(k); setOpen(false); };
  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#home" onClick={handle("home")}>
          <span className="brand-dot" />
          <span>Ali Emami</span>
        </a>
        <nav className="nav-links">
          {items.map(([k, label]) => (
            <a
              key={k}
              href={`#${k}`}
              className={route === k ? "active" : ""}
              onClick={handle(k)}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className={cx("nav-toggle", open && "open")}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <nav className="nav-panel">
          {items.map(([k, label]) => (
            <a
              key={k}
              href={`#${k}`}
              className={route === k ? "active" : ""}
              onClick={handle(k)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

// -------- Hero --------
function Hero({ go }) {
  return (
    <section className="section hero-band" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="hero hero-grid">
          <div className="hero-text">
            <p className="lede">
              I am an Assistant Professor of Computer Science at Emory University.
              I work in natural language processing, with a focus on the evaluation and interpretability of large language models.
              My group's research spans commonsense reasoning, AI safety and fairness, cultural analytics,
              computational social science, and human-AI interaction. We design benchmarks and evaluation methods,
              and study models' internal behaviour, to understand where they succeed, where they fail, and why.
            </p>
            <p className="lede">
              I am recruiting PhD students with research experience in machine learning and natural language processing.
              For how to apply, see the <a href="#group" onClick={(e) => { e.preventDefault(); go("group"); }}>group page</a>.
            </p>
          </div>
          <div className="hero-side">
            <div
              className="avatar"
              style={{ backgroundImage: "url(assets/avatar.jpg)" }}
              aria-label="Ali Emami"
            />
            <div className="socials">
              <a href="https://scholar.google.ca/citations?hl=en&user=Pjdq8cUAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer" aria-label="Google Scholar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L0 9l4.5 3v6L12 23l7.5-5v-6L24 9 12 1zm0 2.236L21.764 9 12 15.764 2.236 9 12 3.236zM6 13.5l6 4 6-4v3.5l-6 4-6-4v-3.5z"/></svg>
                <span>Scholar</span>
              </a>
              <a href="https://www.linkedin.com/in/ali-emami-226b30280/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/_aliemami" target="_blank" rel="noreferrer" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X</span>
              </a>
              <a href="mailto:aemami@emory.edu" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5 12 12.5l8.5-6"/></svg>
                <span>aemami@emory.edu</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// -------- Recruiting callout --------
function Recruit({ go }) {
  return (
    <section style={{ padding: "12px 0 0" }}>
      <div className="wrap">
        <div className="recruit">
          <div className="recruit-icon" aria-hidden="true"></div>
          <div className="recruit-body">
            <div className="title">Open to prospective students</div>
            <div className="sub">
              I'm always happy to hear from students whose interests align with the group, especially in evaluation, cultural competence, and interpretability.
            </div>
          </div>
          <a className="recruit-cta" href="#group" onClick={(e) => { e.preventDefault(); go("group"); }}>
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}

// -------- Section head --------
function SectionHead({ label, title, sub, right }) {
  return (
    <div className="section-head">
      <div>
        <div className="label">{label}</div>
      </div>
      <div>
        <h2>{title}</h2>
        {sub && <div className="sub">{sub}</div>}
        {right}
      </div>
    </div>
  );
}

// -------- Featured publications --------
function Featured({ go }) {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          label="Selected work"
          title="Selected work"
          sub="A selection of recent papers from the group."
        />
        <div className="feature-list">
          {window.FEATURED.map((p) => (
            <article className="feature" key={p.id}>
              <div className="year">{p.year}</div>
              <div className="body">
                <div className="venue">
                  <span>{p.venue}</span>
                  <span>· {p.tag}</span>
                  {p.award && <span className="award">{p.award}</span>}
                </div>
                <div className="title">{p.title}</div>
                <div className="authors">{authorList(p.authors)}</div>
                <div className="blurb">{p.blurb}</div>
                {p.press && (
                  <div className="press">
                    {p.press.map((pr, i) => (
                      <span key={i}>{pr}{i < p.press.length - 1 ? " ·" : ""}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="links">
                {p.links && Object.entries(p.links).map(([k, v]) => (
                  <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <a
            href="#research"
            onClick={(e) => { e.preventDefault(); go("research"); }}
            className="more-link"
          >
            See all publications →
          </a>
        </div>
      </div>
    </section>
  );
}

// -------- Interests --------
function Interests() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          label="Research interests"
          title="Research interests"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {window.INTERESTS.map((i, idx) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid var(--rule-soft)",
                paddingTop: 12,
                fontFamily: "var(--serif)",
                fontWeight: 500,
                fontSize: 17,
                letterSpacing: "-0.01em",
              }}
            >
              <div className="kicker" style={{ marginBottom: 6 }}>{String(idx + 1).padStart(2, "0")}</div>
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// -------- Recent news preview --------
function RecentNews({ go }) {
  const latest = window.NEWS.slice(0, 6);
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          label="News"
          title="Recent news"
        />
        <div>
          {latest.map((n, i) => (
            <div key={i} className={cx("news-row", n.highlight && "highlight")}>
              <div className="date">{n.date}</div>
              <div className="text">
                {n.link ? <a href={n.link} target="_blank" rel="noreferrer">{n.text}</a> : n.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <a
            href="#news"
            onClick={(e) => { e.preventDefault(); go("news"); }}
            className="more-link"
          >
            Full archive →
          </a>
        </div>
      </div>
    </section>
  );
}

// -------- Education mini --------
function Education() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead label="Background" title="Appointments and education" />
        {(() => {
          const appts = window.EDUCATION.filter(e => e.kind === "appt");
          const edus = window.EDUCATION.filter(e => e.kind !== "appt");
          const Row = (e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 24, padding: "12px 0", borderTop: "1px solid var(--rule-soft)" }}>
              <div style={{ fontSize: 14, color: "var(--mid)", fontVariantNumeric: "tabular-nums" }}>{e.year}</div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: 16, letterSpacing: "-0.01em" }}>{e.degree}</div>
                <div style={{ fontSize: 13, color: "var(--mid)", marginTop: 2 }}>{e.inst}</div>
              </div>
            </div>
          );
          return (
            <div className="path-cols">
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>Appointments</div>
                {appts.map(Row)}
              </div>
              <div>
                <div className="kicker" style={{ marginBottom: 8 }}>Education</div>
                {edus.map(Row)}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Recruit, Featured, Interests, RecentNews, Education, SectionHead, authorList, cx });
