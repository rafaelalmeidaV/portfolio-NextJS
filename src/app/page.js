import Head from 'next/head'
import Image from 'next/image'
import { BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Rafael Almeida Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black px-10">
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between items-center'>
            <h1 className='text-xl text-white font-mono'>DevelopedBy</h1>
            <ul className='flex item-center'>
              <li className='text-white'>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                </li>
              <li >
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium'>Rafael Almeida Vasconcelos</h2>
            <h3 className='text-2xl py-2'>Mobile Software Engineer</h3>
            <p className='text-md py-5 leading-8'> 
               I'm a mobile software engineer. I've worked with a wide range of technologies, from native Android and iOS development to cross-platform solutions like React Native and Flutter. I'm also a big fan of the open-source community and I've contributed to some projects like React Native and React Native Firebase.              
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3'>
          <AiFillLinkedin/>
          <AiFillGithub />
          </div>
          <div className='text-9xl flex justify-center gap-16 py-3 text-sky-500'>
            <FaReact />
          </div>
        </section>
      </main>
    </div>
  )
}
