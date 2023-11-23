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

    <div >
      <Head>
        <title>Rafael Almeida Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main>
        <section className="min-h-screen px-20">
          <header className='fixed top-0 left-0 right-0 flex flex-row p-8 justify-around border-transparent bg-zinc-800 bg-opacity-75'>
            <nav className='flex flex-row justify-center' >
              <ul className='flex'>
                <li >
                  <a className='text-white px-4 py-2 rounded-md ml-8' href="#">Home</a>
                </li>
                <li >
                  <a className=' text-white px-4 py-2 rounded-md ml-8' href=" #projects" onClick={
                    () => {
                      document.getElementById('projects').scrollIntoView()
                    }}>Projects</a>
                </li>
                <li >
                  <a className=' text-white px-4 py-2 rounded-md ml-8 ' href="#experience">Experience</a>
                </li>
                <li >
                  <a className=' text-white px-4 py-2 rounded-md ml-8' href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>

          <div className='flex '>
            <div className='flex-grow text-center p-10 py-96 ml-16'>
              <h2 className='text-5xl py-2 text-teal-400 font-medium'>Rafael Almeida Vasconcelos</h2>
              <h3 className='text-2xl py-2'>Mobile Software Engineer</h3>
              <p className='py-5'>
                Im a mobile software engineer. Ive worked with a wide range of technologies
              </p>
              <div className='flex justify-center gap-6 py-1 text-sky-500'>
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

            <div className='flex flex-col justify-center gap-16 text-5xl '>
              <a href='https://www.linkedin.com/in/rafael-almeida-vasconcelos-b14629235/'><AiFillLinkedin className='cursor-pointer' /></a>
              <a href='https://wa.me/5535988329827'><SiWhatsapp /></a>
              <a href='https://github.com/rafaelalmeidaV'><AiFillGithub /></a>
            </div>
          </div>
        </section>
        <section id='projects'>
          <br />
          <div className='bg-zinc-800 py-20'>
            <h1 className="text-center text-xl mb-16">Projects</h1>
            <div className='flex flex-wrap justify-center'>
              <div className='mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                <Image
                  src={'/mageGpt.png'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='pl-4 pt-4 font-semibold'>Mage GPT gerador RPG</h4>
                  <p className='pl-4 pt-4 pr-4 text-xs text-zinc-300'>The D&D Character Generator is an AI-powered application that takes basic user inputs and provides a complete character sheet for Dungeons & Dragons (D&D) based on those inputs. This app aims to simplify the character creation process for D&D players and Dungeon Masters.</p>
                  <div className='p-4 flex flex-row'><Image src={'/react-3.png'} width={24} height={24} />  <SiTypescript className='text-blue-600 bg-white mt-1 ml-1' /></div>
                  <div><a href='https://play.google.com/store/apps/details?id=com.anonymous.mobileescola'><FaGooglePlay className='h-7 w-7 ml-4' /></a></div>
                </div>
              </div>

              <div className='mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                <Image
                  src={'/noteroom.png'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='pl-4 pt-4 font-semibold'>Noteroom</h4>
                  <p className='pl-4 pt-4 pr-4 text-xs text-zinc-300'>Noteroom is a mobile application designed to provide users with a convenient and immersive reading experience on their smartphones. It serves as a digital book platform, allowing users to access, read, and manage a wide variety of books in digital format.</p>
                  <div className='p-4 flex flex-row'><Image src={'/react-3.png'} width={24} height={24} />  <SiJavascript className='text-yellow-400 bg-black mt-1 ml-1' /></div>
                  <div><a href='https://github.com/rafaelalmeidaV'><AiFillGithub className='h-8 w-8 ml-4' /></a></div>
                </div>
              </div>

              <div className='mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                <Image
                  src={'/pomodoro-timer.jpg'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='pl-4 pt-4 font-semibold'>Py Pomodoro</h4>
                  <p className='pl-4 pt-4 pr-4 text-xs text-zinc-300'>PyPomodoro is a Python-based Pomodoro timer application designed to help users boost productivity and manage their time effectively. It follows the Pomodoro Technique, a time management method that encourages work intervals.</p>
                  <div className='p-4 flex flex-row ml-1'><Image src={'/Python-logo-notext.svg.png'} width={24} height={24} />  </div>
                  <div><a href='https://github.com/rafaelalmeidaV'><AiFillGithub className='h-8 w-8 ml-4' /></a></div>
                </div>
              </div>

              

            </div>
          </div>


        </section>
        <section id='experience'>
          <div className='flex justify-center py-28'>
            <div className='bg-regal-gray w-full md:w-2/5 h-auto md:h-96 rounded-lg overflow-auto'>
              <div className='ml-5 mt-5'>
                <Image
                  src={'/Curso_C.webp'}
                  width={60}
                  height={60}
                  className='rounded'
                />
                <h1 className='text-xl font-semibold mt-5'>Private Algorithms teacher</h1>
                <p className='font-light text-zinc-400'>2023 - PRESENT</p>
                <p className='font-light mt-3 mr-5 text-base'>The C Programming: Algorithms 1 and Algorithms 2 course represents
                  a comprehensive and illuminating journey into the world of algorithms
                  within the context of the C programming language. <br /><br />These two interconnected
                  courses form a dynamic educational experience that is meticulously crafted
                  to empower students with a profound understanding of algorithm design, analysis,
                  and proficient implementation, all while harnessing the expressive power of the
                  C programming language.</p>
              </div>
            </div>
          </div>
        </section>




      </main> */}
      <main className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 '>
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
  )
}

