import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { CATEGORIES, FEATURED, PROJECTS, TAG_COLORS } from './projects-data';

// The Projects app, laid out like GNOME Software on Fedora Workstation:
// a featured carousel, category filters, a grid of project tiles and a
// details page with screenshots, links and what each project is built with.

const CAT = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

// Icon glyphs on a 24 x 24 grid, drawn as white strokes.
const circ = (x, y, r) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
const box = (x, y, w, h, r) => `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`;
const GLYPHS = {
    cloud: "M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.6 4.5 4.5 0 0 0 7 18.5z",
    leaf: "M5 19C5 10.5 10.5 5 19 5c0 8.5-5.5 14-14 14zM5 19l7.5-7.5",
    spark: "M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9zM18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
    phone: box(7, 3, 10, 18, 2) + "M10.5 18h3",
    globe: circ(12, 12, 8.5) + "M3.5 12h17M12 3.5c2.8 3 2.8 14 0 17M12 3.5c-2.8 3-2.8 14 0 17",
    chip: box(7, 7, 10, 10, 1.5) + "M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5",
    wrench: "M14.7 6.3a4 4 0 0 0-5.3 5.3L3.5 17.5l3 3 5.9-5.9a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z",
    cap: "M2.5 9.5L12 5l9.5 4.5L12 14zM6.5 11.5V16c3 2.4 8 2.4 11 0v-4.5M21.5 9.5v5",
    rack: box(5.5, 3, 13, 18, 1.5) + "M5.5 8.5h13M5.5 14h13M8.5 5.75h2M8.5 11.25h2M8.5 16.75h2M15 5.75h.5M15 11.25h.5M15 16.75h.5",
    shield: "M12 3l7.5 2.8v5.7c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V5.8zM8.8 12.2l2.2 2.2 4.4-4.6",
    book: "M4 5h5.5A2.5 2.5 0 0 1 12 7.5V20a2 2 0 0 0-2-2H4zM20 5h-5.5A2.5 2.5 0 0 0 12 7.5V20a2 2 0 0 1 2-2h6z",
    search: circ(10.5, 10.5, 6) + "M15 15l5.5 5.5",
    bell: "M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.8 1.8H4.7zM10 20.5a2 2 0 0 0 4 0",
    calendar: box(3.5, 5, 17, 15.5, 2) + "M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2M8 17h2",
    archive: box(3, 4, 18, 5, 1) + "M5 9v10.5h14V9M10 13h4",
    eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" + circ(12, 12, 3),
    monitor: box(3, 4, 18, 12.5, 2) + "M8.5 20.5h7M12 16.5v4",
    chart: "M4 4v16h16M8.5 16v-5M12.5 16V7.5M16.5 16v-3.5",
    bolt: "M13.5 2.5L5 13.5h6.5l-1 8 8.5-11h-6.5z",
    branch: circ(6.5, 5.5, 2) + circ(6.5, 18.5, 2) + circ(17.5, 7.5, 2) + "M6.5 7.5v9M17.5 9.5c0 4.5-6.5 3.5-10 7",
    pulse: "M3 12h4l2.5-6 4.5 12 2.5-6H21",
    home: "M3.5 11L12 4l8.5 7M6 9.5V20h12V9.5M10 20v-5h4v5",
    wheel: circ(12, 12, 7.5) + circ(12, 12, 2.5) + "M12 4.5v5M12 14.5v5M4.5 12h5M14.5 12h5M6.7 6.7l3.5 3.5M13.8 13.8l3.5 3.5M6.7 17.3l3.5-3.5M13.8 10.2l3.5-3.5",
};
const CAT_GLYPH = { cloud: "cloud", green: "leaf", ai: "spark", mobile: "phone", web: "globe", iot: "chip", tools: "wrench", study: "cap" };

