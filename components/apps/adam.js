import React, { Component } from 'react';
import ReactGA from 'react-ga4';

// Nav order is the display order of the sections.
const NAV_ITEMS = [
    { id: "about", label: "About Me", icon: "about.svg", alt: "about adam" },
    { id: "resume", label: "Resume", icon: "download.svg", alt: "adam's resume" },
    { id: "education", label: "Education", icon: "education.svg", alt: "adam's education" },
    { id: "skills", label: "Skills", icon: "skills.svg", alt: "adam's skills" },
    { id: "projects", label: "Projects", icon: "projects.svg", alt: "adam's projects" },
];

export class AboutAdam extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "resume": <Resume />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                {NAV_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        id={item.id}
                        tabIndex="0"
                        onFocus={this.changeScreen}
                        className={(this.state.active_screen === item.id ? " bg-fd-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}
                    >
                        <img className=" w-3 md:w-4" alt={item.alt} src={`./themes/Adwaita/status/${item.icon}`} />
                        <span className=" ml-1 md:ml-2 text-gray-50 ">{item.label}</span>
                    </div>
                ))}
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-fd-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-fd-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-fd-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-fd-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAdam;

export const displayAboutAdam = () => {
    return <AboutAdam />;
}

function About() {
    return (
        <>
            {/* Fixed square + overflow-hidden so the photo is actually clipped to the
                circle; object-cover keeps it undistorted if the source is not square. */}
            <div className="w-20 h-20 md:w-28 md:h-28 my-4 bg-white rounded-full overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src="./images/logos/bitmoji.png" alt="Adam Bouafia" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Adam Bouafia</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-fdt-cyan font-bold">Cloud &amp; DevOps Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc"><span className=" font-medium">MSc graduate in Computer Science</span> (Double Degree: <strong>VU Amsterdam</strong> &amp; <strong>Università dell'Aquila</strong>) with a specialisation in Software Engineering and Green IT.</li>
                <li className=" mt-3 list-building"> Currently focused on <strong>Cloud and DevOps</strong>, with hands-on experience in Azure, Kubernetes and CI/CD pipelines. Built production infrastructure using Infrastructure as Code (<strong>Bicep</strong>), <strong>Azure DevOps</strong> and <strong>GitHub Actions</strong>.</li>
                <li className=" mt-3 list-star"> Currently working through the Linux Foundation <strong className="text-fdt-cyan">Advanced Cloud Engineer IT Professional Program</strong>, an eight-part track covering containers, Kubernetes, observability, logging, service mesh and Helm, and preparing for the <strong>CKA</strong> exam.</li>
                <li className=" mt-3 list-time"> Open source contributor: <strong>Greenmining</strong> (PyPI library for Green IT), <strong>CO2 Consumption Monitor</strong> (GNOME extension) and <strong>LCT</strong> (LLM benchmarking tool).</li>
                <li className=" mt-3 list-arrow"> Hackathon winner (Green Waves — TU Delft). <span className="font-medium">Open to opportunities in Cloud Engineering, DevOps and Platform Engineering.</span></li>
            </ul>
            <Program />
        </>
    )
}

// The eight products that make up the Linux Foundation Advanced Cloud Engineer
// IT Professional Program.
const PROGRAM_COURSES = [
    { code: "LFS253", name: "Containers Fundamentals", blurb: "Foundation in container technologies, images and runtimes." },
    { code: "LFS258", name: "Kubernetes Fundamentals", blurb: "Operating knowledge of Kubernetes: deploying containerised apps and manipulating resources via the API." },
    { code: "CKA", name: "Certified Kubernetes Administrator", blurb: "Certification covering the responsibilities of a Kubernetes administrator. Exam not yet taken.", highlight: true },
    { code: "LFS241", name: "Monitoring Systems and Services with Prometheus", blurb: "Prometheus features, best practices and use cases." },
    { code: "LFS242", name: "Cloud Native Logging with Fluentd and Fluent Bit", blurb: "Fluentd and Fluent Bit as log forwarders and as aggregators and processors in production." },
    { code: "LFS243", name: "Service Mesh Fundamentals", blurb: "Service mesh principles with Envoy Proxy, Linkerd, Istio, Consul and SMI." },
    { code: "LFS244", name: "Managing Kubernetes Applications with Helm", blurb: "Deep dive into Helm for packaging and managing application lifecycles on Kubernetes." },
    { code: "LFS002", name: "Advanced Cloud Engineer Program Logistics", blurb: "Program logistics: study plan, office hours and prep courses." },
];

