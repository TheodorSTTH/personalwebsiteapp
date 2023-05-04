import Head from 'next/head'
import H1 from '../components/H1'
import H2 from '@/components/H2'

export default function omMeg() {
    return <div className="p-24">
        <Head>
            <title>Theodor - om meg</title>
        </Head>
        <H1>Hei, Jeg er Theodor</H1>
        <br />
        <div className='flex gap-5'>
            <a href='https://github.com/TheodorSTTH' >
                <button className="btn w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-5' width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        <title>Visit my GitHub Page</title>
                    </svg>
                    GitHub
                </button>
            </a>
            <a href='https://www.linkedin.com/in/TheodorSTTH/'>
                <button className="btn btn-primary w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-5' width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        <title>Visit my LinkedIn</title>
                    </svg>
                    LinkedIn
                </button>
            </a>
        </div>
        <div className='pt-8'>
            <p>Karakterer: 5.3 i snitt og 5.5 i snitt hos avgangsfag</p>
            <iframe // Tailwind Next.js Firebase Paypal DaisyUI
            src="/docs/TSTCV_proff.pdf"
            frameBorder="0"
            scrolling="auto"
            className='w-full'
            height="612"
            ></iframe>
        </div>
        <br />
        <H2>Tidligere prosjekter og eksperimenter</H2>
        <br />
        <p>Her er litt hobbyprosjekter, eksperimenter og mer</p>
        <p>Det er ganske mange private repos osv, men her er noen prosjekter jeg har lagd (gode og dårlige):</p>
        <br />
        <p>Page Pranker - <a href='https://chrome.google.com/webstore/detail/page-pranker/anebchkompjfnocaghjdhkkkjfhbpake/related?hl=no' className='link link-primary'>Chrome Utvidelse</a> - Chrome Utvidelse som lar deg tulle venners/fienders datamaskinen, utviklet på 1 uke, ca. 100 brukere.</p>
        <p>Photosolve - <a href='https://play.google.com/store/search?q=photosolve&c=apps' className='link link-primary'>Google Play Store</a> - Ta bilde av spørsmål og få svar med GPT-3, utviklet på 1 uke, 260 nedlastinger, funker ikke på alle skjermstørrelser.</p>
        <p>Farge Album - <a href='https://www.fargealbum.com/' className='link link-primary'>Nettside</a> - Foto Retusjering for gamle fotoalbum med AI, Under utvikling</p>
        <p>Nettbutikk - <a href='https://fantasticfruits.vercel.app/' className='link link-primary'>Nettside</a> - Nettbutikk som bruker Paypal, lagde den på tirsdag, betaling funker ikke fra domene siden jeg er under 18 år men funker på localhost</p>
        <p>Bakkacoin - <a href='https://bakkacoin.on.fleek.co/' className='link link-primary'>Demo Nettside</a> - Kryptovaluta for Elvebakken VGS, Hjalp utvikle, er noen andre som drifter det nå</p>
        <br />
        <p>Jeg driver også og lærer meg maskinlæring med Python, men jeg har kun denne tutorial appen <a href='https://huggingface.co/spaces/TheodorSTTH/dogsVScats' className='link link-primary'>Hund eller Katt?</a></p>
    </div>
}