/* global React */
const { useState: useState2, useMemo: useMemo2 } = React;

// -------- Publications page --------
function PublicationsPage() {
  const [tag, setTag] = useState2("All");
  const [q, setQ] = useState2("");
  const pubs = window.PUBLICATIONS;
  const tags = useMemo2(() => {
    const counts = {};
    pubs.forEach(p => { counts[p.tag] = (counts[p.tag] || 0) + 1; });
    const ordered = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    return ["All", ...ordered];
  }, [pubs]);

  const filtered = pubs.filter(p => {
    if (tag !== "All" && p.tag !== tag) return false;
    if (q && !(p.title.toLowerCase().includes(q.toLowerCase()) || p.venue.toLowerCase().includes(q.toLowerCase()) || p.authors.join(" ").toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  });

  // Group by year
  const byYear = {};
  filtered.forEach(p => { (byYear[p.year] ||= []).push(p); });
  const years = Object.keys(byYear).map(Number).sort((a,b) => b-a);

  return (
    <div>
      <section className="section page-head">
        <div className="wrap">
          <div className="kicker">Research</div>
          <h1 className="page-h1">
            Publications
          </h1>
          <p className="page-sub">
            Filter by topic, or search by title, author, or venue.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <div className="pub-filters">
              {tags.map(t => (
                <button key={t} className={cx("chip", tag === t && "active")} onClick={() => setTag(t)}>{t}</button>
              ))}
            </div>
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search title, author, venue..."
              className="pub-search"
            />
          </div>

          <div className="pubs">
            {years.map(y => (
              <React.Fragment key={y}>
                {byYear[y].map((p, i) => (
                  <div className="year-row" key={p.id + i}>
                    <div className="year">{i === 0 ? y : ""}</div>
                    <div className="body">
                      <div className="t">{p.title}</div>
                      <div className="authors">{authorList(p.authors)}</div>
                      <div className="meta">
                        <span className="venue">{p.venue}</span>
                        <span className="tag">{p.tag}</span>
                        {p.award && <span className="award">{p.award}</span>}
                      </div>
                      <div className="links">
                        {p.links
                          ? Object.entries(p.links).map(([k, v]) => (
                              <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>
                            ))
                          : <span className="pending">preprint coming</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: 40, textAlign: "center", color: "var(--mid)", fontSize: 13 }}>
                No papers match. Try a different filter.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// -------- Group page --------
function GroupPage() {
  return (
    <div>
      <section className="section group-hero">
        <div className="wrap">
          <div className="kicker">Group</div>
          <h1>
            Group and prospective students
          </h1>
          <p className="lede">
            We study how large language models behave: their reasoning, their safety and fairness,
            their reliability across contexts and cultures, and the mechanisms behind their outputs.
            The group sits at the intersection of NLP, AI safety, human-centered AI, and AI for health.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="photos">
            <div className="photo" style={{ backgroundImage: "url(assets/group.jpg)" }}>
              <div className="cap">Jun 2024 · Niagara Falls</div>
            </div>
            <div className="photo" style={{ backgroundImage: "url(assets/acl.jpg)" }}>
              <div className="cap">Aug 2024 · ACL, Bangkok</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <SectionHead label="Research directions" title="What we work on" />
          <div className="pillars">
            {[
              ["Reasoning & Evaluation", "Benchmarks that push AI reasoning and reveal failure modes."],
              ["Safety & Fairness", "Identifying and mitigating harmful behavior: culturally aware, context dependent."],
              ["Reliability", "Stress-testing AI across diverse conditions and real-world settings."],
              ["Interpretability", "Opening the black box to understand decisions and build trust."],
              ["Applied AI for Good", "Inclusive education, diverse storytelling, equitable healthcare."],
            ].map(([t, d], i) => (
              <div key={i} className="pillar">
                <div className="n">0{i + 1}</div>
                <div className="t">{t}</div>
                <div className="d">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <SectionHead label="People" title="Members" />
          {(() => {
            const tierOf = (role = "") => {
              if (/^PhD/i.test(role)) return "phd";
              if (/^MSc/i.test(role)) return "msc";
              return "ug";
            };
            const bucket = { phd: [], msc: [], ug: [] };
            window.GROUP.current.forEach(m => bucket[tierOf(m.role)].push(m));
            const tiers = [
              ["phd", "PhD students"],
              ["msc", "MSc students"],
              ["ug", "Undergraduate researchers"],
            ];
            return (
              <div className="team-tiers">
                {tiers.map(([k, label]) => bucket[k].length > 0 && (
                  <div className="tier" key={k}>
                    <h3>{label}</h3>
                    <div className="tier-grid">
                      {bucket[k].map((m, i) => (
                        <div className="member" key={i}>
                          <div className="n">{m.name}</div>
                          <div className="r">{m.role}</div>
                          {m.note && <div className="note">{m.note}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="tier">
                  <h3>Alumni</h3>
                  <div className="tier-grid">
                    {window.GROUP.alumni.map((m, i) => (
                      <div className="member" key={i}>
                        <div className="n">{m.name}</div>
                        {m.role && <div className="r">{m.role}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <SectionHead label="Prospective students" title="What I look for" />
          <div className="looking-for">
            <div className="lf-card">
              <div className="h">Technical foundation</div>
              <ul>
                <li>Strong programming (Python preferred)</li>
                <li>Experience with ML / DL frameworks</li>
                <li>Comfort with stats and experimental design</li>
              </ul>
            </div>
            <div className="lf-card">
              <div className="h">Research skills</div>
              <ul>
                <li>Clear technical writing (a dying art)</li>
                <li>Critical thinking about AI systems' limitations</li>
                <li>Can read, implement, and build on papers</li>
              </ul>
            </div>
            <div className="lf-card">
              <div className="h">Intellectual curiosity</div>
              <ul>
                <li>Interdisciplinary interests across AI & society</li>
                <li>Enthusiasm for both building and understanding</li>
                <li>Openness to linguists, psychologists, ethicists</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "var(--mid)", marginTop: 20 }}>
            <strong>Bonus:</strong> Prior NLP/LLM experience, main conference publications (ACL, EMNLP…), user study experience, or demonstrated interest in AI ethics/fairness.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="apply">
            <h3>Getting in touch</h3>
            <p>
              I'm always open to hearing from students whose interests genuinely align with the group. Email me at <code>aemami[at]emory.edu</code> with subject line{" "}
              <code>[Prospective Student]</code>.
            </p>
            <ul className="checklist">
              <li>Your CV / resume with links to projects or papers</li>
              <li>2–3 sentences on why our research vision excites you</li>
              <li>Any NLP / ML / AI ethics experience or coursework</li>
              <li>(Optional) A paper or project you're proud of</li>
            </ul>
            <p style={{ marginTop: 20, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
              Please write the email yourself, and keep it short. It is easy to tell.
            </p>
            <p style={{ marginTop: 20, fontSize: 14 }}>
              Formal applications go through the{" "}
              <a href="https://computerscience.emory.edu/graduate-phd/admissions/index.html" target="_blank" rel="noreferrer" style={{ borderBottom: "1px solid var(--accent-2)", color: "var(--accent-2)" }}>
                Emory CS admissions portal
              </a>
              . You can include my name in the statement of purpose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------- Teaching & Talks page --------
function TeachingTalksPage() {
  return (
    <div>
      <section className="section page-head">
        <div className="wrap">
          <div className="kicker">Teaching & Talks</div>
          <h1 className="page-h1">
            Teaching and talks
          </h1>
          <p className="page-sub">
            Courses at Emory and Brock, and invited talks, keynotes, and panels.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <SectionHead label="Courses" title="Courses taught" />
          <div className="courses">
            {window.COURSES.map((c, i) => (
              <div className="row" key={i}>
                <div className="year">{c.year}<span className="term">{c.term}</span></div>
                <div className="code">{c.code}</div>
                <div>
                  <div className="title">
                    {c.title}
                    {c.newCourse && <span className="new">New</span>}
                  </div>
                  <div className="desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Talks" title="Invited talks" />
          <div className="talks-list">
            {window.TALKS.map((t, i) => (
              <div className="row" key={i}>
                <div className="year">{t.year}</div>
                <div className="kind">{t.kind}</div>
                <div>
                  <div className="title">{t.title}</div>
                  <div className="venue">{t.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// -------- News archive --------
function NewsPage() {
  const byYear = {};
  window.NEWS.forEach(n => { (byYear[n.year] ||= []).push(n); });
  const years = Object.keys(byYear).map(Number).sort((a,b) => b-a);

  return (
    <div>
      <section className="section page-head">
        <div className="wrap">
          <div className="kicker">News</div>
          <h1 className="page-h1">
            News
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {years.map(y => (
            <div key={y} style={{ marginBottom: 48 }}>
              <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 24, paddingBottom: 10, borderBottom: "1px solid var(--ink)", marginBottom: 6 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--ink)", fontWeight: 500, letterSpacing: "-0.02em" }}>{y}</div>
                <div style={{ fontSize: 12, color: "var(--mid)", alignSelf: "end", paddingBottom: 4 }}>
                  {byYear[y].length} entries
                </div>
              </div>
              {byYear[y].map((n, i) => (
                <div key={i} className={cx("news-row", n.highlight && "highlight")}>
                  <div className="date">{n.date}</div>
                  <div className="text">
                    {n.link ? <a href={n.link} target="_blank" rel="noreferrer">{n.text}</a> : n.text}
                    {n.links && (
                      <div className="links" style={{ marginTop: 6 }}>
                        {Object.entries(n.links).map(([k, v]) => (
                          <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// -------- Contact page --------
function ContactPage() {
  return (
    <div>
      <section className="section contact">
        <div className="wrap">
          <div className="kicker">Contact</div>
          <div className="contact-grid" style={{ marginTop: 20 }}>
            <div>
              <div className="contact-big">
                Contact
              </div>
              <p style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 24, maxWidth: "52ch", lineHeight: 1.6 }}>
                The fastest way to reach me is email. I don't hold regular office hours; please book a time if we need to talk.
                For prospective students, please read the <a href="#group" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>Group page</a> first.
              </p>
              <div style={{ fontSize: 14, color: "var(--mid)", marginTop: 24, lineHeight: 1.7 }}>
                Goodrich C. White Hall, Room 215<br />
                301 Dowman Drive<br />
                Atlanta, GA 30322<br />
                United States
              </div>
            </div>
            <div>
              <div className="kicker" style={{ marginBottom: 8 }}>Links</div>
              <div className="contact-links">
                <a className="contact-link" href="mailto:aemami@emory.edu">
                  <span>aemami @ emory.edu</span><span className="arrow">→</span>
                </a>
                <a className="contact-link" href={window.SITE.scholar} target="_blank" rel="noreferrer">
                  <span>Google Scholar</span><span className="arrow">↗</span>
                </a>
                <a className="contact-link" href={window.SITE.twitter} target="_blank" rel="noreferrer">
                  <span>X · @_aliemami</span><span className="arrow">↗</span>
                </a>
                <a className="contact-link" href={window.SITE.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span><span className="arrow">↗</span>
                </a>
                <a className="contact-link" href={window.SITE.thesis} target="_blank" rel="noreferrer">
                  <span>PhD thesis (McGill)</span><span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PublicationsPage, GroupPage, TeachingTalksPage, NewsPage, ContactPage });
