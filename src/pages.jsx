/* global React */
const { useState: useState2, useMemo: useMemo2 } = React;

// -------- Publications page --------
function PublicationsPage() {
  const [tag, setTag] = useState2("All");
  const [q, setQ] = useState2("");
  const pubs = window.PUBLICATIONS;
  const tags = useMemo2(() => ["All", ...Array.from(new Set(pubs.map(p => p.tag)))], [pubs]);

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
      <section className="section" style={{ paddingTop: 64, paddingBottom: 28 }}>
        <div className="wrap">
          <div className="kicker">§ Publications</div>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "12px 0 16px", maxWidth: "22ch" }}>
            Papers, <em style={{ color: "var(--accent)" }}>benchmarks</em>, and <em style={{ color: "var(--accent)" }}>experiments</em>.
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--ink-2)", maxWidth: "60ch", margin: 0 }}>
            Across reasoning, evaluation, fairness, culture, and applied AI. Filter by topic or search by keyword.
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
              style={{ marginLeft: "auto", background: "transparent", border: "1px solid rgba(26,26,26,0.2)", padding: "8px 12px", fontFamily: "var(--mono)", fontSize: 12, width: 240, color: "var(--ink)" }}
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
                      {p.links && (
                        <div className="links">
                          {Object.entries(p.links).map(([k, v]) => (
                            <a key={k} href={v} target="_blank" rel="noreferrer">{k} ↗</a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: 40, textAlign: "center", color: "var(--mid)", fontFamily: "var(--mono)", fontSize: 13 }}>
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
          <div className="kicker">§ Group & prospective students</div>
          <h1>
            Come build things that make AI <em>worthy of trust</em>.
          </h1>
          <p className="lede">
            I lead an interdisciplinary group at Emory at the intersection of
            NLP, AI safety, human-centered AI, and AI4Health. We care about what models
            actually do, underneath the benchmark numbers.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <SectionHead label="§ 01 · Research directions" title="What we work on." />
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
          <SectionHead label="§ 02 · The team" title="Current & past." />
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
          <SectionHead label="§ 03 · What I look for" title="Strong candidates usually bring" />
          <div className="looking-for">
            <div className="lf-card">
              <div className="h">🧠 Technical foundation</div>
              <ul>
                <li>Strong programming (Python preferred)</li>
                <li>Experience with ML / DL frameworks</li>
                <li>Comfort with stats and experimental design</li>
              </ul>
            </div>
            <div className="lf-card">
              <div className="h">📝 Research skills</div>
              <ul>
                <li>Clear technical writing (a dying art)</li>
                <li>Critical thinking about AI systems' limitations</li>
                <li>Can read, implement, and build on papers</li>
              </ul>
            </div>
            <div className="lf-card">
              <div className="h">💡 Intellectual curiosity</div>
              <ul>
                <li>Interdisciplinary interests across AI & society</li>
                <li>Enthusiasm for both building and understanding</li>
                <li>Openness to linguists, psychologists, ethicists</li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "var(--mid)", marginTop: 20 }}>
            <em>Bonus:</em> Prior NLP/LLM experience, main conference publications (ACL, EMNLP…), user study experience, or demonstrated interest in AI ethics/fairness.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="apply">
            <h3>How to <em>actually</em> get in touch.</h3>
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
            <p style={{ marginTop: 20, fontSize: 14, color: "rgba(250,247,242,0.75)" }}>
              Pro tip: I like emails that read like they were genuinely, succinctly written by <em>you</em>. After seeing many, I insist on this.
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
      <section className="section" style={{ paddingTop: 64, paddingBottom: 28 }}>
        <div className="wrap">
          <div className="kicker">§ Teaching & Talks</div>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "12px 0 16px", maxWidth: "20ch" }}>
            The <em style={{ color: "var(--accent)" }}>classroom</em> and the <em style={{ color: "var(--accent)" }}>stage</em>.
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--ink-2)", maxWidth: "60ch", margin: 0 }}>
            Courses I've designed or taught, and talks I've given, from graduate seminars to performing arts centres.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <SectionHead label="§ 01 · Courses" title="New courses marked in red. Many designed from scratch." />
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
          <SectionHead label="§ 02 · Invited talks & keynotes" title="Where I've spoken." />
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
      <section className="section" style={{ paddingTop: 64, paddingBottom: 28 }}>
        <div className="wrap">
          <div className="kicker">§ News</div>
          <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: "12px 0 16px", maxWidth: "20ch" }}>
            What's been <em style={{ color: "var(--accent)" }}>happening</em>.
          </h1>
          <p style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--ink-2)", maxWidth: "60ch", margin: 0 }}>
            Acceptances, awards, press, and the occasional convocation address. Highlighted items are particularly meaningful.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {years.map(y => (
            <div key={y} style={{ marginBottom: 48 }}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, paddingBottom: 12, borderBottom: "1px solid var(--ink)", marginBottom: 8 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--ink)", fontWeight: 400 }}>{y}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--mid)", letterSpacing: 0.14, textTransform: "uppercase", alignSelf: "end", paddingBottom: 8 }}>
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
          <div className="kicker">§ Contact</div>
          <div className="contact-grid" style={{ marginTop: 20 }}>
            <div>
              <div className="contact-big">
                Say <em>hello</em>.<br />
                <span style={{ color: "var(--mid)" }}>Or, more practically,</span>
              </div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--ink-2)", marginTop: 24, maxWidth: "50ch" }}>
                The fastest way to reach me is email. I don't hold regular office hours; please book a time if we need to talk.
                For prospective students, please read the <a href="#group" style={{ borderBottom: "1px solid var(--accent)", color: "var(--accent)" }}>Group page</a> first.
              </p>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--mid)", marginTop: 24, lineHeight: 1.8, letterSpacing: 0.04 }}>
                GOODRICH C. WHITE HALL, ROOM 215<br />
                301 DOWMAN DRIVE<br />
                ATLANTA, GA 30322<br />
                UNITED STATES
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
