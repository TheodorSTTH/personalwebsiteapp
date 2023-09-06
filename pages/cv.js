import Anchor from "@/components/Anchor";
import H1 from "@/components/H1";
import Head from 'next/head'

export default function cv(x) {
    return <div className="p-24 flex flex-col gap-8">
        <Head>
            <title>Theodor Strøm-Thrane</title>
        </Head>
        <H1>CV - Theodor Strøm-Thrane</H1>
        <p>Jobber som IT konsulent for <Anchor href="https://comono.no/" body="Comono"/> akuratt nå</p>
        <iframe
        src="/docs/TSTCV_proff.pdf"
        frameBorder="0"
        scrolling="auto"
        className='w-full'
        height="612"
        ></iframe>
    </div>
}