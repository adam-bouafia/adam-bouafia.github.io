// Every project, newest first. One list for the Projects app and the
// Projects tab of About Adam. Add a project here, then (optionally) its
// category, icon, links and screenshots in META below.

const BASE = [
        {
            name: "Rackbench - A Data Center Rack, from Order to Shipping",
            date: "Nov 2026",
            link: "https://rackbench.vercel.app",
            description: [
                "An interactive way to learn how a data center rack is built, tested and shipped. A data center explorer zooms from the data hall (aisles, cooling, UPS, busways) into a row, a rack and a server with the lid off: all 17 parts clickable, each with how it is checked and the lessons behind it. 26 lessons in seven chapters, from what is inside a two-socket server to GPU racks: BMCs over IPMI and Redfish, network boot, firmware updates, cabling checks with LLDP, burn-in and fault finding, each step drawn as an isometric diagram with the real packets and commands. Rack Shift, a game, runs one shift on an integration floor: build three racks by the rules, check the cabling, power on, burn in, fix and retest, write the report and ship. Build a server, a second game, has you place CPUs, heatsinks, memory by the population table, drives, the network card, fans and power supplies into a 1U chassis, then power it on against the order; a RAID lesson lets you fail disks in RAID 0, 1, 5, 6 and 10. Behind every lesson is rackbench-lab: a three-node rack on KVM with emulated BMCs, OpenBMC in QEMU, iPXE network boot, a BIOS-update drill and a fault injector with 11 faults.",
            ],
            domains: ["data-center", "ipmi", "redfish", "openbmc", "kvm", "bash", "react", "typescript"]
        },
        {
            name: "aks-secure-platform-lab - Secure AKS Platform End to End",
            date: "Nov 2026",
            link: "https://github.com/adam-bouafia/aks-platform-lab",
            description: [
                "A fake banking API secured at every layer on Azure Kubernetes Service. A hardened container image (1.32 GB / 183 CVEs down to 19.5 MB / 0 CVEs), the whole Azure foundation in Terraform (AKS on Azure CNI Overlay with Cilium, Key Vault, workload identity federation - no password anywhere), zero-trust NetworkPolicy, Kyverno admission guardrails, a kube-prometheus-stack observability stack, and a Trivy Operator vulnerability loop. Every control was applied to a live cluster and verified directly: real curl tests, real policy rejections, real CVE findings.",
            ],
            domains: ["azure", "kubernetes", "terraform", "devsecops", "kyverno", "prometheus"]
        },
        {
            name: "The Illiterates - Personal Learning Journal",
            date: "Nov 2026",
            link: "https://github.com/adam-bouafia/The-illiterates",
            description: [
                "A MkDocs Material site documenting hands-on courses written from scratch: Kubernetes fundamentals, Docker, and building the secure AKS platform above - theory chapters plus a full build log with screenshots for every step. Published to Read the Docs.",
            ],
            domains: ["mkdocs", "documentation", "kubernetes", "docker"]
        },
        {
            name: "DayCheck - Daycare Check-in App",
            date: "Nov 2026",
            link: "https://github.com/adam-bouafia/daycheck",
            description: [
                "A daycare app in Flutter with Riverpod and an MVVM architecture per feature. Staff check children in and out and share the day with parents through notes, photos and documents; parents follow along, get notified and send leave or extra-hours requests. Each child's status is derived from one event log, never stored separately. Nine languages with right-to-left Arabic and Hebrew, light and dark themes, local first with no backend, and 32 test files that use in-memory fakes.",
            ],
            domains: ["flutter", "dart", "riverpod", "mvvm", "mobile-app"]
        },
        {
            name: "php-gitops-lab - GitOps Delivery Pipeline",
            date: "Oct 2026",
            link: "https://github.com/adam-bouafia/php-gitops-lab",
            description: [
                "GitOps delivery pipeline for a PHP-FPM/nginx app: GitLab CI builds and scans the image, Flux reconciles it onto Kubernetes, and a Helm chart ships the app alongside kube-prometheus-stack for metrics.",
            ],
            domains: ["gitops", "flux", "helm", "gitlab-ci", "kubernetes", "php"]
        },
        {
            name: "MetJou - Shake-to-Alert Personal Safety App",
            date: "Oct 2026",
            link: "https://github.com/adam-bouafia/metjou",
            description: [
                "A Flutter personal-safety app with a FastAPI + pgvector backend (metjou-backend) that answers \"what should I do?\" with quoted sources only, never generated text. Feature-first architecture, localised into five languages, with on-device Bluetooth tracker detection.",
            ],
            domains: ["flutter", "dart", "fastapi", "pgvector", "mobile"]
        },
        {
            name: "JobFinder - NL Job Search & Sponsor Matching Tool",
            date: "Oct 2026",
            link: "https://github.com/adam-bouafia/JobFinder",
            description: [
                "A Python CLI and local web UI that cross-references job postings against the Netherlands' IND recognised-sponsor register, parses resumes, and scores job fit - plus a Chrome extension that overlays sponsor status directly on LinkedIn and Indeed listings.",
            ],
            domains: ["python", "fastapi", "job-search", "chrome-extension"]
        },
        {
            name: "FirstCall - AI First Responder for Kubernetes Incidents",
            date: "Sep 2026",
            link: "https://github.com/adam-bouafia/firstcall",
            description: [
                "Built for the AI Accel hackathon. Runs in-cluster and, when a workload breaks, collects what an on-call engineer would check in the first 15 minutes (pod spec, events, current and previous logs, metrics, rollout diff), redacts secrets, then asks an open-weight model for a diagnosis backed by quoted evidence. Fixes are allow-listed, server dry-run and applied only after a person approves. Ships as a Helm chart with Prometheus metrics and a Grafana dashboard.",
            ],
            domains: ["kubernetes", "python", "helm", "prometheus", "grafana", "large-language-models", "hackathon"]
        },
        {
            name: "repo-sentinel - Autonomous Repository Auditor",
            date: "Sep 2026",
            link: "https://github.com/adam-bouafia/repo-sentinel",
            description: [
                "An agent on the Claude Agent SDK that audits GitHub repositories for failing CI, outdated dependencies and upstream drift, then opens guarded fix PRs. The agent has no shell and no local file access: its only tools are read-only calls bound to the repo under audit, and PR rules are enforced in code, not in the prompt. Keeps state between runs so each finding is marked new, open since a date, or resolved.",
            ],
            domains: ["python", "ai-agents", "github-actions", "devops"]
        },
        {
            name: "CKA 2026 Curriculum Update (merged upstream)",
            date: "Sep 2026",
            link: "https://github.com/walidshaari/Kubernetes-Certified-Administrator/pull/63",
            description: [
                "Pull request merged into Walid Shaari's CKA study guide (4.4k stars), updating it from the 2023 objectives to the v1.35 curriculum across 15 files. Corrected etcd, kubeadm upgrade and kubectl examples against current Kubernetes documentation, replaced dead links, and added a troubleshooting method and scenario bank for the 30% Troubleshooting domain plus exam-day tactics and study guides.",
            ],
            domains: ["kubernetes", "open-source", "documentation"]
        },
        {
            name: "PulseBoard - Status Page on Kubernetes with GitLab CI/CD",
            date: "Sep 2026",
            link: "https://github.com/adam-bouafia/pulseboard",
            description: [
                "Hosted status page built as two containerised microservices: a Node/Express REST API with health endpoints for Kubernetes probes, and an nginx frontend reverse-proxying /api/ to the backend Service. Shipped through a GitLab CI pipeline (build, test, Trivy security scan) and deployed to Kubernetes with Deployments, Services and ConfigMaps, plus break-it drills for cluster troubleshooting.",
            ],
            domains: ["kubernetes", "gitlab-ci", "docker", "nginx", "nodejs", "trivy"]
        },
        {
            name: "smarthome-k8s - Self-Hosted Home Automation with a Kubernetes Operator",
            date: "Aug 2026",
            link: "https://github.com/adam-bouafia/smarthome-k8s",
            description: [
                "Home automation on a two-node k3s cluster with no cloud services or vendor accounts: Mosquitto MQTT as the message bus, Home Assistant, Zigbee2MQTT and kube-prometheus-stack for metrics. Includes a custom Kubernetes operator in Go that manages the whole stack as a single custom resource.",
            ],
            domains: ["kubernetes", "k3s", "go", "operator", "mqtt", "prometheus", "self-hosted"]
        },
        {
            name: "Fedora Workstation Portfolio (this site)",
            date: "Sep 2026",
            link: "https://github.com/adam-bouafia/adam-bouafia.github.io",
            description: [
                "Interactive portfolio simulating a Fedora Workstation desktop with draggable windowed apps and a terminal. Built with Next.js and Tailwind CSS as a static export, themed on the Fedora brand and GNOME Adwaita palettes, and deployed to GitHub Pages via GitHub Actions.",
            ],
            domains: ["next.js", "react", "tailwindcss", "github-actions"]
        },
        {
            name: "Azure Landing Zone - Production MSP Infrastructure",
            date: "Feb 2026",
            link: "https://github.com/adam-bouafia/Azure-Landing-Zone",
            description: [
                "Production Azure infrastructure with hub-spoke topology, 100% Bicep IaC, Azure Firewall, Bastion, NSG and Key Vault with RBAC. Multi-stage Azure DevOps pipeline with validation, what-if and approval gates, plus cost optimisation scripts saving 70% on dev infrastructure.",
            ],
            domains: ["azure", "bicep", "iac", "azure-devops", "ci-cd"]
        },
        {
            name: "Greenmining - Python MSR Library for Green IT",
            date: "Jan 2026",
            link: "https://github.com/adam-bouafia/greenmining",
            description: [
                "Python library published on PyPI for Green IT research, implementing 124 sustainability patterns from the Green Software Foundation with multi-backend energy measurement (RAPL, CodeCarbon) and carbon footprint reporting.",
            ],
            domains: ["python", "pypi", "green-it", "ci-cd"]
        },
        {
            name: "LogPress - Semantic Log Compression System (MSc Thesis)",
            date: "Dec 2025",
            link: "https://github.com/adam-bouafia/LogPress",
            description: [
                "Master's thesis at VU Amsterdam. Semantic log compression achieving a 22.33x compression ratio with 100% lossless reconstruction across 2.4M+ logs, plus a Lazy Reconstruction query system answering in 21-111ms without full decompression.",
            ],
            domains: ["python", "research", "compression", "docker"]
        },
        {
            name: "Issue Report Classification (ML for Software Engineering)",
            date: "Dec 2025",
            link: "https://github.com/adam-bouafia/Issue-Report-Classification",
            description: [
                "Multi-label classification of GitHub issue reports on the NLBSE'24 tool competition dataset (3,000 issues), comparing classic machine learning with deep learning. Course project for Machine Learning for Software Engineering at the University of L'Aquila.",
            ],
            domains: ["python", "machine-learning", "nlp", "jupyter"]
        },
        {
            name: "Semantic Log Routing - Hybrid Log Management for Greener Clouds",
            date: "Nov 2025",
            link: "https://github.com/adam-bouafia/Towards-Greener-Clouds-Evaluating-Hybrid-Log-Managament",
            description: [
                "A hybrid log management system that decides for every log entry whether it goes to hot storage (ClickHouse) or cold storage (MinIO). An XGBoost model reads DistilBERT embeddings of the log text plus time and context features (component error rate, log frequency), to balance query speed against energy use.",
            ],
            domains: ["python", "machine-learning", "clickhouse", "minio", "green-it"]
        },
        {
            name: "LCT - LLM Comparative Tool with Energy Profiling",
            date: "Oct 2025",
            link: "https://github.com/adam-bouafia/LCT-LLMs-Comparative-Tool",
            description: [
                "Open-source framework evaluating 500K+ HuggingFace models across 17 algorithms with real-time energy profiling, in a dockerised CI/CD pipeline with carbon footprint analytics (tokens/joule, kg CO2).",
            ],
            domains: ["large-language-models", "energy-efficiency", "docker", "python"]
        },
        {
            name: "Agricultural IoT RAG - Sensor Data with Cited AI Advice",
            date: "Oct 2025",
            link: "https://github.com/adam-bouafia/agricultural-iot-rag",
            description: [
                "A Go service for smart farming: sensor readings arrive over MQTT and land in InfluxDB, and farming questions are answered with retrieval-augmented generation (embeddings in Qdrant, Llama 3.2 running locally in Ollama), with citations to the sources. REST API, Prometheus metrics and Grafana dashboards, all in Docker.",
            ],
            domains: ["go", "mqtt", "influxdb", "qdrant", "ollama", "docker"]
        },
        {
            name: "CO2 Consumption Monitor (GNOME Shell Extension)",
            date: "Sep 2025",
            link: "https://github.com/adam-bouafia/Gnome-Shell-CO2-Consumption-monitor-extension",
            description: [
                "Published on the GNOME Extensions store. Estimates real-time CO2 emissions in pure GJS with no Python or background daemons: per-application attribution via /proc sampling, live grid carbon intensity from ElectricityMaps, today/week/month totals and CSV history export, with Libadwaita preferences.",
            ],
            domains: ["gnome", "javascript", "sustainability", "linux", "green-it"]
        },
        {
            name: "Programming Language Energy Benchmark",
            date: "Mar 2025",
            link: "https://github.com/adam-bouafia/programming-language-energy-benchmark",
            description: [
                "Benchmarks from the Computer Language Benchmarks Game (binary-trees, mandelbrot, n-body, regex-redux and more) in several languages, with scripts that measure their energy use on your own hardware. Built to test the claim of the paper It's Not Easy Being Green: energy follows execution time and the number of active cores rather than the language itself.",
            ],
            domains: ["python", "benchmarks", "energy", "green-it"]
        },
        {
            name: "Think Before You Save (Hackathon Winner - TU Delft)",
            date: "Jan 2025",
            link: "https://github.com/adam-bouafia/Think-Before-You-Save",
            description: [
                "Chrome extension calculating the CO2 emissions of cloud storage to discourage needless saving. Winner of the Green Waves Hackathon at TU Delft.",
            ],
            domains: ["chrome-extension", "sustainability", "javascript", "hackathon"]
        },
        {
            name: "Helm Guide",
            date: "Oct 2024",
            link: "https://github.com/adam-bouafia/Helm-Guide",
            description: [
                "A comprehensive guide to Helm, covering installation, architecture, chart structure, templating, hooks, and lifecycle management, aimed at simplifying Kubernetes deployments.",
            ],
            domains: ["kubernetes", "helm", "devops"]
        },
        {
            name: "Comparative Evaluation of Energy Efficiency in Large Language Models",
            date: "Oct 2024",
            link: "https://github.com/adam-bouafia/Comparative-Evaluation-of-Energy-Efficiency-in-LLM",
            description: [
                "Repository for the Project of Green Lab (A.A. 2024-2025) at Vrije Universiteit Amsterdam. This project analyzes energy efficiency improvements across versions of various large language models.",
            ],
            domains: ["energy-efficiency", "large-language-models", "experiment-runner"]
        },
        {
            name: "L'Aquila Smart Road Platform",
            date: "Jul 2024",
            link: "https://github.com/adam-bouafia/L-Aquila-Smart-Roads-SOSE",
            description: [
                "A monitor violation detection system built with Spring Boot and Angular, designed for managing vehicular violations and tracking offender records in a microservices architecture.",
            ],
            domains: ["spring-boot", "angular", "microservices"]
        },
        {
            name: "MangaWorld Full Stack Application (SOSE)",
            date: "Jul 2024",
            link: "https://github.com/adam-bouafia/MangaWorld-Full-Stack-Application",
            description: [
                "Full stack application employing microservices architecture with Spring Boot and React. Consul and Eureka are used for service registration.",
            ],
            domains: ["spring-boot", "react", "microservices", "eureka"]
        },
        {
            name: "EatFit & Review - Service-Oriented Food Reviews",
            date: "Jul 2024",
            link: "https://github.com/adam-bouafia/EatFit_Review-FullStack",
            description: [
                "A service-oriented system to search, review and rate food items with the Edamam Food Database API: SOAP and REST services and microservices in Java on Apache Tomcat, behind Nginx. Course project for Service Oriented Software Engineering at the University of L'Aquila.",
            ],
            domains: ["java", "soap", "rest", "microservices", "tomcat"]
        },
        {
            name: "Vehicle Routing Problem with Heterogeneous Locker Boxes (VRPHLB)",
            date: "Jun 2024",
            link: "https://github.com/adam-bouafia/NetworkOptimization-VRPHLB-Project",
            description: [
                "Project involving the implementation of VRPHLB using Mixed-Integer Linear Programming (MILP) to optimize last-mile delivery.",
            ],
            domains: ["optimization", "vrp", "milp"]
        },
        {
            name: "BlogFeedBack-Comment-Prediction",
            date: "Jun 2024",
            link: "https://github.com/adam-bouafia/BlogFeedBack-Comment-Prediction-Analysis",
            description: [
                "Machine learning project predicting the number of comments a blog post will receive in the next 24 hours using regression techniques.",
            ],
            domains: ["machine-learning", "data-analysis", "blog"]
        },
        {
            name: "3D Environment Modeling with Scenic 3.0",
            date: "Jun 2024",
            link: "https://github.com/adam-bouafia/Scenic3.0-3D-Modeling-Analysis",
            description: [
                "Repository for the Project of Automated Verification of Cyber-Physical Systems, includes Scenic code examples for 3D object placement and simulation.",
            ],
            domains: ["3d-modeling", "cyber-physical-systems", "scenic"]
        },
        {
            name: "Financial Services Application",
            date: "May 2024",
            link: "https://github.com/adam-bouafia/Securing-SOAP-and-REST-Services-with-Apache-CXF-",
            description: [
                "Comprehensive example of integrating Apache CXF with Spring Boot to create a secure web services platform. Features currency conversion, loan calculation, and investment prediction.",
            ],
            domains: ["spring-boot", "soap", "rest", "apache-cxf"]
        },
        {
            name: "Gas Monitoring System",
            date: "Feb 2024",
            link: "https://github.com/adam-bouafia/Gas-Monitoring-System",
            description: [
                "Gas Monitoring System - IoT Project with Node-RED, InfluxDB and Telegram-Bot using MAPE-K Architecture. Real-time data processing, visualization and integration with a Telegram bot for notifications.",
            ],
            domains: ["iot", "node-red", "influxdb", "telegram-bot", "docker"]
        },
        {
            name: "Smart Fan Project - SE4IOT",
            date: "Feb 2024",
            link: "https://github.com/adam-bouafia/Smart-Fan-Project",
            description: [
                "IoT solution for optimizing environmental conditions through real-time temperature and humidity control. Developed with Node-RED, MQTT, InfluxDB, Grafana, and Telegram for notifications.",
            ],
            domains: ["iot", "node-red", "mqtt", "influxdb", "grafana"]
        },
        {
            name: "Model Driven Engineering (MDE) Coursework - 2023/2024",
            date: "Jan 2024",
            link: "https://github.com/adam-bouafia/Model-Driven-Engineering-MDE-Projects",
            description: [
                "Collection of projects showcasing the application of model-driven engineering principles including UML, EMF, OCL, and model transformations.",
            ],
            domains: ["mde", "uml", "eclipse", "emf"]
        },
        {
            name: "AI Heuristics and Q-learning, Alpha-Beta pruning Learning Projects",
            date: "Dec 2023",
            link: "https://github.com/adam-bouafia/AI-Optimization-and-Strategy-Solutions",
            description: [
                "Collection of AI projects exploring heuristic methods, Q-learning, and Alpha-Beta pruning. Includes Hex Game Solver, MyChef, and other AI applications.",
            ],
            domains: ["ai", "heuristics", "q-learning", "alpha-beta"]
        },
        {
            name: "Health Informatics and Data Collaboration (HIDC) - Software Quality Engineering Homework (Univaq)",
            date: "Dec 2023",
            link: "https://github.com/adam-bouafia/HIDC-Project-SQE",
            description: [
                "Assignments focusing on UML software modeling and performance analysis for the Research Infrastructure for Big Data and Social Mining (SoBigData) system.",
            ],
            domains: ["uml", "software-quality", "performance-analysis"]
        },
        {
            name: "GramApp-Detect-API",
            date: "Jun 2023",
            link: "https://github.com/adam-bouafia/GramApp-Detect-API",
            description: [
                "Leveraging NLP for Enhanced Text Analysis - Provides grammar checking, sentiment analysis, and language detection capabilities using advanced NLP techniques.",
            ],
            domains: ["nlp", "text-analysis", "api"]
        },
        {
            name: "M3ak-Mobile-Application",
            date: "Feb 2023",
            link: "https://github.com/adam-bouafia/M3ak-Mobile-Application-Prototype",
            description: [
                "M3ak App Prototype - Safe Shake mode to alert loved ones by shaking the phone, sending an alert SMS to selected contacts. Promotes safety and fights against gender-based violence.",
            ],
            domains: ["mobile-app", "flutter", "safety"]
        },
        {
            name: "WhatsApp Clone (Flutter)",
            date: "Sep 2021",
            link: "https://github.com/adam-bouafia/WhatsappClone-Flutter-Mobile-Application",
            description: [
                "A WhatsApp clone in Flutter with Firebase: sign-in, real-time messaging, sharing of images, videos and documents, and status updates.",
            ],
            domains: ["flutter", "dart", "firebase", "mobile-app"]
        }
];

