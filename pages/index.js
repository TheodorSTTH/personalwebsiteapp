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
          <button className="btn btn-primary w-fit">Send me an Email 🤩</button>
        </a>
        <a href='https://www.linkedin.com/in/theodor-str%C3%B8m-thrane-5343a0224/'>
          <button className="btn btn-ghost w-fit">Reach me on LinkedIn</button>
        </a>
      </div>
      <MyStack />
      <iframe
      src="/docs/TSTCV_proff.pdf"
      frameBorder="0"
      scrolling="auto"
      className='w-full'
      height="598"
      ></iframe>
    </main>
  )
}
