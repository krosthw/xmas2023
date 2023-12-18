'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';
import profilePic from '@/media/sudoku.png'


export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput === "settemillimetri") {
      console.log(nameInput)
      router.push('/final')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Il tuo viaggio attraverso i misteri e le sfide delle terre innevate ha dimostrato la tua abilità nel superare gli enigmi e recuperare i tesori nascosti. Ora, il tuo cammino giunge alla gloriosa Fabbrica degli Elfi al Polo Nord, dove il Capo Ingegnere Lillo attende ansioso di unire i tesori da te raccolti per forgiare lo strumento che salverà la magia del Natale.
          <br />
          <br />
          Con i materiali preziosi che hai recuperato dalla Foresta delle Lucciole, dalla Grotta degli Specchi e dal Villaggio Ghiacciato - le luminose lucciole, gli specchi incantati e il ghiaccio magico - hai portato con te i frammenti fondamentali per la creazione di un artefatto di grande potere.
          <br />
          <br />
          Con il Capo Ingegnere Lillo come guida, sarai coinvolto nel processo creativo attraverso un codice cifrato, una serie di simboli e numeri che devono essere decodificati e interpretati correttamente per attivare la macchina che darà vita allo strumento salvatore del Natale.
          <br />
          <br />
          Unisci la tua mente astuta a quella dell&#39;abile ingegnere, decifrando insieme il codice cifrato e inserendo i materiali raccolti nell&#39;apparato progettato per sfruttarne il potere. Con pazienza, intuito e la tua conoscenza dei misteri che hai affrontato lungo il cammino, contribuirai a dare vita a uno strumento capace di restituire la luce e la magia al Natale.
          <br />
          <br />
          Con fiducia nell&#39;abilità e nel cuore, auguriamo il successo della tua missione.
          <br />
          Con infinita gratitudine e speranza,
          Gli Elfi di Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
          rigvnroornvggvh
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
