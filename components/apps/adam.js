import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { PROJECTS, TAG_COLORS } from './projects-data';

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
    const project_list = PROJECTS;
    const tag_colors = TAG_COLORS;



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