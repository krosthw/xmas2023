'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import router from 'next/router';
import { useState, useEffect } from 'react';

export default function Home() {
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const verify = () => {
    if (nameInput.toLocaleLowerCase().trim() === "lettera" || nameInput.toLocaleLowerCase().trim() === "una lettera" || nameInput.toLocaleLowerCase().trim() === "la lettera"  ) {
      console.log(nameInput)
      router.push('/phase2')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Sotto il manto stellato della Foresta delle Lucciole, dove la luce danza nel buio, il Custode della Luce attende il tuo arrivo. Egli è il guardiano delle lucciole, custode della magia notturna, e solo tu puoi raggiungerlo per scoprire il segreto che tanto affligge in nostro mondo.
          <br />
          <br />
          Quando giungerai alla chiara radura al centro della foresta, incontrerai il Custode delle lucciole, una sagoma misteriosa avvolta nel bagliore di tante luci, custode delle preziose gemme di luce. Egli, come tutti noi, è stato colpito dalla scomparsa delle stelle notturne e ora cerca qualcuno che possa preservare la luce della foresta.
          <br />
          <br />
          Ti darà il benvenuto con uno sguardo penetrante, e una danza di lucciole intorno a lui sarà il suo saluto. Se sarai pronto a dimostrare la tua ingegnosità e la tua dedizione al mistero delle stelle, ti proporrà un enigma da risolvere.
          <br />
          <br />
          Solo se riuscirai a decifrare le parole magiche nascoste nell&#39;enigma, il guardiano delle lucciole ti presterà le lucciole, che con fiducia ti seguiranno attraverso il sentiero illuminato dalla loro stessa luce.
          <br />
          <br />
          Ti chiediamo, Federica, di ascoltare con attenzione e di scrutare il mistero che circonda queste luci danzanti. Rispondi all&#39;enigma e guida le lucciole con saggezza, perché solo coloro che rispettano il potere della luce potranno vedere brillare il sentiero verso il ritorno della magia nella Foresta delle Lucciole.
          <br />
          <br />
          Con speranza e fiducia,
          Gli Elfi di Babbo Natale
        </p>
        <br />
        <br />
        <div className="max-w-sm p-6 bg-lime-100 border border-lime-200 rounded-lg italic text-lg">
          Non cammina, non corre, ma spesso viaggia. Non ha bocca ma può dire molte parole. Cosa è?"
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
