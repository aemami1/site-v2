/* global React, ReactDOM */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "warm",
  "density": "comfortable",
  "dark": false
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useStateApp(() => {
    const h = (window.location.hash || "#home").replace("#", "");
    return ["home", "research", "group", "teaching", "news", "contact"].includes(h) ? h : "home";
  });
  const [tweakOpen, setTweakOpen] = useStateApp(false);
  const [tweaksOn, setTweaksOn] = useStateApp(false);
  const [tweaks, setTweaks] = useStateApp(TWEAK_DEFAULTS);

  const go = (r) => {
    setRoute(r);
    window.location.hash = r;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffectApp(() => {
    const onHash = () => {
      const h = (window.location.hash || "#home").replace("#", "");
      if (["home", "research", "group", "teaching", "news", "contact"].includes(h)) setRoute(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Tweaks protocol
  useEffectApp(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffectApp(() => {
    document.body.classList.toggle("dark", !!tweaks.dark);
    // palette override via CSS variables
    const palettes = {
      warm:  { accent: "#a03a2c", accent2: "#c86a4b" },
      cool:  { accent: "#2c4a7a", accent2: "#5a7fb8" },
      olive: { accent: "#4a6b3a", accent2: "#6f8c56" },
      gold:  { accent: "#b8802a", accent2: "#d9a852" },
    };
    const p = palettes[tweaks.palette] || palettes.warm;
    document.documentElement.style.setProperty("--accent", p.accent);
    document.documentElement.style.setProperty("--accent-2", p.accent2);
  }, [tweaks]);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  return (
    <>
      <Nav route={route} go={go} />

      {route === "home" && (
        <>
          <Hero go={go} />
          <div style={{ height: 8 }} />
          <Recruit go={go} />
          <Featured go={go} />
          <Interests />
          <RecentNews go={go} />
          <Education />
        </>
      )}
      {route === "research" && <PublicationsPage />}
      {route === "group" && <GroupPage />}
      {route === "teaching" && <TeachingTalksPage />}
      {route === "news" && <NewsPage />}
      {route === "contact" && <ContactPage />}

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>© {new Date().getFullYear()} Ali Emami · Emory University</div>
          <div>Last touched {new Date().toLocaleDateString()}</div>
        </div>
      </footer>

      {tweaksOn && (
        <div className={cx("tweaks", tweakOpen && "open")}>
          <div className="tweaks-header" onClick={() => setTweakOpen(!tweakOpen)}>
            <span>Tweaks</span>
            <span>{tweakOpen ? "▾" : "▴"}</span>
          </div>
          <div className="tweaks-body">
            <div className="tweak-row">
              <span className="tweak-label">Accent palette</span>
              <div className="swatches">
                {[
                  ["warm", "#a03a2c"],
                  ["cool", "#2c4a7a"],
                  ["olive", "#4a6b3a"],
                  ["gold", "#b8802a"],
                ].map(([k, c]) => (
                  <div key={k} className={cx("swatch", tweaks.palette === k && "active")}
                       style={{ background: c }} title={k}
                       onClick={() => setTweak("palette", k)} />
                ))}
              </div>
            </div>
            <div className="tweak-row">
              <span className="tweak-label">Dark mode</span>
              <button
                className={cx("chip", tweaks.dark && "active")}
                onClick={() => setTweak("dark", !tweaks.dark)}
              >
                {tweaks.dark ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