export const CATEGORIES = [
    { id: "cloud", label: "Cloud & Platform", from: "#62A0EA", to: "#1A5FB4" },
    { id: "green", label: "Green IT", from: "#57E389", to: "#1E8C55" },
    { id: "ai", label: "AI & Data", from: "#DC8ADD", to: "#813D9C" },
    { id: "mobile", label: "Mobile", from: "#FFBE6F", to: "#E66100" },
    { id: "web", label: "Web & Services", from: "#7FD6D6", to: "#1F7A8C" },
    { id: "iot", label: "IoT", from: "#F5C211", to: "#B5730A" },
    { id: "tools", label: "Tools", from: "#CDAB8F", to: "#7A5230" },
    { id: "study", label: "Learning & Coursework", from: "#9A9996", to: "#4A4850" },
];

const GH = "https://github.com/adam-bouafia/";
const shots = (dir, n) => Array.from({ length: n }, (_, i) => `./images/projects/${dir}/${i + 1}.webp`);

// Keyed by the project's link. cats: first one sets the icon colour.
const META = {
    "https://rackbench.vercel.app": { cats: ["cloud", "tools"], glyph: "rack", badges: ["New", "Live site"], live: "https://rackbench.vercel.app", repo: GH + "rackbench", extra: [{ label: "Lab on GitHub", url: GH + "rackbench-lab" }], shots: shots("rackbench", 7) },
    [GH + "daycheck"]: { cats: ["mobile"], glyph: "calendar", docs: "https://adam-bouafia.github.io/daycheck/", shots: shots("daycheck", 3), portrait: true },
    [GH + "aks-platform-lab"]: { cats: ["cloud"], glyph: "shield", shots: shots("aks-secure-platform-lab", 2) },
    [GH + "The-illiterates"]: { cats: ["study"], glyph: "book", badges: ["Docs site"], docs: "https://the-illiterates.readthedocs.io/" },
    [GH + "php-gitops-lab"]: { cats: ["cloud"], glyph: "branch" },
    [GH + "metjou"]: { cats: ["mobile"], glyph: "shield", extra: [{ label: "Backend", url: GH + "metjou-backend" }] },
    [GH + "JobFinder"]: { cats: ["tools", "web"], glyph: "search" },
    [GH + "firstcall"]: { cats: ["cloud", "ai"], glyph: "bell", badges: ["Hackathon"], shots: shots("firstcall", 2) },
    [GH + "repo-sentinel"]: { cats: ["ai", "tools"], glyph: "eye" },
    "https://github.com/walidshaari/Kubernetes-Certified-Administrator/pull/63": { title: "CKA 2026 Curriculum Update", tagline: "Pull request merged into a 4.4k-star study guide", cats: ["cloud", "study"], glyph: "wheel", badges: ["Merged upstream"] },
    [GH + "pulseboard"]: { cats: ["cloud"], glyph: "pulse" },
    [GH + "smarthome-k8s"]: { cats: ["cloud", "iot"], glyph: "home" },
    [GH + "adam-bouafia.github.io"]: { title: "Fedora Workstation Portfolio", tagline: "This site", cats: ["web"], glyph: "monitor", badges: ["This site"] },
    [GH + "Azure-Landing-Zone"]: { cats: ["cloud"], glyph: "cloud", shots: shots("azure-landing-zone", 2) },
    [GH + "greenmining"]: { cats: ["green", "tools"], glyph: "leaf", badges: ["On PyPI"], extra: [{ label: "PyPI", url: "https://pypi.org/project/greenmining/" }] },
    [GH + "LogPress"]: { cats: ["green", "study"], glyph: "archive", badges: ["MSc thesis"], shots: shots("logpress", 2) },
    [GH + "LCT-LLMs-Comparative-Tool"]: { cats: ["ai", "green"], glyph: "chart" },
    [GH + "Gnome-Shell-CO2-Consumption-monitor-extension"]: { title: "CO2 Consumption Monitor", tagline: "GNOME Shell extension", cats: ["green", "tools"], glyph: "leaf", badges: ["GNOME Extensions"], extra: [{ label: "GNOME Extensions", url: "https://extensions.gnome.org/extension/8601/co2-consumption-monitor/" }], shots: shots("co2-monitor", 1), portrait: true },
    [GH + "Think-Before-You-Save"]: { title: "Think Before You Save", tagline: "Chrome extension, hackathon winner at TU Delft", cats: ["green", "web"], glyph: "leaf", badges: ["Hackathon winner"] },
    [GH + "Helm-Guide"]: { cats: ["cloud", "study"], glyph: "wheel" },
    [GH + "Comparative-Evaluation-of-Energy-Efficiency-in-LLM"]: { title: "LLM Energy Efficiency Evaluation", tagline: "Green Lab project, VU Amsterdam", cats: ["green", "ai", "study"], glyph: "bolt" },
    [GH + "L-Aquila-Smart-Roads-SOSE"]: { cats: ["web", "study"], glyph: "globe" },
    [GH + "MangaWorld-Full-Stack-Application"]: { title: "MangaWorld", tagline: "Full-stack application, SOSE course", cats: ["web", "study"], glyph: "globe" },
    [GH + "NetworkOptimization-VRPHLB-Project"]: { title: "VRPHLB", tagline: "Vehicle routing with heterogeneous locker boxes", cats: ["study"], glyph: "chart" },
    [GH + "BlogFeedBack-Comment-Prediction-Analysis"]: { cats: ["ai", "study"], glyph: "chart" },
    [GH + "Scenic3.0-3D-Modeling-Analysis"]: { cats: ["study"], glyph: "cap" },
    [GH + "Securing-SOAP-and-REST-Services-with-Apache-CXF-"]: { title: "Financial Services Application", tagline: "SOAP and REST services secured with Apache CXF", cats: ["web", "study"], glyph: "shield" },
    [GH + "Gas-Monitoring-System"]: { cats: ["iot", "study"], glyph: "chip" },
    [GH + "Smart-Fan-Project"]: { cats: ["iot", "study"], glyph: "chip" },
    [GH + "Model-Driven-Engineering-MDE-Projects"]: { title: "Model-Driven Engineering", tagline: "Coursework 2023/2024", cats: ["study"], glyph: "cap" },
    [GH + "AI-Optimization-and-Strategy-Solutions"]: { title: "AI Heuristics and Q-learning", tagline: "Hex solver, MyChef and other AI course projects", cats: ["ai", "study"], glyph: "spark" },
    [GH + "HIDC-Project-SQE"]: { cats: ["study"], glyph: "cap" },
    [GH + "GramApp-Detect-API"]: { cats: ["ai"], glyph: "spark" },
    [GH + "M3ak-Mobile-Application-Prototype"]: { title: "M3ak", tagline: "Flutter personal safety prototype, later MetJou", cats: ["mobile"], glyph: "shield" },
    [GH + "Towards-Greener-Clouds-Evaluating-Hybrid-Log-Managament"]: { cats: ["green", "ai"], glyph: "cloud" },
    [GH + "agricultural-iot-rag"]: { cats: ["iot", "ai"], glyph: "chip" },
    [GH + "Issue-Report-Classification"]: { title: "Issue Report Classification", tagline: "ML for Software Engineering", cats: ["ai", "study"], glyph: "spark" },
    [GH + "programming-language-energy-benchmark"]: { title: "Programming Language Energy Benchmark", tagline: "Energy per language, measured on your own hardware", cats: ["green"], glyph: "bolt" },
    [GH + "EatFit_Review-FullStack"]: { cats: ["web", "study"], glyph: "globe" },
    [GH + "WhatsappClone-Flutter-Mobile-Application"]: { title: "WhatsApp Clone", tagline: "Flutter and Firebase", cats: ["mobile"], glyph: "phone" },
};

