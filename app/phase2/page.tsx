'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';
import profilePic from '@/media/all.png'


export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput === "focp") {
      console.log(nameInput)
      router.push('/phase3')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Il cammino attraverso la Foresta delle Lucciole ha rivelato la tua abilità nel mantenere viva la luce del Natale. Ora, la tua via prosegue verso un luogo che sfida la percezione e la realtà: la Grotta degli Specchi.
          <br />
          <br />
          Alla fine della foresta, troverai la bocca di una grotta nascosta dietro un albero maestoso, come se la natura stessa nascondesse il suo ingresso. La porta d'ingresso è ornata da una serie di incisioni misteriose, e solo risolvendo un antico enigma potrai rivelarne il segreto e quindi entrare nella Grotta per recuperare gli specchi.
          <br />
          <br />
          Le iniziali sulla porta, se interpretate correttamente, riveleranno una combinazione segreta. Esse sono un'antica chiave che si collega alle costellazioni, custodi del mistero del cielo. Studia attentamente le stelle, le loro forme e i loro nomi, perché sono esse a dettare la combinazione segreta che sbloccherà l'accesso alla Grotta degli Specchi.
          <br />
          <br />
          Quando le tue conoscenze astrologiche si uniranno, riuscirai a decifrare l'antico codice che apre le porte della grotta, svelando il mondo di riflessi e illusioni che attendono al suo interno. Solo coloro che hanno dimostrato di comprendere l'arcano dei cieli potranno accedere ai segreti nascosti nella Grotta degli Specchi.
          <br />
          <br />
          Affronta questa sfida con saggezza e determinazione, Luca, e i segreti degli specchi si apriranno a te, portando la luce del mistero nella tua missione per riportare la magia del Natale nel mondo.
          <br />
          <br />
          Con fiducia e speranza,
          <br />
          Gli Elfi di Babbo Natale
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
