/* English / German / Polish toggle.
   English lives in the HTML; elements marked data-i18n="key" get swapped to the
   German or Polish below. Strings that JavaScript builds itself live in STRINGS. */
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
    "path.5y": "Feb – Jul 2027 · als Nächstes",
    "path.5h": "Austausch in Taiwan",
    "path.5p": "Auslandssemester an der <strong>National Cheng Kung University (NCKU)</strong> in Tainan, Taiwan — und die Chance, mein Chinesisch wirklich anzuwenden.",
    "path.4p":"Master-Schwerpunkte: <strong>Machine Learning</strong>, <strong>Software Engineering</strong> und <strong>Systems Engineering</strong> — von Transformern für Bildkolorierung bis zu Detektionsmodellen auf einem echten Roboterarm.",

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
    "col.p": "Ein Kolorierungsnetz gebaut, dessen Blöcke statt Faltungen Dilated Neighbourhood Attention (DiNAT) nutzen: Für jedes Pixel sagt es eine Verteilung über 313 Farbklassen vorher. Trainiert auf ImageNet (64×64, bis zu 1,2 Mio. Bilder) mit zwei H100-GPUs auf dem HPC-Cluster der TU Dresden.",
    "col.in": "Graustufen rein",
    "col.out": "Farbe raus",
    "col.tabIdea": "Die Idee",
    "col.tabArch": "Architektur",
    "col.tabRes": "Ergebnisse",
    "arch.bins": "313 Farbklassen",
    "arch.out": "Farbe",
    "arch.text": "Hourglass-Encoder–Decoder: Jeder Kontextblock ist ein DiNAT-Block (Fenster 7, RoPE, QK-Norm). Im Bottleneck wächst die Dilation (1, 2, 2), sodass sich das rezeptive Feld ohne Mehrkosten vergrößert. Als Loss dient eine klassen-rebalancierte Kreuzentropie, damit seltene, kräftige Farben nicht im Grau untergehen.",
    "arch.fig": "Aus meinem Report: Dilation verteilt dasselbe 7×7-Fenster über eine größere Fläche.",
    "res.barn": "Scheune",
    "res.ambulance": "Krankenwagen",
    "res.fireboat": "Löschboot",
    "res.shark": "Hai",
    "res.s1": "Farbigkeit (Original 0,14, Grau-Baseline 0,00)",
    "res.s2": "Validation Loss, 300k → 1,2 Mio. Bilder",
    "res.s3": "PSNR(ab) vs. 22,81 der Grau-Baseline",
    "res.note": "Echte Ausgaben meines DiNAT-Modells auf zufälligen ImageNet-Validierungsbildern (64×64), aus meinem Report.",
    "col.local": "Nachbarschaft 5×5",
    "col.global": "Global",
    "col.note": "Konzeptskizze der Idee hinter NATTEN, nicht die Interna meines Modells. Pixel antippen oder überfahren.",

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
    "exp.note": "<strong class=\"hl\">3+ Jahre</strong> professionelle Erfahrung in der Softwareentwicklung, neben dem Studium.",
    "edu.3t": "Auslandssemester",
    "edu.3p": "National Cheng Kung University — geplantes Auslandssemester im Rahmen meines Masters.",
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

  const PL = {
    "nav.path": "Droga",
    "nav.projects": "Projekty",
    "nav.experience": "Doświadczenie",
    "nav.about": "O mnie",

    "hero.eyebrow": "Drezno · otwarty na role w ML/AI i robotyce albo w inżynierii oprogramowania i rozwiązań od 2027",
    "link.demo": "Demo na żywo",
    "hero.lede": "Student informatyki (studia magisterskie) na TU&nbsp;Dresden. Uczę maszyny <em>widzieć</em> i <em>działać</em> — uczenie maszynowe, widzenie komputerowe i robotyka — po trzech latach budowania oprogramowania i potoków danych w przemyśle.",
    "hero.cta": "Napisz do mnie",
    "hero.cv": "CV (EN)",
    "arm.sorted": "posortowane",
    "fact.study": "Studia",
    "fact.studyV": "M.Sc. Informatyka",
    "fact.work": "Praca",
    "fact.workV": "SachsenEnergie · praca studencka",
    "fact.win": "1. miejsce · CeTI Mobile Robotics Hackathon",
    "fact.lang": "Języki",
    "fact.langV": "4 języki",

    "path.h": "Moja droga",
    "path.note": "Nie po linii prostej — ale każdy krok coś dołożył.",
    "path.1h": "Studia i pierwsze prace w Dreźnie",
    "path.1p": "Początek studiów informatyki medialnej na TU Dresden i pierwsze praktyczne projekty programistyczne. Obok tego różne prace — od konsultanta klienta w sklepie internetowym, przez tłumacza niemiecko-polskiego, po barmana.",
    "path.2h": "Dostarczanie oprogramowania",
    "path.2p": "Start w oneonedev jako stażysta; później współprowadzenie aplikacji w React Native i funkcje full-stack SaaS w .NET.",
    "path.3h": "Dane i systemy",
    "path.3p": "Praca licencjacka o symulacji systemów energetycznych w Julii. Inżynieria danych w SachsenEnergie — potoki danych, hurtownie, dashboardy.",
    "path.4y": "2026 → teraz",
    "path.4h": "Uczące się maszyny",
    "path.4p": "Na studiach magisterskich skupiam się na <strong>uczeniu maszynowym</strong>, <strong>inżynierii oprogramowania</strong> i <strong>inżynierii systemów</strong> — od transformerów do koloryzacji obrazów po modele detekcji na prawdziwym ramieniu robota.",
    "path.5y": "lut – lip 2027 · następny krok",
    "path.5h": "Wymiana na Tajwanie",
    "path.5p": "Semestr wymiany na <strong>National Cheng Kung University (NCKU)</strong> w Tainanie na Tajwanie — i okazja, by naprawdę używać chińskiego.",

    "proj.h": "Wybrane projekty",
    "proj.note": "Małe widżety to zabawkowe ilustracje — można się nimi bawić.",
    "f.all": "Wszystkie",
    "f.ml": "ML / Robotyka",
    "f.data": "Dane",

    "robot.badge": "Zwycięzca",
    "robot.meta": "paź 2026 · Hackathon CeTI",
    "robot.h": "Autonomiczne ramię robota sortujące śmieci",
    "robot.p": "Zaproponowałem pomysł i prowadziłem część widzenia komputerowego ramienia robota, które rozpoznaje śmieci i odkłada je do właściwego pojemnika. Dostroiłem wytrenowany detektor do naszych obiektów i dodałem wykrywanie dłoni jako automatyczne zatrzymanie bezpieczeństwa — ramię staje, gdy ktoś sięgnie do środka. Nasz zespół zajął pierwsze miejsce; <a href=\"#top\" class=\"inline-link\">zabawka na górze strony</a> to mały ukłon w jego stronę.",
    "tag.hand": "Śledzenie dłoni",

    "col.meta": "2026 · Projekt badawczy",
    "col.h": "Neighbourhood attention do koloryzacji obrazów",
    "col.p": "Zbudowałem sieć do koloryzacji, której bloki zamiast splotów używają dilated neighbourhood attention (DiNAT): dla każdego piksela przewiduje rozkład na 313 klas kolorów. Trenowana na ImageNet (64×64, do 1,2 mln obrazów) na dwóch GPU H100 w klastrze HPC TU Dresden.",
    "col.in": "Odcienie szarości na wejściu",
    "col.out": "Kolor na wyjściu",
    "col.tabIdea": "Idea",
    "col.tabArch": "Architektura",
    "col.tabRes": "Wyniki",
    "arch.bins": "313 klas kolorów",
    "arch.out": "kolor",
    "arch.text": "Enkoder–dekoder typu hourglass: każdy blok kontekstu to blok DiNAT (okno 7, RoPE, QK-norm). W wąskim gardle rośnie dylatacja (1, 2, 2), więc pole recepcyjne się poszerza bez dodatkowego kosztu. Funkcją straty jest entropia krzyżowa z przeważeniem klas, żeby rzadkie, intensywne kolory nie ginęły w szarości.",
    "arch.fig": "Z mojego raportu: dylatacja rozkłada to samo okno 7×7 na większy obszar.",
    "res.barn": "Stodoła",
    "res.ambulance": "Karetka",
    "res.fireboat": "Łódź strażacka",
    "res.shark": "Rekin",
    "res.s1": "kolorowość (oryginał 0,14, szara baza 0,00)",
    "res.s2": "strata walidacyjna, 300 tys. → 1,2 mln obrazów",
    "res.s3": "PSNR(ab) wobec 22,81 dla szarej bazy",
    "res.note": "Prawdziwe wyniki mojego modelu DiNAT na losowych obrazach walidacyjnych ImageNet (64×64), z mojego raportu.",
    "col.local": "Sąsiedztwo 5×5",
    "col.global": "Globalnie",
    "col.note": "Szkic koncepcji stojącej za NATTEN, nie wnętrze mojego modelu. Najedź na piksel albo go dotknij.",

    "bau.badge": "Wdrażane w całej firmie",
    "bau.h": "Narzędzie do zarządzania projektami i harmonogramowania budów",
    "bau.p": "Jeden z wiodących deweloperów całego rozwiązania, począwszy od architektury. Odpowiadam za inżynierię wymagań — wywiady z product ownerami, wymagania i user stories, cele strategiczne i kluczowe funkcje — i sam wszystko wdrażam, od bazy danych po frontend.",
    "g.plan": "Planowanie",
    "g.perm": "Pozwolenie",
    "g.civil": "Roboty ziemne",
    "g.inst": "Montaż",
    "g.hand": "Odbiór",
    "g.today": "dziś",
    "tag.arch": "Architektura",
    "tag.db": "Baza danych → frontend",

    "hz.t0": "Znaki",
    "hz.t1": "Klasyfikatory",
    "hz.t2": "Gramatyka",
    "hz.meta": "Projekt własny · dodatek do Anki",
    "hz.p1": "Dodatek do Anki, który zbudowałem do własnej nauki chińskiego. Układa wszystkie znaki z oficjalnej listy HSK 3.1 w siatkę i koloruje każdy według tego, jak dobrze go znam — z czerwoną kropką przy tych, które ciągle zapominam. Kolejne widoki grupują słowa według klasyfikatora i śledzą punkty gramatyczne poziom po poziomie.",
    "hz.p2": "Patrzenie, jak siatka się zapełnia, to najlepsza motywacja, jaką znalazłem — i dokładnie pokazuje, czego uczyć się dalej.",
    "hz.link": "Zobacz na AnkiWeb",

    "meta.personal": "Projekt własny",
    "radar.p": "Aplikacja webowa, która zbiera oferty pracy dla studentów (Werkstudent) z kilku portali przez ich publiczne API na jednej przeszukiwalnej stronie. Mała skala, realny efekt: pierwszy użytkownik znalazł dzięki niej nową pracę w ciągu tygodnia.",
    "dw.p": "Przeniosłem rozproszone arkusze Excela do relacyjnego magazynu danych z potokiem i zbudowałem dashboardy Power BI o projektach, zasobach i budżecie. Dziś to firmowy standard dla analiz kierownictwa.",

    "en.meta": "2025 · Praca licencjacka · ocena 1,3",
    "en.h": "Model systemu energetycznego Smart Mobility Lab",
    "en.p": "Symulacja instalacji PV, baterii, ogniwa paliwowego, elektrolizera i magazynu H₂ — z kontekstowymi wariantami modelu i analizą scenariuszy.",
    "en.bat": "Bateria",
    "en.sun": "Słońce",

    "exp.h": "Doświadczenie",
    "exp.note": "<strong class=\"hl\">3+ lata</strong> zawodowego doświadczenia w inżynierii oprogramowania, równolegle ze studiami.",
    "exp.1w": "paź 2025 — teraz",
    "exp.1t": "Data Engineer (praca studencka)",
    "exp.1p": "Jeden z wiodących deweloperów narzędzia do zarządzania projektami i harmonogramowania budów, wdrażanego obecnie w całej firmie — od inżynierii wymagań z product ownerami po kompletną implementację. Zbudowałem też zautomatyzowany potok ETL migrujący stare dane do relacyjnego schematu i wprowadziłem praktyki inżynierskie, dzięki którym narzędzia da się utrzymywać.",
    "exp.2w": "lip 2023 — wrz 2025",
    "exp.2c": "· oneonedev, Warszawa",
    "exp.2p": "Zacząłem jako stażysta przy funkcjach full-stack i logice bazy danych międzynarodowej platformy SaaS łączącej marki z dostawcami. Od paź 2024 współprowadziłem rozwój aplikacji mobilnej i odpowiadałem za kluczowe funkcje od początku do końca.",
    "exp.3w": "mar — wrz 2025",
    "exp.3t": "Administrator IT i automatyzacja",
    "exp.3p": "Utrzymywałem infrastrukturę IT, pisałem skrypty automatyzujące, dbałem o integralność i dostępność danych.",
    "exp.4t": "Zanim trafiłem do IT",
    "exp.4c": "· różne prace",
    "exp.4p": "Konsultant klienta w sklepie internetowym, tłumacz niemiecko-polski, barman i kelner w Dreźnie. Nauczyło mnie to więcej o ludziach i pracy pod presją niż jakikolwiek wykład.",
    "edu.h": "Wykształcenie",
    "edu.1p": "Specjalizacja: uczenie maszynowe · inżynieria oprogramowania · inżynieria systemów",
    "edu.2t": "B.Sc. Informatyka medialna",
    "edu.2p": "Praca dyplomowa o kontekstowym modelowaniu i symulacji instalacji energii odnawialnej.",
    "edu.3t": "Semestr wymiany",
    "edu.3p": "National Cheng Kung University — planowana wymiana w ramach studiów magisterskich.",

    "ab.h": "Poza kodem",
    "ab.rec": "Wyróżnienia i zaangażowanie",
    "ab.r1": "<strong>1. miejsce</strong>, CeTI Mobile Robotics Hackathon <span class=\"muted\">— 2026</span>",
    "ab.r2": "<strong>Asystent akademicki (tutor STIK)</strong>, pomagam zagranicznym studentom pierwszego roku odnaleźć się na TU Dresden <span class=\"muted\">— od 2026</span>",
    "ab.r3": "<strong>Outstanding Delegate</strong>, elbMUN Model United Nations, o globalnym dostępie do szczepionek <span class=\"muted\">— 2026</span>",
    "ab.r4": "<strong>2. nagroda</strong>, Europaquiz — wyjazd studyjny do Parlamentu Europejskiego <span class=\"muted\">— 2019</span>",
    "ab.r5": "<strong>Półfinalista krajowy</strong>, Jugend debattiert international <span class=\"muted\">— 2019</span>",
    "ab.tools": "Narzędzia",
    "ab.mlv": "PyTorch, transformery, detekcja obiektów, ROS 2, HPC",
    "ab.sw": "Oprogramowanie i dane",
    "ab.langs": "Języki",
    "l.pl": "Polski",
    "l.de": "Niemiecki",
    "l.en": "Angielski",
    "l.zh": "Chiński",
    "l.native": "Ojczysty",
    "l.learning": "i wciąż się uczę",
    "ab.off": "Z dala od klawiatury",
    "ab.i1": "Bouldering i wędrówki",
    "ab.i2": "Gotowanie",
    "ab.i3": "Debaty",
    "ab.i4": "Ekonomia",
    "ab.i5": "Filozofia",
    "ab.i6": "Historia Azji Wschodniej",

    "ct.k": "Odezwij się",
    "ct.h": "Zajmujesz się ML, robotyką albo inżynierią oprogramowania?<br /><span>Chętnie dowiem się więcej.</span>",
    "ft": "Drezno · ciągle się uczę",
  };
  const DICTS = { de: DE, pl: PL };
  const LANGS = ["en", "de", "pl"];

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
      "na.local": "Each pixel attends only to its 5×5 neighbourhood: {k} of {n} pixels here. For a 256×256 image with a 7×7 window, that is ~1,300× fewer attention pairs than global attention.",
      "na.global": "Global self-attention: every pixel attends to all {n} pixels. The cost grows quadratically with image size.",
      "res.labels": ["Input", "300k", "500k", "1.2M", "Ground truth"],
      "res.cap": {
        "barn": "One grey barn, two plausible answers: the model painted it blue at 300k training images and red at 1.2M, which happens to match the original.",
        "ambulance": "The model consistently picks red for the car body, close to the original, while the background stays more muted.",
        "fireboat": "With more training data the red hull starts to appear (1.2M), though weaker than in the original.",
        "shark": "At 300k the water is brown; with 1.2M images the model learns that the sea around a shark is blue.",
      },
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
      "na.local": "Jedes Pixel beachtet nur seine 5×5-Nachbarschaft: hier {k} von {n} Pixeln. Bei einem 256×256-Bild mit 7×7-Fenster sind das ~1.300× weniger Attention-Paare als bei globaler Attention.",
      "na.global": "Globale Self-Attention: Jedes Pixel beachtet alle {n} Pixel. Die Kosten wachsen quadratisch mit der Bildgröße.",
      "res.labels": ["Input", "300k", "500k", "1,2 Mio.", "Original"],
      "res.cap": {
        "barn": "Eine graue Scheune, zwei plausible Antworten: Mit 300k Trainingsbildern malt das Modell sie blau, mit 1,2 Mio. rot – passend zum Original.",
        "ambulance": "Für die Karosserie wählt das Modell durchgehend Rot, nah am Original, während der Hintergrund gedämpfter bleibt.",
        "fireboat": "Mit mehr Trainingsdaten erscheint der rote Rumpf (1,2 Mio.), allerdings schwächer als im Original.",
        "shark": "Bei 300k ist das Wasser braun; mit 1,2 Mio. Bildern lernt das Modell, dass das Meer um einen Hai blau ist.",
      },
      "gallery": [
        "Roboterarm, Tiefenkamera und Sortiertisch",
        "Handerkennung neben YOLO- und CLIP-Objektlabels",
        "Live-Becher-Erkennung mit der RealSense D435",
        "Behälter für Plastik und Papier neben markierten Sperrzonen",
        "Das Gewinnerteam",
      ],
    },
    pl: {
      "arm.tap": "dotknij przedmiotu, by go posortować",
      "arm.pick": "chwytam: {name}…",
      "arm.hand": "✋ wykryto dłoń — ramię wstrzymane",
      "arm.clear": "wolne — wznawiam",
      "bin.plastic": "plastik", "bin.paper": "papier", "bin.glass": "szkło",
      "energy.surplus": "Nadwyżka: bateria się ładuje, a elektrolizer magazynuje resztę jako H₂.",
      "energy.balanced": "Równowaga: PV pokrywa zapotrzebowanie, bateria wyrównuje luki.",
      "energy.deficit": "Niedobór: ogniwo paliwowe zamienia zmagazynowany H₂ z powrotem w prąd.",
      "na.local": "Każdy piksel patrzy tylko na swoje sąsiedztwo 5×5: tutaj {k} z {n} pikseli. Dla obrazu 256×256 z oknem 7×7 to ok. 1300× mniej par uwagi niż przy uwadze globalnej.",
      "na.global": "Globalna self-attention: każdy piksel patrzy na wszystkie {n} pikseli. Koszt rośnie kwadratowo z rozmiarem obrazu.",
      "res.labels": ["Wejście", "300 tys.", "500 tys.", "1,2 mln", "Oryginał"],
      "res.cap": {
        "barn": "Jedna szara stodoła, dwie wiarygodne odpowiedzi: przy 300 tys. obrazów treningowych model maluje ją na niebiesko, przy 1,2 mln na czerwono — tak jak w oryginale.",
        "ambulance": "Model konsekwentnie wybiera czerwień dla karoserii, blisko oryginału, a tło pozostaje bardziej stonowane.",
        "fireboat": "Z większą ilością danych pojawia się czerwony kadłub (1,2 mln), choć słabszy niż w oryginale.",
        "shark": "Przy 300 tys. woda jest brązowa; z 1,2 mln obrazów model uczy się, że morze wokół rekina jest niebieskie.",
      },
      "gallery": [
        "Ramię robota, kamera głębi i stół do sortowania",
        "Wykrywanie dłoni obok etykiet obiektów z YOLO i CLIP",
        "Wykrywanie kubka na żywo z kamery RealSense D435",
        "Pojemniki na plastik i papier obok oznaczonych stref wyłączonych",
        "Zwycięski zespół",
      ],
    },
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  nodes.forEach((n) => (n.dataset.en = n.innerHTML));

  let lang = "en";
  try { lang = localStorage.getItem("lang") || ""; } catch (_) {}
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || "").toLowerCase().slice(0, 2);
    lang = LANGS.includes(nav) ? nav : "en";
  }

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    const dict = DICTS[l] || {};
    nodes.forEach((n) => {
      const t = dict[n.dataset.i18n];
      n.innerHTML = t != null ? t : n.dataset.en;
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
  if (btn) btn.addEventListener("click", (e) => {
    const picked = e.target.closest("[data-l]");
    apply(picked ? picked.dataset.l : LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]);
  });
  apply(lang);
})();
