import Image from 'next/image'
import profilePic from '@/media/grinch.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow" >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">SEI FORSE</h5>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">IL GRINCH???</h4>
        </a>
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={200}
            height={500}
          />
        </div>
        <br />
        <div className=" flex justify-around">
          <a href="/" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Torna Indietro
          </a>
        </div>
      </div>
    </main>
  )
}
