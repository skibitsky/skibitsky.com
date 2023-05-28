'use client'

import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ subsets: ['latin'], display: 'swap', variable: '--font-garamond' })

function getGreeting(): string {
  const date: Date = new Date();
  const hour: number = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 || hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}


export default function Home() {
  return (
    <main className="bg-no-repeat bg-cover h-screen w-screen flex items-center justify-center bg-center"
         style={{ backgroundImage: `url(/pano.jpg)` }}>

      <div className="flex flex-col gap-3 sm:gap-5 backdrop-blur-xl bg-white/75 p-8 lg:p-12 rounded-lg shadow-lg w-4/5 sm:w-3/5">
        <div className={`${garamond.variable} font-sans text-2xl sm:text-4xl lg:text-6xl font-semibold text-gray-800`}>Gleb Skibitksy</div>
        <div className="space-y-3 lg:text-xl">
          <p>{getGreeting()}, I am traveller and software engineer from 🇱🇹 Lithuania.</p>
          <p>
            Today I am in <span className="bg-amber-100 px-2 py-1 rounded-xl">🇯🇵⛩️ Tokyo, Japan</span>, you can follow me on <a className="text-[#E4405F] font-medium hover:underline" href="https://www.instagram.com/gleb.skibitsky/" target="_blank" rel="noreferrer">Instagram</a> or <a className="text-[#1DA1F2] font-medium hover:underline" href="https://twitter.com/skibitksy" target="_blank" rel="noreferrer">Twitter</a> for updates.
          </p>
          <p>
            This website is currently undergoing 👷‍♂️ improvements. I’m working on new features and content. Stay tuned for updates, and thank you for your patience 🙇‍♂️
          </p>
        </div>
      </div>
    </main>
  )
}
