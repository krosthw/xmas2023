'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';
import profilePic from '@/media/rebus.jpg'


export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput.toLocaleLowerCase().trim() === "facili scalate") {
      console.log(nameInput)
      router.push('/phase1')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Il tuo viaggio è appena iniziato, e già sento che il Natale è in buone mani grazie a te. La tua prima missione ti porterà in un luogo speciale: il Deserto Senza Tempo. Questo luogo, avvolto in un silenzio eterno, custodisce un tesoro prezioso per la nostra missione: la Sabbia dei Sogni.
          <br />
          <br />
          Questa sabbia magica ha il potere di calmare gli animi e riportare serenità anche nei cuori più agitati. È proprio ciò di cui i nostri elfi hanno bisogno per ritrovare la concentrazione e lavorare al meglio. Tuttavia, il Deserto Senza Tempo non concede i suoi doni così facilmente: per ottenere la Sabbia dei Sogni, dovrai risolvere un antico rebus lasciato dagli spiriti del deserto.
          <br />
          <br />
          Non temere, Federica: la tua mente brillante è la chiave per superare questa sfida. Gli spiriti sono curiosi e amano mettere alla prova chiunque cerchi i loro tesori. Ricorda di osservare con attenzione ogni dettaglio e di pensare in modo creativo: il rebus ti guiderà.
          <br />
          <br />
          Porta a termine questa missione e torna da noi con la Sabbia dei Sogni. Con il tuo aiuto, faremo un passo importante verso il Natale che tutti sogniamo.
          <br />
          <br />
          In bocca al lupo, piccola eroina!
          <br />
          <br />
          Con fiducia e affetto,
          <br />
          <br />
          Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <br />
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-white">Risposta:</label>
          <input type="text" onChange={(event) => setNameInput(event.target.value)} name="input1" id="input1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="rispondi qui" required />
          <br />
          <button onClick={() => verify()} className="px-3 py-2 flex text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Conferma
          </button>
        </div>
      </div>

    </main>
  )
}
