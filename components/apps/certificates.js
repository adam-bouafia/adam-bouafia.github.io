import React, { useState } from 'react';

const DOCUMENTS = [
    {
        id: "msc",
        title: "MSc Computer Science (joint degree)",
        issuer: "Vrije Universiteit Amsterdam",
        date: "January 2026",
        detail: "Diploma, NLQF 7 / EQF 7",
        file: "./files/certificates/msc-computer-science-vu-amsterdam.pdf",
    },
    {
        id: "lfs253",
        title: "Containers Fundamentals (LFS253)",
        issuer: "The Linux Foundation",
        date: "September 2026",
        detail: "Credential ID LF-sbgw83t8ip",
        file: "./files/certificates/lfs253-containers-fundamentals.pdf",
    },
    {
        id: "lfs158",
        title: "Introduction to Kubernetes (LFS158)",
        issuer: "The Linux Foundation",
        date: "September 2026",
        detail: "Credential ID LF-emsw55mspg",
        file: "./files/certificates/lfs158-introduction-to-kubernetes.pdf",
    },
];

export function Certificates() {
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
            <div className="px-5 pt-4 pb-2 text-lg font-medium">Certificates &amp; Diplomas</div>
            <div className="px-5 pb-3 text-xs text-gray-400">Click a document to view it.</div>
            <div className="flex flex-wrap justify-start px-3">
                {DOCUMENTS.map((doc) => (
                    <div
                        key={doc.id}
                        tabIndex={0}
                        onClick={() => setOpen(doc)}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpen(doc); }}
                        className="m-2 p-3 w-60 flex items-start rounded border border-white border-opacity-10 hover:bg-white hover:bg-opacity-10 focus:bg-fd-blue focus:bg-opacity-40 outline-none cursor-pointer"
                    >
                        <img className="w-12 h-12 flex-shrink-0" src="./themes/Adwaita/apps/certificates.svg" alt="" />
                        <div className="ml-3 min-w-0">
                            <div className="text-sm font-bold leading-tight">{doc.title}</div>
                            <div className="text-xs text-fdt-cyan mt-1">{doc.issuer}</div>
                            <div className="text-xs text-gray-400">{doc.date}</div>
                            <div className="text-xs text-gray-400 break-all">{doc.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;

export const displayCertificates = () => {
    return <Certificates />;
}
