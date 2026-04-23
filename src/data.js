// Source-of-truth content, extracted from the Hugo site.
// Keeping this as plain JS so the React components can import without build steps.

window.SITE = {
  name: "Ali Emami",
  role: "Assistant Professor of Computer Science",
  org: "Emory University",
  officeLine: "Goodrich C. White Hall 215 · 301 Dowman Dr · Atlanta, GA 30322",
  email: "aemami[at]emory.edu",
  emailPretty: "aemami @ emory.edu",
  scholar: "https://scholar.google.ca/citations?hl=en&user=Pjdq8cUAAAAJ&view_op=list_works&sortby=pubdate",
  twitter: "https://x.com/_aliemami",
  linkedin: "https://www.linkedin.com/in/ali-emami-226b30280/",
  thesis: "https://escholarship.mcgill.ca/concern/theses/pz50h2225",
};

window.INTERESTS = [
  "Natural Language Processing",
  "Evaluation of Large Language Models",
  "AI Safety, Fairness & Culture",
  "Reasoning & Interpretability",
  "Computational Social Science",
];

window.EDUCATION = [
  { year: "2025", degree: "Assistant Professor, Computer Science", inst: "Emory University", kind: "appt" },
  { year: "2021–2025", degree: "Assistant Professor, Computer Science", inst: "Brock University", kind: "appt" },
  { year: "2021", degree: "PhD, Computer Science", inst: "McGill University / Mila", kind: "edu" },
  { year: "2016", degree: "MSc, Computer Science", inst: "McGill University", kind: "edu" },
  { year: "2014", degree: "BSc, Joint Physics & Computer Science", inst: "McGill University", kind: "edu" },
];