const slug = (name) => name.split(" - ")[0].split(" (")[0].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const PROJECTS = BASE.map((p) => {
    const meta = META[p.link] || {};
    // split "name - tagline" on the first " - " that is not inside brackets
    let cut = -1;
    for (let i = 0, depth = 0; i < p.name.length; i++) {
        if (p.name[i] === "(") depth++;
        if (p.name[i] === ")") depth--;
        if (depth === 0 && p.name.startsWith(" - ", i)) { cut = i; break; }
    }
    const title = meta.title || (cut < 0 ? p.name : p.name.slice(0, cut));
    const tagline = meta.tagline !== undefined ? meta.tagline : cut < 0 ? "" : p.name.slice(cut + 3);
    const text = Array.isArray(p.description) ? p.description.join(" ") : p.description;
    const sentences = text.split(/(?<=\.)\s+/);
    const summary = sentences[0].length < 70 && sentences[1] ? `${sentences[0]} ${sentences[1]}` : sentences[0];
    return {
        ...p,
        id: slug(p.name),
        title,
        tagline,
        text,
        summary,
        cats: meta.cats || ["study"],
        glyph: meta.glyph,
        badges: meta.badges || [],
        repo: meta.repo || (p.link.startsWith("https://github.com/") ? p.link : null),
        live: meta.live || null,
        docs: meta.docs || null,
        extra: meta.extra || [],
        shots: meta.shots || [],
        portrait: !!meta.portrait,
    };
});

