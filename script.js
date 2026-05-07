const year = document.getElementById("currentYear");
const themeToggle = document.getElementById("themeToggle");
const topButton = document.getElementById("topBtn");
const brandLink = document.querySelector(".brand");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const translations = {
  en: {
    html_lang: "en",
    document_title: "Manel Gil Sorribes | AI Senior Project Manager",
    meta_description:
      "Portfolio of Manel Gil Sorribes, AI Senior Project Manager and machine learning lecturer working on computational drug discovery, biomolecular interaction prediction, genomics, and scientific software.",
    og_title: "Manel Gil Sorribes | AI Senior Project Manager for Computational Drug Discovery",
    og_description:
      "AI Senior Project Manager and ML lecturer building deep learning systems for protein-ligand interaction prediction, genomics, and data-intensive science.",
    nav_aria: "Main navigation",
    brand_aria: "Manel Gil Sorribes home",
    language_aria: "Select language",
    language_en_aria: "View site in English",
    language_ca_aria: "View site in Catalan",
    theme: "Theme",
    theme_dark_aria: "Switch to dark theme",
    theme_light_aria: "Switch to light theme",
    nav_about: "About",
    nav_experience: "Experience",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_work: "Work",
    nav_contact: "Contact",
    hero_eyebrow: "AI Senior Project Manager - ML Lecturer - Physicist",
    hero_title: "Leading AI for biomolecular discovery.",
    hero_lede:
      "I lead and build machine learning systems for computational drug discovery, protein-ligand interaction prediction, genomic sequence classification, and data-intensive scientific workflows.",
    primary_actions: "Primary actions",
    download_cv: "Download CV",
    contact_me: "Contact me",
    snapshot_aria: "Professional snapshot",
    stat_role_label: "Current role",
    stat_role_value: "AI Senior Project Manager at Nostrum Biodiscovery",
    stat_teaching_label: "Teaching",
    stat_teaching_value: "MSc Machine Learning Lecturer at UPC",
    stat_base_label: "Base",
    stat_base_value: "Barcelona, Spain",
    portrait_alt: "Portrait of Manel Gil Sorribes",
    signal: "Working where AI leadership, molecular data, biology, and deployable research software meet.",
    about_eyebrow: "About",
    about_title: "A research engineer with a physicist's instinct for models.",
    about_p1:
      "I am an AI Senior Project Manager with expertise in transformers, model fine-tuning, and generative AI. At Nostrum Biodiscovery, I manage, develop, and optimize deep learning models for computational drug discovery, coordinating AI engineers, scientists, stakeholders, and client-facing technical communication.",
    about_p2:
      "My background combines physics, intelligent interactive systems, genomics research, production data engineering, and teaching machine learning labs in UPC's Master in Data Science. That mix helps me move from scientific question to data pipeline, model architecture, evaluation, communication, and practical delivery.",
    experience_eyebrow: "Experience",
    experience_title: "Leading applied AI across research, delivery, and teaching.",
    date_dec2025_present: "Dec 2025 - Present",
    exp_senior_title: "AI Senior Project Manager",
    exp_senior_li1: "Leading AI and applied science projects in computational drug discovery.",
    exp_senior_li2:
      "Managing cross-functional teams of AI engineers, scientists, and stakeholders to deliver production-ready solutions.",
    exp_senior_li3:
      "Acting as the point of contact with clients, overseeing technical communication, progress reporting, and requirement alignment.",
    date_jan2024_dec2025: "Jan 2024 - Dec 2025",
    exp_ai_title: "Artificial Intelligence Engineer",
    exp_ai_li1: "Developing and optimizing deep learning models for protein-ligand interaction prediction.",
    exp_ai_li2: "Researching transformer and generative AI techniques to improve model performance.",
    date_feb2026_present: "Feb 2026 - Present",
    upc_name: "Universitat Politècnica de Catalunya",
    exp_upc_title: "MSc Machine Learning Lecturer - Part-time",
    exp_upc_li1: "Teaching laboratory sessions for the Machine Learning course in the Master in Data Science.",
    exp_upc_li2: "Covering core machine learning techniques and hands-on practical implementations.",
    date_apr2023_jul2023: "Apr 2023 - Jul 2023",
    exp_genomics_title: "AI & ML Intern - Genomics Research",
    exp_genomics_li1: "Applied deep learning and machine learning techniques to genomic sequence classification.",
    exp_genomics_li2:
      "Worked with large-scale biological datasets across preprocessing, feature extraction, and model optimization.",
    exp_genomics_li3: "Developed and evaluated deep learning architectures for structured and unstructured sequence data.",
    date_mar2022_dec2023: "Mar 2022 - Dec 2023",
    exp_cap_title: "Business Intelligence Consultant - Data Engineer",
    exp_cap_li1: "Worked on data integration, transformation, and automation using PL/SQL, Informatica PowerCenter, and SAP.",
    date_jun2020_mar2022: "Jun 2020 - Mar 2022",
    exp_ntt_title: "BI Consultant - Data Engineer",
    exp_ntt_li1: "Integrated data from Oracle Data Warehouse to Salesforce using SQL and ETLs.",
    exp_ntt_li2: "Enabled structured data processing and transformation for predictive modeling tasks.",
    research_eyebrow: "Research Focus",
    research_title: "AI systems for molecular and biological sequence data.",
    focus1_title: "Computational drug discovery leadership",
    focus1_text:
      "Applied AI project leadership across scientific requirements, model development, stakeholder alignment, and production delivery.",
    focus2_title: "Protein-ligand interaction prediction",
    focus2_text: "Deep learning workflows for modeling biomolecular interactions and supporting computational drug discovery.",
    focus3_title: "Transformers and generative AI",
    focus3_text: "Transformer-based modeling, LLM tooling, fine-tuning, and generative methods for scientific data problems.",
    focus4_title: "Genomic sequence classification",
    focus4_text: "Machine learning pipelines for biological sequence data, from preprocessing and feature extraction to model evaluation.",
    focus5_title: "Machine learning education",
    focus5_text: "Laboratory teaching for core ML techniques and practical implementations in a master's-level data science program.",
    pubs_eyebrow: "Publications",
    pubs_title: "Selected papers and conference work.",
    pub1_tag: "ICLR GEM and LMRL Workshops - 2025",
    pub1_text: "Workshop paper presented at ICLR 2025 in Singapore.",
    pub2_tag: "Journal of Cheminformatics - 2026",
    pub2_text:
      "Open-access journal article on simple, interpretable molecular fingerprint baselines for DDI and DDA prediction.",
    journal_article: "Journal article",
    pub3_tag: "ICLR LMRL and AI4NA Workshops - 2025",
    pub3_text: "Workshop paper presented at ICLR 2025 in Singapore.",
    pub4_tag: "Journal of Data-centric Machine Learning Research - 2025",
    pub4_text: "DMLR article introducing an open-source benchmarking framework for topological deep learning.",
    pub5_tag: "ICML GRaM Workshop - 2024",
    pub5_text: "Workshop paper from ICML 2024 in Vienna.",
    pub6_tag: "HCist Conference - 2023",
    pub6_text: "Published and presented at the HCist Conference.",
    work_eyebrow: "Selected Work",
    work_title: "Professional work shaped around scientific usefulness.",
    work1_tag: "Computational drug discovery",
    work1_title: "AI project leadership",
    work1_text: "Leading applied science projects, coordinating teams, aligning requirements, and communicating technical progress with clients.",
    work2_tag: "Biomolecular interaction prediction",
    work2_title: "Protein-ligand modeling",
    work2_text: "Deep learning model development and optimization for predicting biomolecular interactions at Nostrum Biodiscovery.",
    work3_tag: "Higher education",
    work3_title: "Machine learning labs",
    work3_text: "Part-time teaching for UPC's Master in Data Science, focused on core ML techniques and practical implementations.",
    work4_tag: "Bioinformatics",
    work4_title: "Genomic sequence classification",
    work4_text: "Research internship work applying ML/DL methods to biological sequence datasets.",
    skills_eyebrow: "Technical Stack",
    skills_title: "Tools I use to bridge models, data, and delivery.",
    skill1_title: "Machine Learning",
    skill1_text: "PyTorch, TensorFlow, transformer models, generative AI, model fine-tuning",
    skill2_title: "NLP & LLMs",
    skill2_text: "BERT, GPT-3/4, Hugging Face Transformers, sequence modeling",
    skill3_title: "Data Engineering",
    skill3_text: "SQL, data preprocessing, ETL pipelines, PL/SQL, Informatica PowerCenter, SAP",
    skill4_title: "Cloud & Software",
    skill4_text: "GCP, AWS, Salesforce Sales Cloud, Informatica Cloud, Microsoft Office, LaTeX",
    skill5_title: "Languages",
    skill5_text: "Spanish and Catalan native, fluent English with B2 certificate, beginner Italian",
    education_eyebrow: "Education",
    education_title: "Academic foundation",
    edu_master_title: "Master in Intelligent Interactive Systems",
    edu_master_meta: "Universitat Pompeu Fabra - 2023 - Barcelona, Spain",
    edu_master_courses: "Machine Learning - Natural Language Processing - Deep Learning",
    edu_bachelor_title: "Bachelor in Physics",
    edu_bachelor_meta: "Universitat de Barcelona - 2020 - Barcelona, Spain",
    edu_bachelor_note: "Mention in theoretical physics",
    certs_eyebrow: "Certificates & Learning",
    certs_title: "Continued training",
    cert1: "Google Cloud - Cloud Digital Leader",
    cert2: "IICS - Cloud Data Integration Partner Bootcamp, Champion Certificate",
    cert3: "Computer Vision Basics, University at Buffalo, Coursera",
    cert4: "Bachelor thesis: Study of the Blume-Emery-Griffiths Phase Separation Model",
    contact_eyebrow: "Contact",
    contact_title: "Open to research conversations, AI/ML roles, and scientific collaborations.",
    contact_text: "The fastest way to reach me is email. You can also find my code and professional updates on GitHub and LinkedIn.",
    footer: "Manel Gil Sorribes. AI/ML for data-intensive science.",
    top: "Top",
    top_aria: "Back to top",
  },
  ca: {
    html_lang: "ca",
    document_title: "Manel Gil Sorribes | AI Senior Project Manager",
    meta_description:
      "Portafolis de Manel Gil Sorribes, AI Senior Project Manager i professor de machine learning especialitzat en descobriment computacional de fàrmacs, predicció d'interaccions biomoleculars, genòmica i software científic.",
    og_title: "Manel Gil Sorribes | AI Senior Project Manager en descobriment computacional de fàrmacs",
    og_description:
      "AI Senior Project Manager i professor de machine learning que desenvolupa sistemes de deep learning per a predicció d'interaccions proteïna-lligand, genòmica i ciència basada en dades.",
    nav_aria: "Navegació principal",
    brand_aria: "Inici de Manel Gil Sorribes",
    language_aria: "Selecciona l'idioma",
    language_en_aria: "Veure el web en anglès",
    language_ca_aria: "Veure el web en català",
    theme: "Tema",
    theme_dark_aria: "Canvia al tema fosc",
    theme_light_aria: "Canvia al tema clar",
    nav_about: "Perfil",
    nav_experience: "Experiència",
    nav_research: "Recerca",
    nav_publications: "Publicacions",
    nav_work: "Treball",
    nav_contact: "Contacte",
    hero_eyebrow: "AI Senior Project Manager - Professor de Machine Learning - Físic",
    hero_title: "IA aplicada al descobriment biomolecular.",
    hero_lede:
      "Lidero i desenvolupo sistemes de machine learning per al descobriment computacional de fàrmacs, la predicció d'interaccions proteïna-lligand, la classificació de seqüències genòmiques i pipelines científics basats en dades.",
    primary_actions: "Accions principals",
    download_cv: "Descarregar CV",
    contact_me: "Contacta'm",
    snapshot_aria: "Resum professional",
    stat_role_label: "Rol actual",
    stat_role_value: "AI Senior Project Manager a Nostrum Biodiscovery",
    stat_teaching_label: "Docència",
    stat_teaching_value: "Professor de Machine Learning al màster de la UPC",
    stat_base_label: "Ubicació",
    stat_base_value: "Barcelona, Espanya",
    portrait_alt: "Retrat de Manel Gil Sorribes",
    signal: "Treballo en la intersecció entre lideratge en IA, dades moleculars, biologia computacional i software científic.",
    about_eyebrow: "Sobre mi",
    about_title: "Un perfil de recerca i enginyeria amb mirada de físic.",
    about_p1:
      "Soc AI Senior Project Manager amb experiència en transformers, fine-tuning de models i IA generativa. A Nostrum Biodiscovery gestiono, desenvolupo i optimitzo models de deep learning per al descobriment computacional de fàrmacs, coordinant equips d'IA, científics i comunicació tècnica amb clients.",
    about_p2:
      "La meva trajectòria combina física, sistemes interactius intel·ligents, recerca en genòmica, enginyeria de dades en entorns de producció i docència en laboratoris de machine learning al Master in Data Science de la UPC. Aquesta combinació em permet connectar la pregunta científica amb els pipelines de dades, l'arquitectura del model, l'avaluació, la comunicació i la posada en pràctica.",
    experience_eyebrow: "Experiència",
    experience_title: "IA aplicada, recerca i docència amb impacte real.",
    date_dec2025_present: "Des. 2025 - Actualitat",
    exp_senior_title: "AI Senior Project Manager",
    exp_senior_li1: "Lidero projectes d'IA i ciència aplicada en descobriment computacional de fàrmacs.",
    exp_senior_li2:
      "Coordino equips transversals d'enginyers d'IA, científics, clients i col·laboradors per construir solucions llestes per a producció.",
    exp_senior_li3:
      "Actuo com a punt de contacte amb clients, supervisant la comunicació tècnica, el seguiment del progrés i l'alineament de requisits.",
    date_jan2024_dec2025: "Gen. 2024 - Des. 2025",
    exp_ai_title: "Artificial Intelligence Engineer",
    exp_ai_li1: "Desenvolupament i optimització de models de deep learning per a la predicció d'interaccions proteïna-lligand.",
    exp_ai_li2: "Recerca i implementació de tècniques amb transformers i IA generativa per millorar el rendiment dels models.",
    date_feb2026_present: "Febr. 2026 - Actualitat",
    upc_name: "Universitat Politècnica de Catalunya",
    exp_upc_title: "Professor de Machine Learning al màster - temps parcial",
    exp_upc_li1: "Docència de sessions de laboratori de l'assignatura de Machine Learning al Master in Data Science.",
    exp_upc_li2: "Tècniques fonamentals de machine learning i implementacions pràctiques guiades.",
    date_apr2023_jul2023: "Abr. 2023 - Jul. 2023",
    exp_genomics_title: "AI & ML Intern - Recerca en genòmica",
    exp_genomics_li1: "Aplicació de tècniques de deep learning i machine learning a la classificació de seqüències genòmiques.",
    exp_genomics_li2:
      "Treball amb grans conjunts de dades biològiques, incloent preprocessament, extracció de característiques i optimització de models.",
    exp_genomics_li3: "Desenvolupament i avaluació d'arquitectures de deep learning per a dades de seqüència estructurades i no estructurades.",
    date_mar2022_dec2023: "Març 2022 - Des. 2023",
    exp_cap_title: "Business Intelligence Consultant - Data Engineer",
    exp_cap_li1: "Integració, transformació i automatització de dades amb PL/SQL, Informatica PowerCenter i SAP.",
    date_jun2020_mar2022: "Juny 2020 - Març 2022",
    exp_ntt_title: "BI Consultant - Data Engineer",
    exp_ntt_li1: "Integració de dades d'Oracle Data Warehouse a Salesforce mitjançant SQL i ETLs.",
    exp_ntt_li2: "Suport a tasques de modelització predictiva mitjançant processament i transformació estructurada de dades.",
    research_eyebrow: "Recerca",
    research_title: "Sistemes d'IA per a dades moleculars i seqüències biològiques.",
    focus1_title: "Lideratge en drug discovery computacional",
    focus1_text:
      "Direcció de projectes d'IA aplicada que connecten requisits científics, desenvolupament de models, coordinació amb equips i clients, i posada en producció.",
    focus2_title: "Predicció d'interaccions proteïna-lligand",
    focus2_text: "Pipelines de deep learning per modelitzar interaccions biomoleculars i donar suport al descobriment computacional de fàrmacs.",
    focus3_title: "Transformers i IA generativa",
    focus3_text: "Modelització amb transformers, eines basades en LLMs, fine-tuning i mètodes generatius aplicats a problemes científics amb dades.",
    focus4_title: "Classificació de seqüències genòmiques",
    focus4_text: "Pipelines de machine learning per a seqüències biològiques, des del preprocessament i l'extracció de característiques fins a l'avaluació de models.",
    focus5_title: "Docència en machine learning",
    focus5_text: "Sessions de laboratori sobre tècniques fonamentals de ML i implementacions pràctiques en un programa de màster en ciència de dades.",
    pubs_eyebrow: "Publicacions",
    pubs_title: "Articles i treballs de congrés seleccionats.",
    pub1_tag: "Workshops GEM i LMRL d'ICLR - 2025",
    pub1_text: "Treball presentat als workshops d'ICLR 2025 a Singapur.",
    pub2_tag: "Journal of Cheminformatics - 2026",
    pub2_text:
      "Article d'accés obert sobre baselines simples i interpretables amb fingerprints moleculars per a la predicció DDI i DDA.",
    journal_article: "Article de revista",
    pub3_tag: "Workshops LMRL i AI4NA d'ICLR - 2025",
    pub3_text: "Treball presentat als workshops d'ICLR 2025 a Singapur.",
    pub4_tag: "Journal of Data-centric Machine Learning Research - 2025",
    pub4_text: "Article de DMLR que presenta un framework open source per al benchmarking de topological deep learning.",
    pub5_tag: "Workshop GRaM d'ICML - 2024",
    pub5_text: "Treball presentat al workshop GRaM d'ICML 2024 a Viena.",
    pub6_tag: "HCist Conference - 2023",
    pub6_text: "Publicat i presentat a la conferència HCist.",
    work_eyebrow: "Treball destacat",
    work_title: "Projectes professionals amb criteri científic.",
    work1_tag: "Descobriment computacional de fàrmacs",
    work1_title: "Lideratge de projectes d'IA",
    work1_text: "Direcció de projectes de ciència aplicada, coordinació d'equips, alineament de requisits i comunicació tècnica amb clients.",
    work2_tag: "Predicció d'interaccions biomoleculars",
    work2_title: "Modelització proteïna-lligand",
    work2_text: "Desenvolupament i optimització de models de deep learning per predir interaccions biomoleculars a Nostrum Biodiscovery.",
    work3_tag: "Educació superior",
    work3_title: "Laboratoris de machine learning",
    work3_text: "Docència a temps parcial al Master in Data Science de la UPC, centrada en tècniques fonamentals de ML i implementacions pràctiques.",
    work4_tag: "Bioinformàtica",
    work4_title: "Classificació de seqüències genòmiques",
    work4_text: "Pràctiques de recerca aplicant mètodes de ML/DL a dades de seqüència biològica.",
    skills_eyebrow: "Stack tècnic",
    skills_title: "Eines per connectar models, dades i aplicació pràctica.",
    skill1_title: "Machine Learning",
    skill1_text: "PyTorch, TensorFlow, models transformer, IA generativa, fine-tuning de models",
    skill2_title: "NLP i LLMs",
    skill2_text: "BERT, GPT-3/4, Hugging Face Transformers, modelització de seqüències",
    skill3_title: "Enginyeria de dades",
    skill3_text: "SQL, preprocessament de dades, pipelines ETL, PL/SQL, Informatica PowerCenter, SAP",
    skill4_title: "Cloud i software",
    skill4_text: "GCP, AWS, Salesforce Sales Cloud, Informatica Cloud, Microsoft Office, LaTeX",
    skill5_title: "Idiomes",
    skill5_text: "Castellà i català nadius, anglès fluid amb certificat B2, italià bàsic",
    education_eyebrow: "Educació",
    education_title: "Base acadèmica",
    edu_master_title: "Màster en Sistemes Interactius Intel·ligents",
    edu_master_meta: "Universitat Pompeu Fabra - 2023 - Barcelona, Espanya",
    edu_master_courses: "Machine Learning - Natural Language Processing - Deep Learning",
    edu_bachelor_title: "Grau en Física",
    edu_bachelor_meta: "Universitat de Barcelona - 2020 - Barcelona, Espanya",
    edu_bachelor_note: "Menció en física teòrica",
    certs_eyebrow: "Certificats i formació",
    certs_title: "Formació contínua",
    cert1: "Google Cloud - Cloud Digital Leader",
    cert2: "IICS - Cloud Data Integration Partner Bootcamp, Champion Certificate",
    cert3: "Computer Vision Basics, University at Buffalo, Coursera",
    cert4: "Treball final de grau: estudi del model de separació de fases de Blume-Emery-Griffiths",
    contact_eyebrow: "Contacte",
    contact_title: "Obert a converses de recerca, rols d'IA/ML i col·laboracions científiques.",
    contact_text: "La manera més ràpida de contactar amb mi és per correu electrònic. També pots trobar el meu codi i les meves novetats professionals a GitHub i LinkedIn.",
    footer: "Manel Gil Sorribes. IA/ML per a ciència intensiva en dades.",
    top: "Inici",
    top_aria: "Torna a l'inici",
  },
};

