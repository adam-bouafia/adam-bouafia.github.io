import React, { useState } from 'react';

const ARTICLES = [
    {
        id: "secure-aks-platform",
        title: "Building a Secure AKS Platform, From the Container Image to the Network Policy",
        date: "November 2026",
        summary: "A hardened image, Terraform-built Azure foundation, workload identity with no password anywhere, zero-trust NetworkPolicy, Kyverno guardrails, and a vulnerability loop - every control applied to a real, running AKS cluster and verified live.",
        tags: ["Azure", "Kubernetes", "DevSecOps", "Terraform"],
        file: "./files/articles/building-a-secure-aks-platform.html",
    },
];

export function Articles() {
    const [open, setOpen] = useState(null);

    if (open) {
        return (
            <div className="w-full h-full flex flex-col bg-fd-cool-grey text-white select-none">
                <div className="flex items-center justify-between px-3 py-1.5 bg-fd-window-title border-b border-black border-opacity-40 text-sm">
                    <button onClick={() => setOpen(null)} className="px-2 py-0.5 rounded hover:bg-white hover:bg-opacity-10 outline-none">
                        &larr; Back
                    </button>
                    <span className="truncate mx-2 font-medium">{open.title}</span>
                    <a href={open.file} target="_blank" rel="noreferrer" className="px-2 py-0.5 rounded hover:bg-white hover:bg-opacity-10 whitespace-nowrap">
                        Open in new tab
                    </a>
                </div>
                <iframe className="flex-grow w-full bg-white" src={open.file} title={open.title} frameBorder="0"></iframe>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col bg-fd-cool-grey text-white select-none overflow-y-auto windowMainScreen">
            <div className="px-5 pt-4 pb-2 text-lg font-medium">Articles</div>
            <div className="px-5 pb-3 text-xs text-gray-400">Click an article to read it.</div>
            <div className="flex flex-wrap justify-start px-3">
                {ARTICLES.map((post) => (
                    <div
                        key={post.id}
                        tabIndex={0}
                        onClick={() => setOpen(post)}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpen(post); }}
                        className="m-2 p-3 w-72 flex items-start rounded border border-white border-opacity-10 hover:bg-white hover:bg-opacity-10 focus:bg-fd-blue focus:bg-opacity-40 outline-none cursor-pointer"
                    >
                        <img className="w-12 h-12 flex-shrink-0" src="./themes/Adwaita/apps/articles.svg" alt="" />
                        <div className="ml-3 min-w-0">
                            <div className="text-sm font-bold leading-tight">{post.title}</div>
                            <div className="text-xs text-fdt-cyan mt-1">{post.date}</div>
                            <div className="text-xs text-gray-400 mt-1">{post.summary}</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-fd-blue bg-opacity-30 text-fdt-cyan">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articles;

export const displayArticles = () => {
    return <Articles />;
}