// Highlighted / featured publications — hand-picked for the home page.
// A few selected to tell the research narrative arc.
window.FEATURED = [
  {
    id: "common-to-whom",
    year: 2026,
    title: "Common to Whom? Regional Cultural Commonsense and LLM Bias in India",
    venue: "ACL 2026",
    authors: ["Sangmitra Madhusudan", "Trush Shank More", "Steph Buongiorno", "Renata Dividino", "Jad Kabbara", "Ali Emami"],
    blurb: "\"Common sense\" isn't. A benchmark across India's regions shows LLMs encode a narrow slice of cultural knowledge and fail systematically outside it.",
    tag: "Culture · Bias",
    links: {
      arxiv: "https://arxiv.org/abs/2601.15550",
      data: "https://huggingface.co/datasets/Sangmitra-06/INDICA",
    },
  },
  {
    id: "dart",
    year: 2026,
    title: "DART: Mitigating Harm Drift in Difference-Aware LLMs via Distill-Audit-Repair Training",
    venue: "ACL 2026 Findings",
    authors: ["Ziwen Pan", "Zihan Liang", "Jad Kabbara", "Ali Emami"],
    blurb: "Teaching a model to treat groups differently when it should can quietly teach it to harm them. DART distills, audits, and repairs the drift.",
    tag: "Safety · Fairness",
    links: { arxiv: "https://arxiv.org/abs/2604.16845" },
  },
  {
    id: "memory-dial",
    year: 2026,
    title: "Memory Dial: A Training Framework for Controllable Memorization in Language Models",
    venue: "ACL 2026 Findings",
    authors: ["Xiangbo Zhang", "Ali Emami"],
    blurb: "Memorization isn't a bug or a feature, it's a dial. A training framework for turning it up or down where it matters.",
    tag: "Methods · Interpretability",
    links: {
      arxiv: "https://arxiv.org/abs/2604.05074",
      code: "https://github.com/xiangbo05/MemoryDial_Public",
    },
  },
  {
    id: "dog-cat",
    year: 2026,
    title: "The Dog the Cat Chased Stumped the Model: Measuring When Language Models Abandon Structure for Shortcuts",
    venue: "EACL 2026",
    authors: ["Sangmitra Madhusudan", "Kaige Chen", "Ali Emami"],
    blurb: "Center-embedded sentences as a stress test. We measure exactly where models give up on syntax and fall back on surface heuristics.",
    tag: "Reasoning · Evaluation",
    links: {
      arxiv: "https://arxiv.org/abs/2510.20543",
    },
  },
  {
    id: "taarof",
    year: 2025,
    title: "We Politely Insist: Your LLM Must Learn the Persian Art of Taarof",
    venue: "EMNLP 2025",
    authors: ["Nikta Gohari Sadr", "Sahar Heidariasl", "Karine Megerdoomian", "Laleh Seyyed-Kalantari", "Ali Emami"],
    blurb: "A benchmark for Persian ritual politeness: a system of deference, modesty, and indirectness that frontier LLMs miss by 40–48 points vs. native speakers.",
    tag: "Culture · Evaluation",
    press: ["IBM Think", "Ars Technica", "PC Gamer"],
    links: {
      arxiv: "https://arxiv.org/abs/2509.01035",
      code: "https://github.com/niktaas/TAAROFBENCH",
      data: "https://huggingface.co/datasets/Nikta/TAAROFBENCH",
    },
  },
  {
    id: "geo20q",
    year: 2025,
    title: "The World According to LLMs: How Geographic Origin Influences Entity Deduction",
    venue: "COLM 2025",
    authors: ["Harsh Nishant Lalai", "Raj Sanjay Shah", "Jiaxin Pei", "Sashank Varma", "Yi-Chia Wang", "Ali Emami"],
    blurb: "We let LLMs ask the questions. Playing 20 Questions across 7 languages reveals substantial Global North / South disparities in what models can actually deduce.",
    tag: "Bias · Reasoning",
    links: {
      arxiv: "https://arxiv.org/abs/2508.05525",
      site: "https://sites.google.com/view/llmbias20q/home",
      data: "https://github.com/Harsh-Lalai/Geo20QPlus",
    },
  },
  {
    id: "connections",
    year: 2024,
    title: "NYT-Connections: A Deceptively Simple Classification Task that Stumps System-1 Thinkers",
    venue: "COLING 2025",
    authors: ["Angel Yahir Loredo Lopez", "Tyler McDonald", "Ali Emami"],
    blurb: "358 word puzzles designed to punish fast, intuitive guessing. GPT-4 trails humans by ~30 points; Chain-of-Thought returns diminish as difficulty rises.",
    tag: "Reasoning · Benchmarks",
    award: "Best Dataset Paper Award",
    links: {
      acl: "https://aclanthology.org/2025.coling-main.134/",
      arxiv: "https://arxiv.org/abs/2412.01621",
      data: "https://huggingface.co/datasets/tm21cy/NYT-Connections",
    },
  },
  {
    id: "stop",
    year: 2024,
    title: "STOP! Benchmarking LLMs with Sensitivity Testing on Offensive Progressions",
    venue: "EMNLP 2024",
    authors: ["Robert Morabito", "Sangmitra Madhusudan", "Tyler McDonald", "Ali Emami"],
    blurb: "Bias evaluation that considers context. 2,700 sentences escalating in severity across 9 demographics; aligning to human judgments improves downstream answer rates up to 191%.",
    tag: "Safety · Evaluation",
    award: "Social Impact Paper Award",
    links: {
      arxiv: "https://arxiv.org/abs/2409.13843",
      code: "https://github.com/Robert-Morabito/STOP",
      data: "https://huggingface.co/datasets/Robert-Morabito/STOP",
    },
  },
];

