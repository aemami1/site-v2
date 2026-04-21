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
  const items = [
    ["home", "Home"],
    ["research", "Research"],
    ["group", "Group & PhD"],
    ["teaching", "Teaching & Talks"],
    ["news", "News"],
    ["contact", "Contact"],
  ];
  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>
          <span className="brand-dot" />
          <span>Ali Emami</span>
        </a>
        <nav className="nav-links">
          {items.map(([k, label]) => (
            <a
              key={k}
              href={`#${k}`}
              className={route === k ? "active" : ""}
              onClick={(e) => { e.preventDefault(); go(k); }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// -------- Hero --------
function Hero({ go }) {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="wrap">
        <div className="hero hero-grid">
          <div>
            <div className="kicker">Assistant Professor · Emory University</div>
            <h1>
              I study how language models <em>reason</em>,<br />
              <em>generalize</em>, and quietly <em>mirror</em> us.
            </h1>
            <p className="lede">
              I'm <strong>Ali Emami</strong>, an Assistant Professor of Computer Science at Emory.
              My group builds <span className="hl">benchmarks, evaluations, and interpretations</span>{" "}
              that ask not just whether a model gets it right, but{" "}
              <em>whose right</em> it is getting, across reasoning, culture, and society.
            </p>
          </div>
          <div
            className="avatar"
            style={{ backgroundImage: "url(assets/avatar.jpg)" }}
            aria-label="Ali Emami"
          />
        </div>

        <div className="meta-strip">
          <div className="item">
            <div className="k">Role</div>
            <div className="v">Assistant Professor, CS</div>
          </div>
          <div className="item">
            <div className="k">Institution</div>
            <div className="v">Emory University</div>
          </div>
          <div className="item">
            <div className="k">Office</div>
            <div className="v">Goodrich C. White Hall 215</div>
          </div>
          <div className="item">
            <div className="k">Email</div>
            <div className="v">
              <a href="mailto:aemami@emory.edu">aemami @ emory.edu</a>
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
              I'm not running a formal recruitment round this cycle, but I'm always happy to hear from students whose interests align with the group, evaluation, cultural competence, and interpretability especially.
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
          label="§ 01 · Selected work"
          title="Selected work."
          sub="Recent papers from the group, across culture, fairness, memorization, reasoning, and evaluation."
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
            style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", borderBottom: "1px solid var(--accent)", paddingBottom: 2 }}
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
          label="§ 02 · Research interests"
          title="What I think about."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {window.INTERESTS.map((i, idx) => (
            <div
              key={i}
              style={{
                borderTop: "2px solid var(--ink)",
                paddingTop: 12,
                fontFamily: "var(--serif)",
                fontSize: 20,
                letterSpacing: "-0.005em",
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
    <section className="section" style={{ background: "var(--paper-2)", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)", paddingLeft: "calc(50vw - 50%)", paddingRight: "calc(50vw - 50%)" }}>
      <div className="wrap">
        <SectionHead
          label="§ 03 · Dispatches"
          title="Recent news."
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
            style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", borderBottom: "1px solid var(--accent)", paddingBottom: 2 }}
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
        <SectionHead label="§ 04 · Path here" title="The road to Emory." />
        {(() => {
          const appts = window.EDUCATION.filter(e => e.kind === "appt");
          const edus = window.EDUCATION.filter(e => e.kind !== "appt");
          const Row = (e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, padding: "16px 0", borderTop: "1px solid rgba(26,26,26,0.1)" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--mid-2)" }}>{e.year}</div>
              <div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 18, letterSpacing: "-0.005em" }}>{e.degree}</div>
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
