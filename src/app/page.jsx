'use client'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { FaGooglePlay } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/router'
import './page.css';
import { SiWhatsapp } from 'react-icons/si'


export default function Home() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function handleSubmit(e) {

    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email inválido")
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    }

    emailjs.send("service_nqe0lqi", 'template_87mjga7', templateParams, 'N4oU6ebRwvzZM1RfY')
      .then((result) => {
        alert("Mensagem enviada com sucesso!")
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        alert("Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde")
        console.log(err.text)
      }
      )

  }


  return (


    <div className=''>
      <div className=' inset-0 overflow-x-hidden'>        
      <div className='jumbo absolute -inset-[10px] opacity-50'>
      </div>

          <Head>
            <title>Rafael Almeida Dev</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>


          <main className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 z-50'>
            <div className="flex justify-evenly pt-28">
              <div >
                <div><h2 className='text-5xl text-neutral-50 font-bold '>Rafael Almeida</h2></div>
                <h3 className='text-2xl py-3'>Software Engineer</h3>
                <p className='text-neutral-50 text-opacity-40'>
                  I build exceptional and accessible digital
                  <br />
                  experiences for the web and Mobile.
                </p>
                <div className='flex justify-start gap-6 py-3 text-sky-500'>
                  <Image
                    src={'/react-3.png'}
                    className="h-6 flex"
                    width={24}
                    height={24}
                  />
                  <SiJavascript className='text-yellow-400 bg-black mt-1 ml-1' />
                  <SiTypescript className='text-blue-600 bg-white mt-1 ml-1' />
                  <Image
                    src={'/Python-logo-notext.svg.png'}
                    className="h-6 flex"
                    width={24}
                    height={24}

                  />
                </div>

              </div>
              <div>
                <div className='max-w-lg text-neutral-50 text-opacity-40'>

                  <h1 >
                    At 20, I am a <span class=" text-white">software engineering</span> student with expertise in
                    <span class=" text-white"> React</span>, seeking opportunities to apply my knowledge in <span class=" text-white">software development</span>.
                    <br /><br />Driven by a <span class=" text-white">strong desire</span> to learn and grow, I believe challenges are opportunities to acquire new skills. Committed to contributing significantly to <span class=" text-white">software projects</span>, I aim to refine my skills as an <span class=" text-opacity-80">engineer</span> and <span class=" text-white">educator</span>.
                    <br /><br />Confident in my ability to add value to a team with <span class=" text-white">dedication</span>, a <span class=" text-white ">passion</span> for technology, and effective teaching, I look forward to embracing new challenges and building a <span class=" text-white ">successful career</span> in <span class=" text-white">software engineering</span>.
                  </h1>

                </div>

                <ul className='py-24'>
                  <li>
                    <div>
                      <Link href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:7bd15cd3-d938-4ee0-b9f1-a174118db7e8">
                        <span className='font-bold text-white hover:border-b-2 hover:border-teal-400 max-w-min'>
                          Curriculum ➝
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className='max-w-lg hover:bg-white hover:bg-opacity-10 hover:shadow-md hover:shadow-[#0f131f] min-h rounded-lg transition-all hover:text-teal-300 hover:delay-150 mt-5'>
                    <Link href="https://play.google.com/store/apps/details?id=com.anonymous.mobileescola">
                      <div className='flex'>
                        <div className=' ml-4 mt-4'>
                          <div className=' border-[2px] border-stone-700 rounded-sm'>
                            <Image
                              src={'/mageGpt.png'}
                              width={110}
                              height={70}
                              style={{ borderRadius: '10px' }}
                            />
                          </div>
                        </div>
                        <div className='ml-4 mt-4 '>
                          <h1>MAGE-GPT: Gerador de RPG</h1>
                          <p className='text-sm text-white text-opacity-50 max-w-xs'>
                            Embark on a journey into a world of Dungeons & Dragons 5e adventures with the assistance of artificial intelligence.                    </p>
                          <div className='flex'>
                            <div className='bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> React Native</div>
                            <div className=' bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> TypeScript </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </li>

                  <li className='max-w-lg hover:bg-white hover:bg-opacity-10 hover:shadow-md hover:shadow-[#0f131f] min-h rounded-lg transition-all hover:text-teal-300 hover:delay-150 mt-5'>
                    <Link href="https://manga-app-mou-prd.vercel.app/">
                      <div className='flex'>
                        <div className=' ml-4 mt-4'>
                          <div className=' border-[2px] border-stone-700 rounded-sm'>
                            <Image
                              src={'/mangaSite.png'}
                              width={110}
                              height={70}
                              style={{ borderRadius: '10px' }}
                            />
                          </div>
                        </div>
                        <div className='ml-4 mt-4 '>
                          <h1>Manga Reader</h1>
                          <p className='text-sm text-white text-opacity-50 max-w-xs'>
                            Manga Reader is a web application designed to provide users with a convenient and immersive reading experience on their smartphones.
                          </p>
                          <div className='flex'>
                            <div className='bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> Next Js </div>
                            <div className=' bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> TypeScript </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </li>

                  <li className='max-w-lg hover:bg-white hover:bg-opacity-10 hover:shadow-md hover:shadow-[#0f131f] min-h rounded-lg transition-all hover:text-teal-300 hover:delay-150 mt-5'>
                    <Link href="https://github.com/rafaelalmeidaV">
                      <div className='flex'>
                        <div className=' ml-4 mt-4'>
                          <div className=' border-[2px] border-stone-700 rounded-sm'>
                            <Image
                              src={'/noteroom.png'}
                              width={110}
                              height={70}
                              style={{ borderRadius: '10px' }}
                            />
                          </div>
                        </div>
                        <div className='ml-4 mt-4 '>
                          <h1>Noteroom</h1>
                          <p className='text-sm text-white text-opacity-50 max-w-xs'>
                            Noteroom is a mobile application designed to provide users with a convenient and immersive reading experience on their smartphones.
                          </p>
                          <div className='flex'>
                            <div className='bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> React Native </div>
                            <div className=' bg-teal-900 text-teal-400 px-2 my-2 rounded-lg text-xs mx-1'> JavaScript </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </main>

          <section id='contact'>
            <div className="container">
              <h1 className="title text-xl">Contact</h1>

              <form className="form" onSubmit={handleSubmit} href="contact">
                <input
                  className="input text-cyan-950"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />

                <input
                  className="input text-cyan-950"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <textarea
                  className="textarea text-cyan-950"
                  placeholder="Digite sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />

                <input className="button cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md " type="submit" value="Send" />
              </form>
            </div>
          </section>
        </div>
      </div>
    
  )
}

