import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-sm text-lime-100">
          Con urgenza e speranza rivolgiamo il nostro appello a te in questo momento cruciale. Nelle ore oscure che precedono la magica notte di Natale, ci troviamo di fronte a un enigma che mette in pericolo la stessa essenza della festa più splendente dell&#39;anno.
          <br />
          <br />
          Nel quieto abbraccio del nostro remoto villaggio natalizio, il fulcro stesso della magia natalizia è stato colpito da un mistero inquietante. Le stelle, custodi e artigiani della magia che permea questa stagione di gioia e meraviglia, sono misteriosamente svanite dal cielo notturno.
          <br />
          <br />
          L&#39;antica sapienza degli elfi di Babbo Natale non è stata sufficiente a comprendere o svelare questo oscuro mistero. E così, con cuore afflitto ma speranzoso, ci rivolgiamo a te, nota per la tua destrezza nel risolvere gli indovinelli più intricati.
          <br />
          <br />
          Le stelle, scintillanti custodi del nostro incantesimo natalizio, sono fondamentali illuminare la via che il nostro capo, Babbo Natale, deve seguire per poter consegnare tutti i regali. Il loro misterioso scomparire minaccia di privare il mondo della luce e della magia che solo il Natale sa donare.
          <br />
          <br />
          Chiediamo il tuo aiuto, o abile e valorosa, affinché possa svelare il mistero di questa scomparsa e restituire alle stelle il loro posto nel cielo notturno. Speriamo che la tua saggezza e il tuo coraggio possano rischiarare il cammino verso la soluzione di questo enigma e garantire che la magia del Natale non venga offuscata.
          <br />
          <br />
          Accogli il nostro appello, o custode della speranza, e vieni in nostro soccorso.
          <br />
          <br />
          Con fiducia e gratitudine,
          <br />
          Gli Elfi di Babbo Natale
        </p>
        <br />
        <div>
          <label htmlFor="input1" className="block mb-2 text-sm font-medium text-white">Risposta:</label>
          <input type="text" name="input1" id="input1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="rispondi qui" required />
        </div>
        <br />
        <div className="inline-flex items-center ">
          <a href="#" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Accetti??
          </a>
        </div>
      </div>

    </main>
  )
}
