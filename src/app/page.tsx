import { EB_Garamond } from 'next/font/google'
import Greetings from "@/components/greetings";

const garamond = EB_Garamond({ subsets: ['latin'], display: 'swap', variable: '--font-garamond' })

export const revalidate = 3600 // 1 hour

const Location = async () => {
  const res = await fetch('https://skibitsky.com/api/location')
  const body = await res.json()
  console.log(body)

  return (<span className="text-base bg-amber-100 px-2 py-1 rounded-xl">{body.location}</span>)
}


export default async function Page() {
  return (
    <main className="bg-no-repeat bg-cover h-screen w-screen flex items-center justify-center bg-center"
         style={{ backgroundImage: `url(/pano.jpg)` }}>

      <div className="flex flex-col gap-3 sm:gap-5 backdrop-blur-xl bg-white/75 p-8 lg:p-12 rounded-lg shadow-lg w-4/5 sm:w-3/5">
        <div className={`${garamond.variable} font-sans text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-800`}>Gleb Skibitsky</div>
        <div className="space-y-3 lg:text-xl">
          <Greetings />
          <p>
            {/* @ts-expect-error Async Server Component */}
            Today I am in <Location />, you can follow me on <a className="text-[#E4405F] font-medium hover:underline" href="https://www.instagram.com/gleb.skibitsky/" target="_blank" rel="noreferrer">Instagram</a> or <a className="text-[#1DA1F2] font-medium hover:underline" href="https://twitter.com/skibitsky" target="_blank" rel="noreferrer">Twitter</a> for updates.
          </p>
          <p>
            This website is currently undergoing 👷‍♂️ improvements. I’m working on new features and content. Stay tuned for updates, and thank you for your patience 🙇‍♂️
          </p>
        </div>
      </div>
    </main>
  )
}