let currentLanguage = localStorage.getItem("language") || "en";
if (!translations[currentLanguage]) currentLanguage = "en";

if (year) {
  year.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (storedTheme === "light" || (!storedTheme && prefersLight)) {
  document.body.classList.add("light-theme");
}

function updateThemeLabel() {
  const isLight = document.body.classList.contains("light-theme");
  const labels = translations[currentLanguage];
  themeToggle?.setAttribute("aria-label", isLight ? labels.theme_dark_aria : labels.theme_light_aria);
}

function applyTranslations(language) {
  const labels = translations[language];
  currentLanguage = language;

  document.documentElement.lang = labels.html_lang;
  document.title = labels.document_title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", labels.meta_description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", labels.og_title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", labels.og_description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (labels[key]) element.textContent = labels[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && labels[key]) element.setAttribute(attribute, labels[key]);
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute(
      "aria-label",
      button.dataset.langSwitch === "en" ? labels.language_en_aria : labels.language_ca_aria
    );
  });

  localStorage.setItem("language", language);
  updateThemeLabel();
}

applyTranslations(currentLanguage);

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  updateThemeLabel();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.langSwitch);
  });
});

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

brandLink?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => navObserver.observe(section));

function updateTopButton() {
  topButton?.classList.toggle("visible", window.scrollY > 700);
}

window.addEventListener("scroll", updateTopButton, { passive: true });
updateTopButton();
