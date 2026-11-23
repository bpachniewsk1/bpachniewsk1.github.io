/* German / English toggle.
   English lives in the HTML; elements marked data-i18n="key" get swapped to the
   German below. Strings that JavaScript builds itself live in STRINGS. */
(() => {
  const DE = {
    "nav.path": "Weg",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.about": "Über mich",

    "hero.eyebrow": "Dresden · offen für Stellen in ML/KI &amp; Robotik oder Software- &amp; Solutions-Engineering ab 2027",
    "link.demo": "Live-Demo",
    "hero.lede": "Informatik-Masterstudent an der TU&nbsp;Dresden. Ich lerne, Maschinen <em>sehen</em> und <em>handeln</em> zu lassen — Machine Learning, Computer Vision und Robotik — nach drei Jahren, in denen ich in der Industrie Software und Datenpipelines gebaut habe.",
    "hero.cta": "Kontakt aufnehmen",
    "hero.cv": "Lebenslauf (EN)",
    "arm.sorted": "sortiert",
    "fact.study": "Studium",
    "fact.studyV": "M.Sc. Informatik",
    "fact.work": "Arbeit",
    "fact.workV": "SachsenEnergie · Werkstudent",
    "fact.win": "1. Platz · CeTI Mobile Robotics Hackathon",
    "fact.lang": "Sprachen",
    "fact.langV": "4 Sprachen",

    "path.h": "Mein Weg bisher",
    "path.note": "Kein gerader Weg — aber jeder Schritt baut auf dem vorherigen auf.",
    "path.1h": "Studium &amp; erste Jobs in Dresden",
    "path.1p": "Beginn des Medieninformatik-Studiums an der TU Dresden mit ersten praktischen Softwareprojekten. Nebenbei verschiedene Jobs — vom Kundenberater in einem Onlineshop über Deutsch-Polnisch-Übersetzer bis zum Barkeeper.",
    "path.2h": "Software ausliefern",
    "path.2p": "Einstieg bei oneonedev als Praktikant; später Co-Lead einer React-Native-App und Full-Stack-SaaS-Features in .NET.",
    "path.3h": "Daten &amp; Systeme",
    "path.3p": "Bachelorarbeit zur Simulation von Energiesystemen in Julia. Data Engineering bei SachsenEnergie — Pipelines, Data Warehouses, Dashboards.",
    "path.4y": "2026 → heute",
    "path.4h": "Lernende Maschinen",
    "path.4p": "Master-Schwerpunkte: <strong>Machine Learning</strong>, <strong>Software Engineering</strong> und <strong>Systems Engineering</strong> — von Transformern für Bildkolorierung bis zu Detektionsmodellen auf einem echten Roboterarm.",

    "proj.h": "Ausgewählte Projekte",
    "proj.note": "Die kleinen Widgets sind spielerische Illustrationen — zum Ausprobieren.",
    "f.all": "Alle",
    "f.ml": "ML / Robotik",
    "f.data": "Daten",

    "robot.badge": "Gewinner",
    "robot.meta": "Okt. 2026 · CeTI-Hackathon",
    "robot.h": "Autonomer Müllsortier-Roboterarm",
    "robot.p": "Idee eingebracht und den Computer-Vision-Teil eines Roboterarms geleitet, der Müll erkennt und in den richtigen Behälter legt. Einen vortrainierten Detektor auf unsere Objekte feinjustiert und Handerkennung als automatischen Sicherheitsstopp ergänzt — der Arm hält an, sobald jemand hineingreift. Unser Team hat den ersten Platz geholt; <a href=\"#top\" class=\"inline-link\">das Spielzeug ganz oben</a> ist eine kleine Hommage daran.",
    "tag.hand": "Hand-Tracking",

    "col.meta": "2026 · Forschungsprojekt",
    "col.h": "Neighbourhood Attention für Bildkolorierung",
    "col.p": "Einen Transformer entworfen und trainiert, der plausible Farben für Graustufenbilder vorhersagt — mit Neighbourhood Attention, damit er lokal und effizient bleibt. Trainiert auf dem HPC-Cluster der TU Dresden.",
    "col.in": "Graustufen rein",
    "col.out": "Farbe raus",

    "bau.badge": "Wird unternehmensweit eingeführt",
    "bau.h": "Projektmanagement- &amp; Bauzeitenplanungs-Tool",
    "bau.p": "Einer der leitenden Entwickler der gesamten Lösung, von der Architektur an. Ich verantworte das Requirements Engineering — Interviews mit Product Ownern, Anforderungen und User Stories, strategische Ziele und Top-Level-Features — und setze alles selbst um, von der Datenbank bis zum Frontend.",
    "g.plan": "Planung",
    "g.perm": "Genehmigung",
    "g.civil": "Tiefbau",
    "g.inst": "Montage",
    "g.hand": "Übergabe",
    "g.today": "heute",
    "tag.arch": "Architektur",
    "tag.db": "Datenbank → Frontend",

    "hz.t0": "Zeichen",
    "hz.t1": "Zählwörter",
    "hz.t2": "Grammatik",
    "hz.meta": "Eigenes Projekt · Anki-Add-on",
    "hz.p1": "Ein Anki-Add-on, das ich für mein eigenes Chinesischlernen gebaut habe. Es legt alle Zeichen der offiziellen HSK-3.1-Liste als Raster an und färbt jedes danach ein, wie gut ich es kann — mit einem roten Punkt bei denen, die ich immer wieder vergesse. Weitere Ansichten gruppieren Wörter nach Zählwort und verfolgen Grammatikpunkte Stufe für Stufe.",
    "hz.p2": "Zuzusehen, wie sich das Raster füllt, ist die beste Motivation, die ich bisher gefunden habe — und es zeigt genau, was als Nächstes dran ist.",
    "hz.link": "Auf AnkiWeb ansehen",

    "meta.personal": "Eigenes Projekt",
    "radar.p": "Eine Web-App, die Werkstudentenstellen mehrerer Jobportale über deren öffentliche APIs auf einer durchsuchbaren Seite bündelt. Kleiner Umfang, echtes Ergebnis: Der erste Nutzer hat darüber innerhalb einer Woche einen neuen Job gefunden.",
    "dw.p": "Verstreute Excel-Tabellen in einen relationalen Datenspeicher mit Pipeline überführt, dazu Power-BI-Dashboards zu Projekten, Ressourcen und Budget. Heute der unternehmensweite Standard für die Analysen der Führungskräfte.",

    "en.meta": "2025 · Bachelorarbeit · Note 1,3",
    "en.h": "Energiesystemmodell des Smart Mobility Lab",
    "en.p": "Simulation einer PV-Anlage, Batterie, Brennstoffzelle, Elektrolyseur und H₂-Speicher — mit kontextabhängigen Modellvarianten und Szenarioanalyse.",
    "en.bat": "Batterie",
    "en.sun": "Sonne",


    "exp.h": "Erfahrung",
    "exp.note": "3+ Jahre professionelle Erfahrung in der Softwareentwicklung, neben dem Studium.",
    "exp.1w": "Okt. 2025 — heute",
    "exp.1t": "Werkstudent Data Engineering",
    "exp.1p": "Einer der leitenden Entwickler eines Projektmanagement- und Bauzeitenplanungs-Tools, das gerade unternehmensweit eingeführt wird — vom Requirements Engineering mit Product Ownern bis zur Umsetzung. Außerdem eine automatisierte ETL-Pipeline gebaut, die Altdaten in ein relationales Schema migriert, und Engineering-Praktiken eingeführt, die das Tooling wartbar halten.",
    "exp.2w": "Jul. 2023 — Sep. 2025",
    "exp.2c": "· oneonedev, Warschau",
    "exp.2p": "Als Praktikant mit Full-Stack-Features und Datenbanklogik für eine internationale SaaS-Plattform gestartet, die Marken und Zulieferer verbindet. Ab Okt. 2024 Co-Lead der Mobile-App-Entwicklung mit End-to-End-Verantwortung für zentrale Features.",
    "exp.3w": "Mär. — Sep. 2025",
    "exp.3t": "IT-Administrator &amp; Automatisierung",
    "exp.3p": "IT-Infrastruktur am Laufen gehalten, Automatisierungsskripte geschrieben, auf Datenintegrität und Verfügbarkeit geachtet.",
    "exp.4t": "Vor der Tech-Welt",
    "exp.4c": "· verschiedene Jobs",
    "exp.4p": "Kundenberater in einem Onlineshop, Deutsch-Polnisch-Übersetzer, Barkeeper und Servicekraft in Dresden. Hat mich mehr über Menschen und Druck gelehrt als jede Vorlesung.",
    "edu.h": "Studium",
    "edu.1p": "Schwerpunkte: Machine Learning · Software Engineering · Systems Engineering",
    "edu.2t": "B.Sc. Medieninformatik",
    "edu.2p": "Abschlussarbeit zur kontextorientierten Modellierung und Simulation von Anlagen für erneuerbare Energien.",

    "ab.h": "Abseits des Codes",
    "ab.rec": "Auszeichnungen &amp; Engagement",
    "ab.r1": "<strong>1. Platz</strong>, CeTI Mobile Robotics Hackathon <span class=\"muted\">— 2026</span>",
    "ab.r2": "<strong>Studentische Hilfskraft (STIK-Tutor)</strong>, unterstütze internationale Erstsemester beim Ankommen an der TU Dresden <span class=\"muted\">— seit 2026</span>",
    "ab.r3": "<strong>Outstanding Delegate</strong>, elbMUN Model United Nations, zum weltweiten Zugang zu Impfstoffen <span class=\"muted\">— 2026</span>",
    "ab.r4": "<strong>2. Preis</strong>, Europaquiz — Studienreise zum Europäischen Parlament <span class=\"muted\">— 2019</span>",
    "ab.r5": "<strong>Nationaler Halbfinalist</strong>, Jugend debattiert international <span class=\"muted\">— 2019</span>",
    "ab.tools": "Werkzeugkasten",
    "ab.mlv": "PyTorch, Transformer, Objekterkennung, ROS 2, HPC",
    "ab.sw": "Software &amp; Daten",
    "ab.langs": "Sprachen",
    "l.pl": "Polnisch",
    "l.de": "Deutsch",
    "l.en": "Englisch",
    "l.zh": "Chinesisch",
    "l.native": "Muttersprache",
        "l.learning": "und am Lernen",
    "ab.off": "Abseits der Tastatur",
    "ab.i1": "Bouldern &amp; Wandern",
    "ab.i2": "Kochen",
    "ab.i3": "Debattieren",
    "ab.i4": "Wirtschaft",
    "ab.i5": "Philosophie",
    "ab.i6": "Ostasiatische Geschichte",

    "ct.k": "Hallo sagen",
    "ct.h": "Ein Thema rund um ML, Robotik oder Software Engineering?<br /><span>Ich freue mich, mehr darüber zu erfahren.</span>",
    "ft": "Dresden · immer am Lernen",
  };

  // Strings built in script.js
  const STRINGS = {
    en: {
      "arm.tap": "tap an item to sort",
      "arm.pick": "picking {name}…",
      "arm.hand": "✋ hand detected — arm paused",
      "arm.clear": "clear — resuming",
      "bin.plastic": "plastic", "bin.paper": "paper", "bin.glass": "glass",
      "energy.surplus": "Surplus: the battery charges and the electrolyser stores the rest as H₂.",
      "energy.balanced": "Balanced: PV covers the load, the battery buffers the gaps.",
      "energy.deficit": "Deficit: the fuel cell turns stored H₂ back into electricity.",
      "gallery": [
        "The robot arm, depth camera and sorting table",
        "Hand detection next to YOLO and CLIP object labels",
        "Live cup detection from the RealSense D435",
        "Bins for plastic and paper next to marked dead zones",
        "The winning team",
      ],
    },
    de: {
      "arm.tap": "Teil antippen zum Sortieren",
      "arm.pick": "greife {name}…",
      "arm.hand": "✋ Hand erkannt — Arm pausiert",
      "arm.clear": "frei — weiter geht's",
      "bin.plastic": "Plastik", "bin.paper": "Papier", "bin.glass": "Glas",
      "energy.surplus": "Überschuss: Die Batterie lädt, der Elektrolyseur speichert den Rest als H₂.",
      "energy.balanced": "Ausgeglichen: PV deckt die Last, die Batterie puffert.",
      "energy.deficit": "Defizit: Die Brennstoffzelle macht aus gespeichertem H₂ wieder Strom.",
      "gallery": [
        "Roboterarm, Tiefenkamera und Sortiertisch",
        "Handerkennung neben YOLO- und CLIP-Objektlabels",
        "Live-Becher-Erkennung mit der RealSense D435",
        "Behälter für Plastik und Papier neben markierten Sperrzonen",
        "Das Gewinnerteam",
      ],
    },
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  nodes.forEach((n) => (n.dataset.en = n.innerHTML));

  let lang = "en";
  try { lang = localStorage.getItem("lang") || ""; } catch (_) {}
  if (lang !== "en" && lang !== "de") lang = (navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en";

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    nodes.forEach((n) => {
      const de = DE[n.dataset.i18n];
      n.innerHTML = l === "de" && de != null ? de : n.dataset.en;
    });
    document.querySelectorAll(".lang-toggle [data-l]").forEach((s) => s.classList.toggle("is-on", s.dataset.l === l));
    try { localStorage.setItem("lang", l); } catch (_) {}
    document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  }

  window.I18N = {
    get lang() { return lang; },
    t(key, vars = {}) {
      const v = (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS.en[key];
      return typeof v === "string" ? v.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "") : v;
    },
  };

  const btn = document.querySelector(".lang-toggle");
  if (btn) btn.addEventListener("click", () => apply(lang === "en" ? "de" : "en"));
  apply(lang);
})();
