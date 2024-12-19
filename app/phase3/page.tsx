'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';
import profilePic from '@/media/sudoku.png'
import sudokunumber from '@/media/sudoku_number.png'
import sudokuorder from '@/media/sudoku_order.png'


export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput.toLocaleLowerCase().trim() === "1") {
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
          La tua avventura continua, e ogni passo che fai ci avvicina sempre di più a salvare il Natale. Dopo aver recuperato la Sabbia dei Sogni e le Rocce di Luna, ora è il momento di affrontare la tua terza missione.
          <br />
          <br />
          Devi dirigerti verso il Deposito Abbandonato degli Elfi, un luogo che un tempo era il cuore pulsante della nostra officina. Qui si trova il prezioso Kit di Costruzione della Meraviglia, uno strumento indispensabile per completare la nostra missione e riportare armonia al Polo Nord.
          <br />
          <br />
          Purtroppo, il deposito è ormai in disordine da molto tempo. Per trovare il Kit, dovrai rimettere tutto in ordine. Gli oggetti sono sparsi e le antiche regole di organizzazione degli elfi devono essere seguite alla perfezione. Non sarà facile, ma so che la tua pazienza e il tuo talento ti guideranno.
          <br />
          <br />
          Troverai un enigma ad attenderti: un antico sudoku degli elfi che tiene nascosta la posizione del Kit. Risolvi il puzzle e il Kit di Costruzione della Meraviglia sarà tuo. Questo strumento straordinario ci permetterà di utilizzare al meglio tutto ciò che hai raccolto finora e di procedere verso il traguardo finale.
          <br />
          <br />
          Federica, sei la nostra speranza e stai dimostrando ancora una volta il tuo incredibile valore. Affronta questa sfida con il tuo solito spirito brillante e fai un altro passo verso il salvataggio del Natale!
          <br />
          <br />
          Con gratitudine e fiducia,
          <br />
          <br />
          Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg ">
          <Image
            src={profilePic}
            alt="c"
            width={500}
            height={500}
          />
          <br />
          <Image
            src={sudokunumber}
            alt="a"
            width={100}
            height={100}
          />

          <br />
          <Image
            src={sudokuorder}
            alt="c"
            width={100}
            height={100}
          />
        </div>
        <br />
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-white">Risposta:</label>
          <input type="text" onChange={(event) => setNameInput(event.target.value)} name="input1" id="input1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="3...." required />
          <br />
          <button onClick={() => verify()} className="px-3 py-2 flex text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Conferma
          </button>
        </div>
      </div>

    </main>
  )
}