// Full publications list, compiled from CV_AliEmami-04-17.pdf (April 2026).
window.PUBLICATIONS = [
  // ACL 2026 — 6 papers
  { id: "sage", year: 2026, title: "SAGE: A Search-AuGmented Evaluation of Large Language Models on Free-Form QA", authors: ["Sher Badshah", "Ali Emami", "Hassan Sajjad"], venue: "ACL 2026", tag: "Evaluation" },
  { id: "common-to-whom", year: 2026, title: "Common to Whom? Regional Cultural Commonsense and LLM Bias in India", authors: ["Sangmitra Madhusudan", "Trush Shank More", "Steph Buongiorno", "Renata Dividino", "Jad Kabbara", "Ali Emami"], venue: "ACL 2026", tag: "Culture", links: { arxiv: "https://arxiv.org/abs/2601.15550", data: "https://huggingface.co/datasets/Sangmitra-06/INDICA" } },
  { id: "reasoning-traces", year: 2026, title: "Reasoning Traces Shape Outputs but Models Won't Say So", authors: ["Yijie Hao", "Lingjie Chen", "Ali Emami", "Joyce Ho"], venue: "ACL 2026", tag: "Interpretability", links: { arxiv: "https://arxiv.org/abs/2603.20620" } },
  { id: "dart", year: 2026, title: "DART: Mitigating Harm Drift in Difference-Aware LLMs via Distill-Audit-Repair Training", authors: ["Ziwen Pan", "Zihan Liang", "Jad Kabbara", "Ali Emami"], venue: "ACL 2026 Findings", tag: "Safety", links: { arxiv: "https://arxiv.org/abs/2604.16845" } },
  { id: "memory-dial", year: 2026, title: "Memory Dial: A Training Framework for Controllable Memorization in Language Models", authors: ["Xiangbo Zhang", "Ali Emami"], venue: "ACL 2026 Findings", tag: "Methods", links: { arxiv: "https://arxiv.org/abs/2604.05074", code: "https://github.com/xiangbo05/MemoryDial_Public" } },
  { id: "cgm", year: 2026, title: "If Only My CGM Could Speak: A Privacy-Preserving Agent for Question Answering over Continuous Glucose Data", authors: ["Yanjun Cui", "Ali Emami", "Temiloluwa Prioleau", "Nikhil Singh"], venue: "ACL 2026 Findings", tag: "Applied", links: { arxiv: "https://arxiv.org/abs/2604.17133" } },
  // EACL 2026
  { id: "dog-cat", year: 2026, title: "The Dog the Cat Chased Stumped the Model: Measuring When Language Models Abandon Structure for Shortcuts", authors: ["Sangmitra Madhusudan", "Kaige Chen", "Ali Emami"], venue: "EACL 2026", tag: "Reasoning", links: { arxiv: "https://arxiv.org/abs/2510.20543" } },
  // Preprints
  { id: "scope", year: 2026, title: "SCOPE: Selective Conformal Optimized Pairwise LLM Judging", authors: ["Sher Badshah", "Ali Emami", "Hassan Sajjad"], venue: "Preprint", tag: "Evaluation", links: { arxiv: "https://arxiv.org/abs/2602.13110" } },
  // 2025
  { id: "taarof", year: 2025, title: "We Politely Insist: Your LLM Must Learn the Persian Art of Taarof", authors: ["Nikta Gohari Sadr", "Sahar Heidariasl", "Karine Megerdoomian", "Laleh Seyyed-Kalantari", "Ali Emami"], venue: "EMNLP 2025", tag: "Culture", links: { arxiv: "https://arxiv.org/abs/2509.01035", code: "https://github.com/niktaas/TAAROFBENCH", data: "https://huggingface.co/datasets/Nikta/TAAROFBENCH" } },
  { id: "personality", year: 2025, title: "Personality Matters: User Traits Predict LLM Preferences in Multi-Turn Collaborative Tasks", authors: ["Sarfaroz Yunusov", "Kaige Chen", "Kazi Nishat Anwar", "Ali Emami"], venue: "EMNLP 2025", tag: "HCI", links: { arxiv: "https://arxiv.org/abs/2508.21628" } },
  { id: "beyond-content", year: 2025, title: "Beyond Content: How Grammatical Gender Shapes Visual Representation in Text-to-Image Models", authors: ["Muhammed Saeed", "Shaina Raza", "Ashmal Vayani", "Muhammad Abdul-Mageed", "Ali Emami", "Shady Shehata"], venue: "EMNLP 2025 Findings", tag: "Vision", links: { arxiv: "https://arxiv.org/abs/2508.03199" } },
  { id: "geo20q", year: 2025, title: "The World According to LLMs: How Geographic Origin Influences LLMs' Entity Deduction Capabilities", authors: ["Harsh Nishant Lalai", "Raj Sanjay Shah", "Jiaxin Pei", "Sashank Varma", "Yi-Chia Wang", "Ali Emami"], venue: "COLM 2025", tag: "Bias", links: { arxiv: "https://arxiv.org/abs/2508.05525", site: "https://sites.google.com/view/llmbias20q/home" } },
  { id: "translate-care", year: 2025, title: "Translate With Care: Addressing Gender Bias, Neutrality, and Reasoning in Large Language Model Translations", authors: ["Pardis Sadat Zahraei", "Ali Emami"], venue: "ACL 2025 Findings", tag: "Safety", links: { acl: "https://aclanthology.org/2025.findings-acl.26/", arxiv: "https://arxiv.org/abs/2506.00748" } },
  { id: "time-capsules", year: 2025, title: "Fine-Tuned LLMs are \u201CTime Capsules\u201D for Tracking Societal Bias Through Books", authors: ["Sangmitra Madhusudan", "Robert Morabito", "Skye Reid", "Nikta Gohari Sadr", "Ali Emami"], venue: "NAACL 2025", tag: "Bias", links: { acl: "https://aclanthology.org/2025.naacl-long.118/", arxiv: "https://arxiv.org/abs/2502.05331" } },
  // 2024
  { id: "epi", year: 2024, title: "Can We Afford The Perfect Prompt? Balancing Cost and Accuracy with the Economical Prompting Index", authors: ["Tyler McDonald", "Anthony Colosimo", "Yifeng Li", "Ali Emami"], venue: "COLING 2025 (Oral)", tag: "Methods", links: { acl: "https://aclanthology.org/2025.coling-main.471/", arxiv: "https://arxiv.org/abs/2412.01690" } },
  { id: "connections", year: 2024, title: "NYT-Connections: A Deceptively Simple Text Classification Task that Stumps System-1 Thinkers", authors: ["Angel Yahir Loredo Lopez", "Tyler McDonald", "Ali Emami"], venue: "COLING 2025 (Oral)", tag: "Reasoning", award: "Best Dataset Paper", links: { acl: "https://aclanthology.org/2025.coling-main.134/", arxiv: "https://arxiv.org/abs/2412.01621" } },
  { id: "stop", year: 2024, title: "STOP! Benchmarking Large Language Models with Sensitivity Testing on Offensive Progressions", authors: ["Robert Morabito", "Sangmitra Madhusudan", "Tyler McDonald", "Ali Emami"], venue: "EMNLP 2024 (Oral)", tag: "Safety", award: "Societal Impact Award", links: { arxiv: "https://arxiv.org/abs/2409.13843", code: "https://github.com/Robert-Morabito/STOP" } },
  { id: "mirror", year: 2024, title: "MirrorStories: Reflecting Diversity through Personalized Narrative Generation with Large Language Models", authors: ["Sarfaroz Yunusov", "Hamza Sidat", "Ali Emami"], venue: "EMNLP 2024", tag: "Applied", links: { arxiv: "https://arxiv.org/abs/2409.13935", site: "https://mirrorstories.me" } },
  { id: "subtle", year: 2024, title: "Subtle Biases Need Subtler Measures: Dual Metrics for Evaluating Representative and Affinity Bias in Large Language Models", authors: ["Abhishek Kumar", "Sarfaroz Yunusov", "Ali Emami"], venue: "ACL 2024", tag: "Bias", links: { acl: "https://aclanthology.org/2024.acl-long.23/", arxiv: "https://arxiv.org/abs/2405.14555" } },
  { id: "winovis", year: 2024, title: "Picturing Ambiguity: A Visual Twist on the Winograd Schema Challenge", authors: ["Brendan Park", "Madeline Janecek", "Naser Ezzati-Jivan", "Yifeng Li", "Ali Emami"], venue: "ACL 2024 (Oral)", tag: "Reasoning", links: { acl: "https://aclanthology.org/2024.acl-long.22/" } },
  { id: "confidence", year: 2024, title: "Confidence Under the Hood: An Investigation into the Confidence-Probability Alignment in Large Language Models", authors: ["Abhishek Kumar", "Robert Morabito", "Sanzhar Umbet", "Jad Kabbara", "Ali Emami"], venue: "ACL 2024", tag: "Interpretability", links: { acl: "https://aclanthology.org/2024.acl-long.20/", arxiv: "https://arxiv.org/abs/2405.16282" } },
  { id: "evo", year: 2024, title: "EvoGrad: A Dynamic Take on the Winograd Schema Challenge with Human Adversaries", authors: ["Jing Han Sun", "Ali Emami"], venue: "LREC-COLING 2024", tag: "Benchmarks", links: { arxiv: "https://arxiv.org/pdf/2402.13372" } },
  { id: "wsc+", year: 2024, title: "WSC+: Enhancing the Winograd Schema Challenge Using Tree-of-Experts", authors: ["Pardis Sadat Zahraei", "Ali Emami"], venue: "EACL 2024 (Oral)", tag: "Reasoning", links: { acl: "https://aclanthology.org/2024.eacl-long.99.pdf" } },
  { id: "trace", year: 2024, title: "Trace-of-Thought Prompting: Investigating Prompt-Based Knowledge Distillation Through Question Decomposition", authors: ["Tyler McDonald", "Ali Emami"], venue: "ACL SRW 2024", tag: "Methods", links: { acl: "https://aclanthology.org/2024.acl-srw.35/" } },
  // Older
  { id: "debias", year: 2023, title: "Debiasing should be Good and Bad: Measuring the Consistency of Debiasing Techniques in Language Models", authors: ["Robert Morabito", "Jad Kabbara", "Ali Emami"], venue: "ACL 2023 Findings", tag: "Safety", links: { acl: "https://aclanthology.org/2023.findings-acl.280/" } },
  { id: "turing", year: 2023, title: "The Turing Quest: Can Transformers Make Good NPCs?", authors: ["Qi Chen Gao", "Ali Emami"], venue: "ACL SRW 2023", tag: "Applied", links: { acl: "https://aclanthology.org/2023.acl-srw.17/" } },
  { id: "adept", year: 2021, title: "ADEPT: An Adjective-Dependent Plausibility Task", authors: ["Ali Emami", "Ian Porada", "Alexandra Olteanu", "Kaheer Suleman", "Adam Trischler", "Jackie Chi Kit Cheung"], venue: "ACL-IJCNLP 2021 (Oral)", tag: "Reasoning", links: { acl: "https://aclanthology.org/2021.acl-long.553/", code: "https://github.com/aemami1/ADEPT" } },
  { id: "analysis", year: 2020, title: "An Analysis of Dataset Overlap on Winograd-Style Tasks", authors: ["Ali Emami", "Kaheer Suleman", "Adam Trischler", "Jackie Chi Kit Cheung"], venue: "COLING 2020 (Oral)", tag: "Reasoning", links: { acl: "https://aclanthology.org/2020.coling-main.515/", arxiv: "https://arxiv.org/abs/2011.04767" } },
  { id: "knowref", year: 2019, title: "The KnowRef Coreference Corpus: Removing Gender and Number Cues for Difficult Pronominal Anaphora Resolution", authors: ["Ali Emami", "Paul Trichelair", "Adam Trischler", "Kaheer Suleman", "Hannes Schulz", "Jackie Chi Kit Cheung"], venue: "ACL 2019", tag: "Reasoning", links: { acl: "https://aclanthology.org/P19-1386/", arxiv: "https://arxiv.org/abs/1811.01747" } },
  { id: "reasonable", year: 2019, title: "How Reasonable are Common-Sense Reasoning Tasks: A Case-Study on the Winograd Schema Challenge and SWAG", authors: ["Paul Trichelair", "Ali Emami", "Adam Trischler", "Kaheer Suleman", "Jackie Chi Kit Cheung"], venue: "EMNLP-IJCNLP 2019 (Oral)", tag: "Evaluation", links: { acl: "https://aclanthology.org/D19-1335/", arxiv: "https://arxiv.org/abs/1811.01778" } },
  { id: "knowledge", year: 2018, title: "A Knowledge Hunting Framework for Common Sense Reasoning", authors: ["Ali Emami", "Noelia De La Cruz", "Adam Trischler", "Kaheer Suleman", "Jackie Chi Kit Cheung"], venue: "EMNLP 2018", tag: "Reasoning", links: { acl: "https://aclanthology.org/D18-1220/", arxiv: "https://arxiv.org/abs/1810.01375" } },
  { id: "generalized", year: 2018, title: "A Generalized Knowledge Hunting Framework for the Winograd Schema Challenge", authors: ["Ali Emami", "Adam Trischler", "Kaheer Suleman", "Jackie Chi Kit Cheung"], venue: "NAACL SRW 2018", tag: "Reasoning", award: "Best Paper", links: { acl: "https://aclanthology.org/N18-4004/" } },
];