export const FEATURED = ["rackbench", "aks-secure-platform-lab", "logpress", "daycheck", "firstcall"];

// Full class names, not fragments - Tailwind's JIT only emits classes it
// finds literally in the source.
export const TAG_COLORS = {
    "3d-modeling": "text-green-800 border-green-800",
    "ai": "text-indigo-600 border-indigo-600",
    "ai-agents": "text-fuchsia-400 border-fuchsia-400",
    "alpha-beta": "text-purple-700 border-purple-700",
    "angular": "text-red-400 border-red-400",
    "apache-cxf": "text-pink-800 border-pink-800",
    "api": "text-cyan-400 border-cyan-400",
    "azure": "text-sky-400 border-sky-400",
    "azure-devops": "text-blue-400 border-blue-400",
    "bicep": "text-sky-300 border-sky-300",
    "blog": "text-orange-200 border-orange-200",
    "chrome-extension": "text-yellow-400 border-yellow-400",
    "ci-cd": "text-emerald-400 border-emerald-400",
    "codeforces-api": "text-gray-300 border-gray-300",
    "compression": "text-fuchsia-300 border-fuchsia-300",
    "cyber-physical-systems": "text-blue-900 border-blue-900",
    "dart": "text-blue-500 border-blue-500",
    "data-analysis": "text-gray-700 border-gray-700",
    "devops": "text-emerald-300 border-emerald-300",
    "django": "text-green-600 border-green-600",
    "docker": "text-blue-200 border-blue-200",
    "documentation": "text-stone-300 border-stone-300",
    "eclipse": "text-gray-500 border-gray-500",
    "emf": "text-red-700 border-red-700",
    "energy-efficiency": "text-lime-400 border-lime-400",
    "eureka": "text-yellow-900 border-yellow-900",
    "experiment-runner": "text-teal-300 border-teal-300",
    "firebase": "text-red-600 border-red-600",
    "firebase auth": "text-red-400 border-red-400",
    "firestore": "text-red-500 border-red-500",
    "flutter": "text-blue-400 border-blue-400",
    "github-actions": "text-gray-300 border-gray-300",
    "gitlab-ci": "text-orange-400 border-orange-400",
    "gnome": "text-slate-300 border-slate-300",
    "go": "text-cyan-300 border-cyan-300",
    "grafana": "text-orange-300 border-orange-300",
    "green-it": "text-green-400 border-green-400",
    "hackathon": "text-orange-400 border-orange-400",
    "helm": "text-indigo-400 border-indigo-400",
    "heuristics": "text-orange-600 border-orange-600",
    "html5": "text-pink-600 border-pink-600",
    "iac": "text-indigo-300 border-indigo-300",
    "influxdb": "text-red-500 border-red-500",
    "iot": "text-teal-400 border-teal-400",
    "javascript": "text-yellow-300 border-yellow-300",
    "k3s": "text-yellow-400 border-yellow-400",
    "kubernetes": "text-blue-400 border-blue-400",
    "large-language-models": "text-purple-400 border-purple-400",
    "linux": "text-amber-300 border-amber-300",
    "machine-learning": "text-yellow-800 border-yellow-800",
    "mde": "text-blue-100 border-blue-100",
    "microservices": "text-purple-900 border-purple-900",
    "milp": "text-green-900 border-green-900",
    "mobile-app": "text-rose-300 border-rose-300",
    "mqtt": "text-gray-400 border-gray-400",
    "next.js": "text-purple-600 border-purple-600",
    "nginx": "text-green-500 border-green-500",
    "nlp": "text-green-400 border-green-400",
    "node-red": "text-orange-500 border-orange-500",
    "nodejs": "text-lime-500 border-lime-500",
    "open-source": "text-emerald-300 border-emerald-300",
    "operator": "text-violet-400 border-violet-400",
    "optimization": "text-pink-900 border-pink-900",
    "performance-analysis": "text-red-300 border-red-300",
    "prometheus": "text-orange-500 border-orange-500",
    "pypi": "text-yellow-300 border-yellow-300",
    "python": "text-green-200 border-green-200",
    "q-learning": "text-yellow-700 border-yellow-700",
    "react": "text-cyan-700 border-cyan-700",
    "react-native": "text-purple-500 border-purple-500",
    "research": "text-violet-300 border-violet-300",
    "rest": "text-blue-800 border-blue-800",
    "safety": "text-rose-400 border-rose-400",
    "sass": "text-pink-400 border-pink-400",
    "scenic": "text-cyan-500 border-cyan-500",
    "self-hosted": "text-teal-200 border-teal-200",
    "soap": "text-purple-200 border-purple-200",
    "software-quality": "text-teal-300 border-teal-300",
    "spring-boot": "text-blue-100 border-blue-100",
    "sustainability": "text-green-300 border-green-300",
    "tailwindcss": "text-blue-300 border-blue-300",
    "telegram-bot": "text-blue-700 border-blue-700",
    "tensorflow": "text-yellow-600 border-yellow-600",
    "text-analysis": "text-yellow-200 border-yellow-200",
    "trivy": "text-sky-300 border-sky-300",
    "uml": "text-pink-500 border-pink-500",
    "vrp": "text-red-800 border-red-800",
};

