import Image from 'next/image'
import H1 from '../components/H1'
import H2 from '@/components/H2'
import Anchor from '@/components/Anchor'
import MyStack from '@/components/MyStack'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="flex flex-col items-left justify-start gap-8 md:p-24 p-8 bg-base-100">
      <Head>
        <title>Theodor</title>
      </Head>
      <H1>Hey 👋 I am Theodor</H1>
      <p>I am a fullstack developer located in <Anchor body='Oslo, Norway' href='https://goo.gl/maps/P4Xd2ajVkqvfqwHaA' title='Show on Google Maps'/>, i love building cool projects and i am currently learning ML (Machine Learning)</p>
      {/* <p>View my portfolio <Anchor href='/portfolio' title='Click to see projects' body='here'/></p> */}
      <div className='flex gap-4'>
        <a href='mailto:theodor.learn@gmail.com'>
          <button className="btn btn-accent w-fit">Send me an Email 🤩</button>
        </a>
        <a href='https://www.linkedin.com/in/theodor-str%C3%B8m-thrane-5343a0224/'>
          <button className="btn btn-primary w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-5' width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              <title>Visit my LinkedIn</title>
            </svg>
            Reach me on LinkedIn
          </button>
        </a>
        <a href='https://www.linkedin.com/in/theodor-str%C3%B8m-thrane-5343a0224/'>
          <button className="btn w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-5' width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              <title>Visit my GitHub Page</title>
            </svg>
            Reach me on GitHub
          </button>
        </a>
      </div>
      {/* <MyStack /> */}
      
    </main>
  )
}