// News (curated subset, the "headline" moments).
window.NEWS = [
  { year: 2026, date: "Apr 2026", text: "Six papers accepted at ACL 2026 (3 Main, 3 Findings). Topics: search-augmented evaluation, regional cultural commonsense in India, reasoning traces, harm drift, controllable memorization, and privacy-preserving QA over glucose data.", highlight: true },
  { year: 2026, date: "Apr 2026", text: "\"Common to Whom? Regional Cultural Commonsense and LLM Bias in India\" (ACL 2026 Main): preprint and INDICA benchmark released.", links: { arxiv: "https://arxiv.org/abs/2601.15550", data: "https://huggingface.co/datasets/Sangmitra-06/INDICA" } },
  { year: 2026, date: "Apr 2026", text: "\"Memory Dial: A Training Framework for Controllable Memorization in Language Models\" (ACL 2026 Findings): preprint and code released.", links: { arxiv: "https://arxiv.org/abs/2604.05074", code: "https://github.com/xiangbo05/MemoryDial_Public" } },
  { year: 2026, date: "Feb 2026", text: "\"The Dog the Cat Chased Stumped the Model\" accepted to EACL 2026 Main Conference.", link: "https://arxiv.org/abs/2510.20543" },
  { year: 2025, date: "Sep 2025", text: "Taarof paper featured in IBM Think, Ars Technica, and PC Gamer.", link: "https://www.ibm.com/think/news/persian-politeness-test-ai-cant-pass", highlight: true },
  { year: 2025, date: "Aug 2025", text: "All three submissions accepted to EMNLP 2025: 2 Main, 1 Findings." },
  { year: 2025, date: "Jul 2025", text: "Geo20Q+ accepted to COLM 2025.", link: "https://arxiv.org/abs/2508.05525" },
  { year: 2025, date: "Jan 2025", text: "COLING 2025 Best Dataset Paper Award for NYT-Connections.", link: "https://coling2025.org/program/best_papers/", highlight: true },
  { year: 2025, date: "Mar 2025", text: "NAACL 2025 \"Time Capsules\" paper featured in NewScientist.", link: "https://www.newscientist.com/article/2468021-ai-trained-on-novels-tracks-how-racist-and-sexist-biases-have-evolved/" },
  { year: 2024, date: "Nov 2024", text: "EMNLP 2024 Social Impact Paper Award (STOP).", highlight: true },
  { year: 2024, date: "Oct 2024", text: "Delivered convocation address, Brock University Class of 2024." },
  { year: 2024, date: "Jun 2024", text: "Faculty of Mathematics and Science Excellence in Teaching Award.", highlight: true },
  { year: 2024, date: "May 2024", text: "3 of 3 submitted papers accepted at ACL 2024, many with undergrad co-authors." },
  { year: 2023, date: "Apr 2023", text: "Awarded the NFRF Exploration Grant ($200k, two years).", highlight: true },
  { year: 2023, date: "May 2023", text: "Invited to MIT Media Lab to discuss pretrained language models.", link: "https://www.media.mit.edu/" },
  { year: 2022, date: "Jun 2022", text: "NSERC Discovery Grant + Launch Supplement ($137.5k total).", highlight: true },
  { year: 2022, date: "Oct 2022", text: "Keynote at International Symposium on Basic Sciences for Sustainable Development." },
];

