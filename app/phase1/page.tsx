'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput.toLocaleLowerCase().trim() === "pidocchio") {
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
          Sei stata fantastica a superare la prima prova e a riportare la Sabbia dei Sogni! Ora sei pronta per affrontare la seconda missione, che ti porterà lontano... molto lontano!
          <br />
          <br />
          Dovrai viaggiare fino alla Luna, un luogo misterioso e magico, dove il silenzio dell&#39;universo abbraccia ogni cosa. Lì, incontrerai il Saggio Lunare, un antico custode che protegge le leggendarie Rocce di Luna. Queste rocce hanno il potere di illuminare anche i cuori più bui e di guidare gli elfi con chiarezza e calma nel loro lavoro.
          <br />
          <br />
          Per raggiungere la Luna, ti affiderò una tuta spaziale incantata, creata dai miei elfi inventori. Ti permetterà di viaggiare tra le stelle e muoverti con facilità sulla superficie lunare. Ma attenzione: il Saggio Lunare non ti consegnerà le Rocce così facilmente. Per guadagnarti la sua fiducia, dovrai risolvere un suo indovinello, un enigma antico quanto le stelle.
          <br />
          <br />
          Ricorda, Federica, il Saggio Lunare apprezza la pazienza e l&#39;intuizione. Ascolta attentamente le sue parole, pensa con calma e segui la tua brillante mente. Solo allora le Rocce di Luna saranno tue, e con esse un altro pezzo della magia necessaria per salvare il Natale.
          <br />
          <br />
          Buon viaggio tra le stelle, piccola esploratrice! Noi tutti contiamo su di te.
          <br />
          <br />
          Con affetto e fiducia,
          <br />
          <br />
          Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
        Sono l&#39;unico animale che cammina con i piedi sulla testa
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