const clamp = (lines) => ({ display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical", overflow: "hidden" });

function ProjectIcon({ project, size = 48 }) {
    const uid = useId().replace(/:/g, "");
    const cat = CAT[project.cats[0]];
    const glyph = GLYPHS[project.glyph || CAT_GLYPH[cat.id]];
    return (
        <svg viewBox="0 0 64 64" width={size} height={size} className="flex-shrink-0" aria-hidden="true">
            <defs>
                <linearGradient id={`pg${uid}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={cat.from} />
                    <stop offset="1" stopColor={cat.to} />
                </linearGradient>
            </defs>
            <rect x="5" y="8" width="54" height="52" rx="12" fill="#000" opacity="0.25" />
            <rect x="5" y="5" width="54" height="52" rx="12" fill={cat.to} />
            <rect x="5" y="4" width="54" height="50" rx="12" fill={`url(#pg${uid})`} />
            <g transform="translate(14 11) scale(1.5)" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={glyph} />
            </g>
        </svg>
    );
}

function Badge({ children }) {
    return <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-fd-blue bg-opacity-30 text-fdt-cyan whitespace-nowrap">{children}</span>;
}

function Tile({ project, onOpen }) {
    return (
        <button
            onClick={() => onOpen(project.id)}
            className="text-left flex items-start gap-3 p-3 rounded-xl bg-white bg-opacity-5 border border-white border-opacity-5 hover:bg-opacity-10 focus:bg-opacity-10 focus:border-fdb-blue outline-none transition duration-150"
        >
            <ProjectIcon project={project} size={52} />
            <div className="min-w-0 flex-grow">
                <div className="text-sm font-semibold truncate">{project.title}</div>
                <div className="text-xs text-gray-400 mt-0.5" style={clamp(2)}>
                    {project.tagline || project.summary}
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-gray-500">
                    <span>{project.date}</span>
                    {project.badges[0] && <Badge>{project.badges[0]}</Badge>}
                    {project.shots.length > 0 && (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" aria-label="has screenshots">
                            <path d={box(3, 6, 18, 13, 2) + circ(12, 12.5, 3.2) + "M8.5 6l1.5-2.5h4L15.5 6"} />
                        </svg>
                    )}
                </div>
            </div>
        </button>
    );
}

function Featured({ items, onOpen }) {
    const [i, setI] = useState(0);
    const [hover, setHover] = useState(false);
    useEffect(() => {
        if (hover) return;
        const t = setInterval(() => setI((n) => (n + 1) % items.length), 7000);
        return () => clearInterval(t);
    }, [hover, items.length]);
    const p = items[i];
    const cat = CAT[p.cats[0]];
    return (
        <div
            className="relative rounded-2xl overflow-hidden mb-5 select-none"
            style={{ height: 230, background: `linear-gradient(120deg, ${cat.to} 0%, ${cat.to}cc 40%, #1e1e1e 100%)` }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="absolute inset-0 flex">
                <div className="flex flex-col justify-center pl-8 pr-4 w-1/2 min-w-0 z-10">
                    <div className="text-[11px] uppercase tracking-widest text-white text-opacity-70 font-semibold">Featured</div>
                    <div className="flex items-center gap-3 mt-2">
                        <ProjectIcon project={p} size={56} />
                        <div className="min-w-0">
                            <div className="text-2xl font-bold leading-tight truncate">{p.title}</div>
                            <div className="text-sm text-white text-opacity-80 truncate">{p.tagline}</div>
                        </div>
                    </div>
                    <p className="text-xs text-white text-opacity-80 mt-3" style={clamp(3)}>
                        {p.summary}
                    </p>
                    <div className="mt-3">
                        <button onClick={() => onOpen(p.id)} className="px-4 py-1.5 rounded-full bg-white text-gray-900 text-xs font-bold hover:bg-gray-200 outline-none">
                            Details
                        </button>
                    </div>
                </div>
                <div className="relative w-1/2">
                    {p.shots.length > 0 ? (
                        p.portrait ? (
                            <div className="absolute inset-y-4 right-6 flex gap-3">
                                {p.shots.slice(0, 3).map((s) => (
                                    <img key={s} src={s} alt="" className="h-full rounded-xl shadow-2xl border border-white border-opacity-20 object-cover" />
                                ))}
                            </div>
                        ) : (
                            <img src={p.shots[0]} alt="" className="absolute top-6 left-2 object-cover object-left-top rounded-lg shadow-2xl border border-white border-opacity-20" style={{ width: "calc(100% - 2rem)", height: "calc(100% - 3rem)" }} />
                        )
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-90">
                            <ProjectIcon project={p} size={150} />
                        </div>
                    )}
                </div>
            </div>
            <button aria-label="Previous" onClick={() => setI((i - 1 + items.length) % items.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 flex items-center justify-center outline-none z-20">
                &#8249;
            </button>
            <button aria-label="Next" onClick={() => setI((i + 1) % items.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-40 hover:bg-opacity-60 flex items-center justify-center outline-none z-20">
                &#8250;
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {items.map((x, n) => (
                    <button key={x.id} aria-label={x.title} onClick={() => setI(n)} className={`h-1.5 rounded-full transition-all outline-none ${n === i ? "w-5 bg-white" : "w-1.5 bg-white bg-opacity-40"}`} />
                ))}
            </div>
        </div>
    );
}

function Gallery({ project }) {
    const [i, setI] = useState(0);
    const shots = project.shots;
    if (!shots.length) return null;
    if (project.portrait) {
        return (
            <div className="flex gap-4 justify-center bg-black bg-opacity-25 rounded-2xl p-4 overflow-x-auto">
                {shots.map((s) => (
                    <img key={s} src={s} alt={`${project.title} screenshot`} loading="lazy" className="h-80 rounded-xl border border-white border-opacity-10" />
                ))}
            </div>
        );
    }
    return (
        <div>
            <div className="relative bg-black bg-opacity-25 rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: 340 }}>
                <img src={shots[i]} alt={`${project.title} screenshot ${i + 1}`} className="max-h-full max-w-full object-contain" />
                {shots.length > 1 && (
                    <>
                        <button aria-label="Previous screenshot" onClick={() => setI((i - 1 + shots.length) % shots.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center outline-none text-lg">
                            &#8249;
                        </button>
                        <button aria-label="Next screenshot" onClick={() => setI((i + 1) % shots.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center outline-none text-lg">
                            &#8250;
                        </button>
                    </>
                )}
            </div>
            {shots.length > 1 && (
                <div className="flex gap-2 mt-2 justify-center">
                    {shots.map((s, n) => (
                        <button key={s} onClick={() => setI(n)} className={`w-20 h-12 rounded-md overflow-hidden border-2 outline-none ${n === i ? "border-fdb-blue" : "border-transparent opacity-60 hover:opacity-100"}`}>
                            <img src={s} alt="" loading="lazy" className="w-full h-full object-cover object-left-top" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function LinkButton({ href, children, primary }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap outline-none transition duration-150 ${primary ? "bg-fd-blue hover:bg-fd-lite-blue text-white" : "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"}`}
        >
            {children}
        </a>
    );
}

function Details({ project, onOpen }) {
    const cat = CAT[project.cats[0]];
    const more = PROJECTS.filter((p) => p.id !== project.id && p.cats[0] === cat.id).slice(0, 4);
    const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const source = project.repo ? { value: project.repo.includes("/pull/") ? "Pull request" : "GitHub", sub: host(project.repo).replace("github.com/", "") } : { value: "Live site", sub: project.live ? host(project.live) : "" };
    return (
        <div className="px-6 py-5 max-w-5xl mx-auto w-full">
            <div className="flex flex-wrap items-start gap-5">
                <ProjectIcon project={project} size={96} />
                <div className="flex-grow min-w-0" style={{ flexBasis: 260 }}>
                    <div className="text-2xl font-bold leading-tight">{project.title}</div>
                    {project.tagline && <div className="text-sm text-gray-300 mt-0.5">{project.tagline}</div>}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-400">
                        <span>{project.date}</span>
                        {project.cats.map((c) => (
                            <span key={c} className="flex items-center gap-1">
                                <i className="inline-block w-2 h-2 rounded-full" style={{ background: CAT[c].from }} />
                                {CAT[c].label}
                            </span>
                        ))}
                        {project.badges.map((b) => (
                            <Badge key={b}>{b}</Badge>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.live && <LinkButton href={project.live} primary>Open site</LinkButton>}
                    {project.repo && <LinkButton href={project.repo} primary={!project.live}>{project.repo.includes("/pull/") ? "View pull request" : project.live ? "Source on GitHub" : "View on GitHub"}</LinkButton>}
                    {project.docs && <LinkButton href={project.docs}>Docs</LinkButton>}
                    {project.extra.map((x) => (
                        <LinkButton key={x.url} href={x.url}>
                            {x.label}
                        </LinkButton>
                    ))}
                </div>
            </div>

            {project.shots.length > 0 && (
                <div className="mt-5">
                    <Gallery key={project.id} project={project} />
                </div>
            )}

            <p className="text-sm leading-relaxed text-gray-200 mt-5 select-text">{project.text}</p>

            <div className="grid gap-3 mt-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                {[
                    { label: "Date", value: project.date, sub: "when it was built" },
                    { label: "Category", value: cat.label, sub: project.cats.slice(1).map((c) => CAT[c].label).join(", ") || "one category" },
                    { label: "Source", value: source.value, sub: source.sub },
                ].map((t) => (
                    <div key={t.label} className="rounded-xl bg-white bg-opacity-5 border border-white border-opacity-5 px-4 py-3">
                        <div className="text-[11px] uppercase tracking-wider text-gray-400">{t.label}</div>
                        <div className="text-base font-semibold mt-0.5 truncate">{t.value}</div>
                        <div className="text-xs text-gray-400 truncate">{t.sub}</div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <div className="text-sm font-semibold mb-2">Built with</div>
                <div className="flex flex-wrap gap-2">
                    {project.domains.map((d) => (
                        <span key={d} className={`px-2 py-0.5 rounded-full border text-xs ${TAG_COLORS[d] || "text-gray-300 border-gray-300"}`}>
                            {d}
                        </span>
                    ))}
                </div>
            </div>

            {more.length > 0 && (
                <div className="mt-6">
                    <div className="text-sm font-semibold mb-2">More in {cat.label}</div>
                    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))" }}>
                        {more.map((p) => (
                            <Tile key={p.id} project={p} onOpen={onOpen} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export function Projects() {
    const [query, setQuery] = useState("");
    const [cat, setCat] = useState("all");
    const [open, setOpen] = useState(null);
    const scroller = useRef(null);

    const openProject = (id) => {
        setOpen(id);
        if (scroller.current) scroller.current.scrollTop = 0;
    };
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && open) setOpen(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const q = query.trim().toLowerCase();
    const list = useMemo(
        () =>
            PROJECTS.filter((p) => cat === "all" || p.cats.includes(cat)).filter(
                (p) => !q || `${p.name} ${p.text} ${p.domains.join(" ")} ${p.badges.join(" ")}`.toLowerCase().includes(q),
            ),
        [cat, q],
    );
    const featured = FEATURED.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
    const project = open && PROJECTS.find((p) => p.id === open);

    return (
        <div className="w-full h-full flex flex-col bg-fd-cool-grey text-white select-none">
            <div className="flex items-center gap-3 px-3 h-12 flex-shrink-0 bg-fd-window-title border-b border-black border-opacity-40">
                <div className="w-24">
                    {project && (
                        <button onClick={() => setOpen(null)} className="px-3 py-1 rounded-md hover:bg-white hover:bg-opacity-10 text-sm outline-none" aria-label="Back">
                            &larr; Back
                        </button>
                    )}
                </div>
                <div className="flex-grow flex justify-center">
                    <label className="flex items-center gap-2 w-full max-w-sm h-8 px-3 rounded-lg bg-white bg-opacity-10 focus-within:ring-2 focus-within:ring-blue-400">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
                            <path d={GLYPHS.search} />
                        </svg>
                        <input
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setOpen(null);
                            }}
                            placeholder={`Search ${PROJECTS.length} projects`}
                            className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
                            spellCheck="false"
                        />
                    </label>
                </div>
                <div className="w-24 text-right text-xs text-gray-400">{PROJECTS.length} projects</div>
            </div>

            <div ref={scroller} className="flex-grow overflow-y-auto windowMainScreen">
                {project ? (
                    <Details project={project} onOpen={openProject} />
                ) : (
                    <div className="px-6 py-5 max-w-5xl mx-auto w-full">
                        {!q && cat === "all" && <Featured items={featured} onOpen={openProject} />}

                        <div className="flex flex-wrap gap-2 mb-4">
                            {[{ id: "all", label: "All" }, ...CATEGORIES].map((c) => {
                                const n = c.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(c.id)).length;
                                return (
                                    <button
                                        key={c.id}
                                        onClick={() => setCat(c.id)}
                                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold outline-none transition duration-150 ${cat === c.id ? "bg-fd-blue text-white" : "bg-white bg-opacity-10 hover:bg-opacity-20 text-gray-200"}`}
                                    >
                                        {c.from && <i className="inline-block w-2 h-2 rounded-full" style={{ background: c.from }} />}
                                        {c.label}
                                        <span className="opacity-60">{n}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex items-baseline justify-between mb-3">
                            <div className="text-lg font-bold">{q ? `Results for "${query.trim()}"` : cat === "all" ? "All projects" : CAT[cat].label}</div>
                            <div className="text-xs text-gray-400">
                                {list.length} project{list.length === 1 ? "" : "s"}, newest first
                            </div>
                        </div>
                        {list.length ? (
                            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
                                {list.map((p) => (
                                    <Tile key={p.id} project={p} onOpen={openProject} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-sm text-gray-400 py-10 text-center">No project matches that search.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;

export const displayProjects = () => {
    return <Projects />;
};