// Invited talks — by year.
window.TALKS = [
  { year: 2025, title: "Invited talk, 1st Workshop on LLMs for Cross-Temporal Research", venue: "COLM 2025 · XTempLLMs", kind: "Workshop" },
  { year: 2025, title: "The Search for Artificial Intelligence: The Problem of \u201CProgress\u201D", venue: "Michigan State University, CSE Lecture Series", kind: "Invited" },
  { year: 2024, title: "In Search of Digital Truth", venue: "First Ontario Performing Arts Centre", kind: "Public" },
  { year: 2024, title: "Large Language Models: Society's Silent Mirrors", venue: "Brock Anthropocene Research Colloquium", kind: "Invited" },
  { year: 2023, title: "Language Models at Scale: Big Models, Bigger Questions", venue: "Brock Annual AI Day, Expert Panel", kind: "Panel" },
  { year: 2023, title: "Navigating the Power and Pitfalls of Pretrained Language Models in the Prompting Era", venue: "MIT Media Lab", kind: "Invited" },
  { year: 2023, title: "Research Talk", venue: "SKEMA AI School for Business", kind: "Seminar" },
  { year: 2022, title: "Role of Basic Sciences for Sustainable Development", venue: "COMSTECH · OIC Standing Committee", kind: "Keynote" },
  { year: 2022, title: "Generalizable, Ethical, and Interpretable NLP: Science or Science Fiction?", venue: "SKEMA AI School for Business", kind: "Masterclass" },
  { year: 2021, title: "Towards Interpretable, Ethical, and Generalizable NLP Models", venue: "Lakehead University, Graduate Seminar", kind: "Seminar" },
  { year: 2019, title: "Keynote", venue: "Microsoft Research × Mila Collaborative Research Workshop", kind: "Keynote" },
  { year: 2018, title: "Oral presentation (Best Paper)", venue: "NAACL 2018 Student Research Workshop", kind: "Conference" },
];

