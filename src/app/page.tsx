import { EB_Garamond, Nunito } from 'next/font/google'
import Greetings from "@/components/greetings";
import Menu from '@/components/menu'
import Background from '@/components/background'
import gleb from '../../public/gleb.svg'
import Image from 'next/image'
import SocialLink from '@/components/social-link'
import instaQr from './../../public/insta.webp'
import xQr from './../../public/x.png'

const garamond = EB_Garamond({ subsets: ['latin'], display: 'swap' })

//export const revalidate = 86400 // 24 hours
export const revalidate = 0

const Location = async () => {
  const res = await fetch('https://skibitsky.com/api/location')
  const body = await res.json()

  return (<span className="text-base bg-amber-100 px-2 py-1 rounded-xl">{body.location}</span>)
}


export default async () => {
  return (
    <>
      <Background color="home-background"/>
      <Image src={gleb} alt="Gleb Skibitsky" quality={100} className="hidden lg:block absolute p-24 w-1/2 left-2/4 top-1/2 -translate-y-1/2 pointer-events-none"/>
      <main className="h-screen w-screen flex items-center">
        <div className="h-full grid grid-cols-6 items-center">
          <div className="col-span-6 lg:col-span-3">
            {/*<div className="max-h-fit flex flex-col gap-3 sm:gap-5 backdrop-blur-xl bg-white/75 p-8 ml-24 lg:p-12 rounded-lg shadow-lg">*/}
            <div className="max-h-fit flex flex-col gap-3 sm:gap-5 p-8 mx-8 lg:ml-16 lg:p-12 rounded-lg">
              <div className={`${garamond.className} font-sans text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#2b2727]`}>Hello, <br/> I'm Gleb Skibitsky</div>
              <div className="space-y-3 lg:text-xl">
                <Greetings />
                <p>
                  {/* @ts-expect-error Async Server Component */}
                  Today I am in <Location />, you can follow me on <SocialLink color="social-instagram" href="https://www.instagram.com/gleb.skibitsky/" text="Instagram" image={instaQr} imageAlt="@gleb.skibitsky"/> or <SocialLink color="social-twitter" href="https://twitter.com/skibitsky/" text="Twitter" image={xQr} imageAlt="@skibitsky"/> for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
