import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Adam Bouafia Portfolio - Computer Engineering Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Adam Bouafia Portfolio - Computer Engineering Student" />
            <meta name="description"
                content="Adam Bouafia's (adam-bouafia) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Adam Bouafia (adam-bouafia)" />
            <meta name="keywords"
                content="adam-bouafia, adam-bouafia's portfolio, adam-bouafia linux, ubuntu portfolio, Adam Bouafia protfolio,Adam Bouafia computer, Adam Bouafia, adam ubuntu, Adam Bouafia ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Adam Bouafia Portfolio - Computer Engineering Student" />
            <meta itemProp="description"
                content="Adam Bouafia's (adam-bouafia) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Adam Bouafia Portfolio - Computer Engineering Student" />
            <meta name="twitter:description"
                content="Adam Bouafia's (adam-bouafia) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="adam-bouafia" />
            <meta name="twitter:creator" content="adam-bouafia" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Adam Bouafia Portfolio - Computer Engineering Student" />
            <meta name="og:description"
                content="Adam Bouafia's (adam-bouafia) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://adam-bouafia.github.io/" />
            <meta name="og:site_name" content="Adam Bouafia Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