// Courses — grouped by year.
window.COURSES = [
  { year: 2025, term: "Fall", code: "CS 312", title: "Computing, AI, Ethics, and Society", desc: "Privacy, disinformation, ownership, fairness, and bias in computing and AI." },
  { year: 2025, term: "Fall", code: "COSC 4P84", title: "Introduction to Natural Language Processing", desc: "Algorithms and recent advances in NLP.", newCourse: true },
  { year: 2025, term: "Winter", code: "COSC 1P71", title: "Essentials of Artificial Intelligence", desc: "AI principles, ML models, real-world applications.", newCourse: true },
  { year: 2025, term: "Winter", code: "COSC 5P84", title: "Natural Language Processing (Graduate)", desc: "Deep learning models for NLP and their application.", newCourse: true },
  { year: 2024, term: "Winter", code: "COSC 4P84", title: "Introduction to Natural Language Processing", desc: "Algorithms and recent advances in NLP.", newCourse: true },
  { year: 2024, term: "Fall/Winter", code: "COSC 1P03", title: "Data Structures and Abstraction", desc: "Programming and problem-solving; arrays, linked lists, abstraction." },
  { year: 2023, term: "Winter", code: "COSC 5P84", title: "Natural Language Processing (Graduate)", desc: "Deep learning models for NLP.", newCourse: true },
  { year: 2023, term: "Fall/Winter", code: "COSC 1P03", title: "Data Structures and Abstraction", desc: "Programming and problem-solving; arrays, linked lists, abstraction." },
  { year: 2023, term: "Fall", code: "COSC 2P89", title: "Internet Technologies", desc: "Essential technologies and protocols for web and internet development." },
  { year: 2022, term: "Winter", code: "COSC 2P05", title: "Programming Languages", desc: "Programming paradigms and their implications." },
  { year: 2022, term: "Winter", code: "COSC 1P03", title: "Data Structures and Abstraction", desc: "Programming and problem-solving." },
  { year: 2022, term: "Fall", code: "COSC 2P89", title: "Internet Technologies", desc: "Web and internet protocols." },
  { year: 2021, term: "Fall", code: "COSC 2P89", title: "Internet Technologies", desc: "Web and internet protocols." },
];

