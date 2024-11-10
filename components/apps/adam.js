import React, { Component } from 'react';
import ReactGA from 'react-ga4';

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
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
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
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="About Adam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="adam' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="adam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="adam' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="adam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
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
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Adam Bouafia Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Adam Bouafia</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">DevOps Junior & Software Engineering Student!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Master's Student</span> in Global Software Engineering European Master program. I've gained hands-on experience in mobile development with Flutter through internships, such as at <u className=' cursor-pointer '><a href="https://makeithappen.com/" target={"_blank"}>Make it Happen</a></u> and working on multiple projects like <strong>Fiberchat</strong> and <strong>Weather App</strong>.</li>
                <li className=" mt-3 list-building"> I enjoy building awesome software solutions that solve practical problems, especially those involving real-time interactions and IoT systems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, exploring IoT devices, or learning more about DevOps tools and Kubernetes.</li>
                <li className=" mt-3 list-star"> And I also have an interest in Cloud Computing, DevOps Automation, and Mobile Security!</li>
            </ul>
        </>
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
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">DevOps, Flutter for mobile development, and Kubernetes for cloud orchestration!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="adam javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="adam c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="adam python" />
                        <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="adam dart" />
                        <img className="m-1" src="https://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="adam linux" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="adam git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Docker-%232496ED?style=flat&logo=docker&logoColor=ffffff" alt="adam docker" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="adam next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="adam react" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="adam flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="adam tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/-Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=ffffff" alt="adam kubernetes" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="adam node.js" className="m-1" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
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
            link: "https://github.com/adam-bouafia/L-Aquila-Smart-Roads",
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
            link: "https://github.com/adam-bouafia/AI-Heuristics-Q-Learning-Projects",
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


    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600",
        "iot": "teal-400",
        "node-red": "orange-500",
        "influxdb": "red-500",
        "telegram-bot": "blue-700",
        "docker": "blue-200",
        "mqtt": "gray-400",
        "nlp": "green-400",
        "text-analysis": "yellow-200",
        "mde": "blue-100",
        "uml": "pink-500",
        "eclipse": "gray-500",
        "emf": "red-700",
        "ai": "indigo-600",
        "heuristics": "orange-600",
        "q-learning": "yellow-700",
        "alpha-beta": "purple-700",
        "software-quality": "teal-300",
        "performance-analysis": "red-300",
        "soap": "purple-200",
        "rest": "blue-800",
        "apache-cxf": "pink-800",
        "3d-modeling": "green-800",
        "scenic": "cyan-500",
        "cyber-physical-systems": "blue-900",
        "machine-learning": "yellow-800",
        "data-analysis": "gray-700",
        "blog": "orange-200",
        "optimization": "pink-900",
        "vrp": "red-800",
        "milp": "green-900",
        "spring-boot": "blue-100",
        "react": "cyan-700",
        "microservices": "purple-900",
        "eureka": "yellow-900"
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
                                            className={`px-2 py-1 mr-2 mt-1 rounded-full border text-xs ${tag_colors[domain]}`}
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