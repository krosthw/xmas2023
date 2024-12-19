

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-sm text-lime-100">
          Spero che questa lettera ti trovi serena e pronta a vivere lo spirito del Natale. Mi rivolgo a te con una richiesta speciale, perché ricordo quanto sei stata brava l&#39;anno scorso ad aiutare i miei elfi. Il tuo coraggio e la tua astuzia hanno salvato il Natale, e oggi abbiamo ancora bisogno del tuo aiuto.
          <br />
          <br />
          C&#39;è un grande problema qui al Polo Nord: gli elfi sono in preda all&#39;agitazione! Con il Natale che si avvicina, la pressione è alta e il loro entusiasmo si è trasformato in un caos generale. Purtroppo, così facendo, lavorano male e non riescono a completare i preparativi. Se non riusciamo a calmarli e a riportare l&#39;ordine, rischiamo di non riuscire a portare la magia del Natale a tutti i bambini del mondo!
          <br />
          <br />
          Per questo, Federica, mi rivolgo a te. Solo qualcuno con il tuo cuore gentile e la tua mente brillante può aiutarci a risolvere questa situazione. Gli elfi hanno preparato per te una serie di sfide e giochi che, una volta completati, aiuteranno a riportare l&#39;armonia al Polo Nord. Ogni passo che compirai sarà un tassello per salvare il Natale e restituire serenità agli elfi.
          <br />
          <br />
          Gli elfi ti guideranno con delle lettere che troverai lungo il cammino. Segui i loro indizi, usa la tua intuizione e il tuo ingegno, e sono certo che riuscirai a compiere questa nuova impresa straordinaria.
          <br />
          <br />
          Grazie di cuore, Federica. Noi tutti contiamo su di te!
          <br />
          <br />
          Con affetto e fiducia,
          <br />
          <br />
          Babbo Natale
        </p>
        <br />
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-white">Accetti??:</label>
        </div>
        <div className=" flex justify-around">
          <a href="/grinch" className="px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 ">
            NON MI VA
          </a>
          <a href="/phase2" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            CERTO
          </a>
        </div>
      </div>

    </main>
  )
}