function Program() {
    return (
        <div className="w-5/6 md:w-3/4 mt-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-600 pb-2">
                <div className="text-base md:text-lg font-bold">Advanced Cloud Engineer IT Professional Program</div>
                <div className="text-xs md:text-sm text-gray-400 md:ml-4 whitespace-nowrap">Linux Foundation · In progress</div>
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-2 leading-snug">
                A six-month Linux Foundation track. Eight products included:
            </div>
            <ul className="mt-3">
                {PROGRAM_COURSES.map((c) => (
                    <li key={c.code} className="flex items-start mt-2 leading-snug">
                        <span className={(c.highlight ? "bg-fd-blue text-white " : "bg-fd-cool-grey text-gray-300 ") + "text-xs font-bold rounded px-1.5 py-0.5 mr-2 mt-0.5 whitespace-nowrap"}>
                            {c.code}
                        </span>
                        <span className="text-sm md:text-base">
                            <span className={c.highlight ? "font-bold text-fdt-cyan" : "font-medium"}>{c.name}</span>
                            <span className="text-gray-400"> — {c.blurb}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Vrije Universiteit Amsterdam
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2024 - 2025</div>
                    <div className=" text-sm md:text-base">Global Software Engineering European Master</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Università degli Studi dell'Aquila
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - 2024</div>
                    <div className=" text-sm md:text-base">Global Software Engineering European Master</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">First Year Grade: 27.5/30</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Higher Institute of Computer Science of Mahdia
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2022</div>
                    <div className=" text-sm md:text-base">Computer Science License: Software Engineering & Information System</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Final Grade: 15.2/20</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>My areas of expertise are <strong className="text-fdt-cyan">Kubernetes, Azure, Infrastructure as Code and CI/CD automation</strong>, with a research background in Green IT and energy-aware systems.</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>In progress: <strong>CKA</strong> (Linux Foundation) and <strong>AZ-204</strong> (Microsoft Azure Developer Associate).</div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here is the stack I work with day to day:</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 mt-4 mb-6">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.title} className="mt-4">
                        <div className="text-sm md:text-base font-bold border-b border-gray-600 pb-1">{group.title}</div>
                        <div className="flex flex-wrap items-start mt-2">
                            {group.badges.map((badge) => (
                                <img key={badge[0]} className="m-1" src={badgeUrl(badge)} alt={badge[0]} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

// shields.io escaping: "-" doubles, spaces become "_".
const badgeUrl = ([label, color, logo]) => {
    const text = label.replace(/-/g, '--').replace(/ /g, '_');
    return `https://img.shields.io/badge/${text}-${color}?style=flat`
        + (logo ? `&logo=${logo}&logoColor=white` : '');
};

// Mirrors the skills section of the CV. Azure, AWS and Azure DevOps have no
// simple-icons logo available, so they render as text-only badges.
const SKILL_GROUPS = [
    {
        title: "Cloud Platforms",
        badges: [["Microsoft Azure", "0078D4", null], ["AWS", "FF9900", null], ["Google Cloud", "4285F4", "googlecloud"]],
    },
    {
        title: "Containerisation & Orchestration",
        badges: [["Kubernetes", "326CE5", "kubernetes"], ["Docker", "2496ED", "docker"], ["Helm", "0F1689", "helm"], ["Knative", "0865AD", "knative"]],
    },
    {
        title: "Infrastructure as Code",
        badges: [["Terraform", "7B42BC", "terraform"], ["Bicep", "0078D4", null], ["Ansible", "EE0000", "ansible"]],
    },
    {
        title: "CI/CD & GitOps",
        badges: [["Azure DevOps", "0078D7", null], ["GitHub Actions", "2088FF", "githubactions"], ["GitLab CI", "FC6D26", "gitlab"], ["Jenkins", "D24939", "jenkins"], ["Argo CD", "EF7B4D", "argo"]],
    },
    {
        title: "Monitoring & Logging",
        badges: [["Prometheus", "E6522C", "prometheus"], ["Grafana", "F46800", "grafana"], ["InfluxDB", "22ADF6", "influxdb"], ["Elastic Stack", "005571", "elasticsearch"]],
    },
    {
        title: "Languages & Scripting",
        badges: [["Python", "3776AB", "python"], ["Bash", "4EAA25", "gnubash"], ["Java", "ED8B00", "openjdk"], ["JavaScript", "F7DF1E", "javascript"], ["SQL", "4479A1", null]],
    },
    {
        title: "Platforms & Version Control",
        badges: [["Linux", "FCC624", "linux"], ["Fedora", "51A2DA", "fedora"], ["Red Hat", "EE0000", "redhat"], ["Git", "F05032", "git"], ["GitHub", "181717", "github"]],
    },
];

function Projects() {
    const project_list = [
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
            name: "LCT - LLM Comparative Tool with Energy Profiling",
            date: "Oct 2025",
            link: "https://github.com/adam-bouafia/LCT-LLMs-Comparative-Tool",
            description: [
                "Open-source framework evaluating 500K+ HuggingFace models across 17 algorithms with real-time energy profiling, in a dockerised CI/CD pipeline with carbon footprint analytics (tokens/joule, kg CO2).",
            ],
            domains: ["large-language-models", "energy-efficiency", "docker", "python"]
        },
        {
            name: "CO2 Consumption Monitor (GNOME Shell Extension)",
            date: "Sep 2025",
            link: "https://github.com/adam-bouafia/Gnome-Shell-CO2-Consumption-monitor-extension",
            description: [
                "Published on the GNOME Extensions store. Tracks real-time CO2 emissions from system usage, with per-application monitoring, ElectricityMaps API integration and historical data export.",
            ],
            domains: ["gnome", "javascript", "sustainability", "linux"]
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
        }
    ];


    // Full class names, not fragments - Tailwind's JIT only emits classes it
    // finds literally in the source.
    const tag_colors = {
        "3d-modeling": "text-green-800 border-green-800",
        "ai": "text-indigo-600 border-indigo-600",
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
        "eclipse": "text-gray-500 border-gray-500",
        "emf": "text-red-700 border-red-700",
        "energy-efficiency": "text-lime-400 border-lime-400",
        "eureka": "text-yellow-900 border-yellow-900",
        "experiment-runner": "text-teal-300 border-teal-300",
        "firebase": "text-red-600 border-red-600",
        "firebase auth": "text-red-400 border-red-400",
        "firestore": "text-red-500 border-red-500",
        "flutter": "text-blue-400 border-blue-400",
        "gnome": "text-slate-300 border-slate-300",
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
        "nlp": "text-green-400 border-green-400",
        "node-red": "text-orange-500 border-orange-500",
        "optimization": "text-pink-900 border-pink-900",
        "performance-analysis": "text-red-300 border-red-300",
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
        "soap": "text-purple-200 border-purple-200",
        "software-quality": "text-teal-300 border-teal-300",
        "spring-boot": "text-blue-100 border-blue-100",
        "sustainability": "text-green-300 border-green-300",
        "tailwindcss": "text-blue-300 border-blue-300",
        "telegram-bot": "text-blue-700 border-blue-700",
        "tensorflow": "text-yellow-600 border-yellow-600",
        "text-analysis": "text-yellow-200 border-yellow-200",
        "uml": "text-pink-500 border-pink-500",
        "vrp": "text-red-800 border-red-800",
    };

    return (
        <>
            <div className="font-medium text-2xl mt-2 mb-4">Projects</div>
            <div className="flex flex-col">
                {
                    project_list.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex flex-col p-4 border border-gray-50 hover:bg-opacity-5 my-2 rounded transition duration-200"
                        >
                            <div className="flex justify-between items-center">
                                <div className="text-lg font-semibold">{project.name}</div>
                                <div className="text-sm text-gray-400">{project.date}</div>
                            </div>
                            <p className="text-sm mt-1">{project.description}</p>
                            <div className="flex flex-wrap mt-2">
                                {
                                    project.domains.map((domain, idx) => (
                                        <span 
                                            key={idx} 
                                            className={`px-2 py-1 mr-2 mt-1 rounded-full border text-xs ${tag_colors[domain] || "text-gray-300 border-gray-300"}`}
                                        >
                                            {domain}
                                        </span>
                                    ))
                                }
                            </div>
                        </a>
                    ))
                }
            </div>
        </>
    );
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Adam-Bouafia-Resume.pdf" title="Adam Bouafia Resume" frameBorder="0"></iframe>
    )
}    