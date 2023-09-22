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

    <div>
      <Head>
        <title>Rafael Almeida Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
                I'm a mobile software engineer. I've worked with a wide range of technologies
              </p>
              <div className='flex justify-center gap-6 py-1 text-sky-500'>
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'}
                  className="h-6 flex"
                />
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png'}
                  className="h-6 flex"
                />
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'}
                  className="h-6 flex"
                />
                <img
                  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'}
                  className="h-6 flex"
                />

              </div>
            </div>

            <div className='flex flex-col justify-center gap-16 text-5xl '>
              <a href='https://www.linkedin.com/in/rafael-almeida-vasconcelos-b14629235/'><AiFillLinkedin className='cursor-pointer' /></a>
              <a href='https://wa.me/5535988329827'><SiWhatsapp/></a>
              <a href='https://github.com/rafaelalmeidaV'><AiFillGithub /></a>
            </div>
          </div>
        </section>
        <section id='projects'>
          <br/>
          <div className='bg-zinc-800 py-20'>
          <h1 className="flex justify-center text-xl mb-16">Projects</h1>
            <div className='flex justify-center'>
              <div className='mx-2'>
                <img
                  src={'/mageGpt.png'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='pl-4 pt-4 font-semibold'>Mage GPT gerador RPG</h4>
                  <p className='pl-4 pt-4 pr-4 text-xs text-zinc-300'>The D&D Character Generator is an AI-powered application that takes basic user inputs and provides
                    a complete character sheet for Dungeons & Dragons (D&D) based on those inputs.
                    This app aims to simplify the character creation process for D&D players and Dungeon Masters.</p>
                  <div className='p-4 flex flex-row'><Image src={'/react-3.png'} width={24} height={24} />  <SiTypescript className='text-blue-600 bg-white mt-1 ml-1' /></div>
                  <div><a href='https://play.google.com/store/apps/details?id=com.anonymous.mobileescola'><FaGooglePlay className='h-7 w-7 ml-4' /></a></div>
                </div>
              </div>

              <div className='mx-2'>
                <img
                  src={'/noteroom.png'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='pl-4 pt-4 font-semibold'>Noteroom</h4>
                  <p className='pl-4 pt-4 pr-4 text-xs text-zinc-300'>Noteroom is a mobile application designed to provide users with a
                    convenient and immersive reading experience on their smartphones.
                    It serves as a digital book platform, allowing users to access,
                    read, and manage a wide variety of books in digital format.</p>
                  <div className='p-4 flex flex-row'><Image src={'/react-3.png'} width={24} height={24} />  <SiJavascript className='text-yellow-400 bg-black mt-1 ml-1' /></div>
                  <div><a href='https://github.com/rafaelalmeidaV'><AiFillGithub className='h-8 w-8 ml-4' /></a></div>
                </div>
              </div>

              <div className='mx-2'>
                <img
                  src={'/pomodoro-timer.jpg'}
                  width={320}
                  height={320}
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                />
                <div className='bg-regal-gray w-80 h-72 rounded-b-lg'>
                  <h4 className='p-4 font-semibold'>Py Pomodoro</h4>
                  <p className='p-4 text-xs text-zinc-300'>PyPomodoro is a Python-based Pomodoro timer application designed to help
                    users boost productivity and manage their time effectively.
                    It follows the Pomodoro Technique, a time management method
                    that encourages work intervals</p>
                  <div className='py-4 pl-5 flex flex-row'><img
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'}
                    className="h-6 flex"
                  /></div>
                  <div><a href='https://github.com/rafaelalmeidaV'><AiFillGithub className='h-8 w-8 ml-4' /></a></div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id='experience'>
          <div className='flex justify-center py-28'>
            <div className='bg-regal-gray w-2/5 h-96 rounded-lg'>
              <div className='ml-5 mt-5'>

                <img
                  src={'/Curso_C.webp'}
                  style={{ height: '60px', width: '60px', borderRadius: '6%' }}

                />
                <h1 className='text-xl font-semibold mt-5'>Private Algorithms teacher</h1>
                <p className='font-light text-zinc-400'>2023 - PRESENT</p>
                <p className='font-light mt-3 mr-5 text-base'>The "C Programming: Algorithms 1 and Algorithms 2" course represents
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

