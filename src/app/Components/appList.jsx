import Link from "next/link"
import Image from "next/image"

export default function List() {

    const list = [
        {
            name: 'MAGE-GPT: Gerador de RPG',
            description: 'Embark on a journey into a world of Dungeons & Dragons 5e adventures with the assistance of artificial intelligence.',
            techs: ['React Native', 'TypeScript'],
            image: '/mageGpt.png',
            link: ' ',
        },
        
    ]


    return (
        <Link href="">
            <div className='flex'>
                <div className=' ml-4 mt-4'>
                    <div className=' border-[2px] border-stone-700 rounded-sm'>
                        <Image
                            src={list[0].image}
                            width={110}
                            height={70}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </div>
                <div className='ml-4 mt-4 '>
                    <h1>MAGE-GPT: Gerador de RPG</h1>
                    <p className='text-sm text-white text-opacity-50 max-w-xs'>Embark on a journey into a world of Dungeons & Dragons 5e adventures with the assistance of artificial intelligence.</p>
                    <div className='flex'>
                        <div className='max-w-min bg-teal-900 text-teal-400 px-2 my-1 rounded-lg text-xs '> React Native </div>
                        <div className='max-w-min bg-teal-900 text-teal-400 px-2 my-1 rounded-lg text-xs mx-2'> TypeScript </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}
