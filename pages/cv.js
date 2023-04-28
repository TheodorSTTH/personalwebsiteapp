import H1 from "@/components/H1";
import Head from 'next/head'

export default function cv(x) {
    return <div className="p-24">
        <Head>
            <title>Theodor Strøm-Thrane</title>
        </Head>
        <H1>Min CV - Theodor Strøm-Thrane</H1>
        <br />
        <iframe // Tailwind Next.js Firebase Paypal DaisyUI
        src="/docs/TSTCV_proff.pdf"
        frameBorder="0"
        scrolling="auto"
        className='w-full'
        height="612"
        ></iframe>
    </div>
}