// Group members (from CV, April 2026).
window.GROUP = {
  current: [
    // PhD students
    { name: "Sadeen Alsabbagh", role: "PhD, incoming Fall 2026" },
    { name: "Abhya Reddy Ambati", role: "PhD, Spring 2026 – Present" },
    { name: "Winston Zeng", role: "PhD, Spring 2026 – Present", note: "Rotation project" },
    // MSc students
    { name: "Rajiv Chilla", role: "MSc, Spring 2026 – Present" },
    { name: "Robert Morabito", role: "MSc, 2024 – Present" },
    { name: "Kaige Chen", role: "MSc, Fall 2024 – Present" },
    { name: "Sangmitra Madhusudan", role: "MSc, Fall 2025 – Present", note: "Vector Scholarship" },
    { name: "Tyler McDonald", role: "MSc, Fall 2025 – Present", note: "Vector Scholarship" },
    // Undergraduate researchers at Emory
    { name: "Tom Suo", role: "Undergraduate, Emory CS" },
    { name: "Charitra Viswanath", role: "Undergraduate, Emory CS" },
    { name: "Aurora Wu", role: "Undergraduate, Emory CS" },
    { name: "Liam Neild", role: "Undergraduate, Emory CS" },
    { name: "Shuyang Yu", role: "Undergraduate, Emory CS" },
    { name: "Xiangbo Zhang", role: "Undergraduate, Georgia Tech / Emory CS intern" },
  ],
  alumni: [
    { name: "Nikta Gohari Sadr", role: "MSc, Brock (2023–2025)" },
    { name: "Sarfaroz Yunusov", role: "MSc, Brock (2023–2025)" },
    { name: "Abhishek Kumar", role: "MSc, Brock (2023–2024)" },
  ],
};
