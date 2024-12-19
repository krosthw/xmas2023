'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput.toLocaleLowerCase().trim() === "lake washington boulevard") {
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
          Grazie al tuo straordinario impegno, hai raccolto la Sabbia dei Sogni, le Rocce di Luna, e il Kit di Costruzione della Meraviglia. Ora sei pronta per affrontare l&#39;ultima sfida e completare l&#39;opera che salverà il Natale.
          <br />
          <br />
          Alla Fabbrica degli Elfi, troverai il nostro fidato Ingegnere Capo Lillo, sempre pieno di idee... ma anche di piccoli problemi. Quest&#39;anno, ha nuovamente cambiato la combinazione della sua cassetta degli attrezzi, per essere sicuro che nessuno la aprisse per sbaglio. Purtroppo, però, anche lui non ricorda la combinazione esatta!
          <br />
          <br />
          Lillo ha trovato un foglietto con un indizio scritto sopra: sarà tuo compito risolvere questo enigma per aprire la cassetta e ottenere gli attrezzi necessari per completare l&#39;assemblaggio del dispositivo. La chiave del Natale si nasconde tra le parole: osserva, rifletti e troverai la soluzione.
          <br />
          <br />
          Con gli strumenti della cassetta e i materiali che hai raccolto, collaborerai con Lillo per costruire lo strumento magico che calmerà gli elfi e riporterà l&#39;armonia al Polo Nord. Questo sarà l&#39;ultimo tassello della tua grande impresa.
          <br />
          <br />
          Federica, sei stata incredibile fino a qui, e sono certo che anche questa volta supererai la sfida con il tuo ingegno e la tua determinazione. Noi tutti siamo orgogliosi di te e non vediamo l&#39;ora di vedere il Natale tornare a splendere grazie al tuo coraggio.
          <br />
          <br />
          Buona fortuna per questa missione finale, eroina del Natale!
          <br />
          <br />
          Con infinita stima e gratitudine,
          Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
          Esco, vado a prendermi un gelato
        </div>
        <br />
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-white">Risposta:</label>
          <input type="text" onChange={(event) => setNameInput(event.target.value)} name="input1" id="input1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="..." required />
          <br />
          <button onClick={() => verify()} className="px-3 py-2 flex text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Conferma
          </button>
        </div>
      </div>

    </main>
  )
}
