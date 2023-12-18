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
    if (nameInput === "") {
      console.log(nameInput)
      router.push('/phase4')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Il tuo viaggio attraverso la Grotta degli Specchi ha mostrato la tua capacità di riflettere e comprendere le sfide più intricate. Ora, il tuo cammino continua verso il Villaggio Ghiacciato, un luogo dove l'antica arte di estrarre il ghiaccio magico è stata interrotta da un enigma gelido.
          <br />
          <br />
          Il mastro estrattore, guardiano del ghiaccio magico, ha bisogno del tuo aiuto. Una cassetta contenente gli attrezzi per l&#39;estrazione del ghiaccio è bloccata da una combinazione segreta, un intricato puzzle che deve essere risolto prima che il ghiaccio possa essere estratto.
          <br />
          <br />
          La combinazione per sbloccare la cassetta è nascosta in un sudoku speciale, un enigma numerico che richiede la tua abilità nel collocare i numeri giusti nelle giuste posizioni. Risolvendo correttamente il sudoku, scoprirai la sequenza di numeri necessaria per aprire la cassetta degli attrezzi.
          <br />
          <br />
          Sii paziente, osserva attentamente le cifre e metti insieme il puzzle numerico. Quando avrai trovato la combinazione esatta, avrai accesso agli strumenti necessari per estrarre il ghiaccio magico che è vitale per il nostro incantesimo di Natale.
          <br />
          <br />
          Concentrazione e precisione saranno le chiavi per decifrare questo enigma numerico, permettendoti di liberare il potere del ghiaccio magico e proseguire nel tuo nobile compito di portare la magia del Natale nel mondo.
          <br />
          <br />
          Con gratitudine e fiducia,
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
