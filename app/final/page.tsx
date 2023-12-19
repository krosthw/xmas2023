'use client'
import Image from 'next/image'
import { useRouter, } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-sm p-6 bg-lime-900 border border-lime-200 rounded-lg shadow">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-100">Cara Federica,</h5>
        </a>
        <p className="mb-3 font-normal text-lime-100">
          Lavorando al fianco del Capo Ingegnere Lillo, unendo le tue capacità a quelle degli elfi, insieme avete plasmato un dispositivo senza pari.
          <br />
          <br />
          Ora, ti trovi di fronte al meccanismo che tu stesso hai contribuito a forgiare, insieme al Capo Ingegnere Lillo e agli abili elfi della Fabbrica. È giunto il momento di attivare questo straordinario strumento, che illuminerà il cielo notturno con la magnificenza delle stelle, restituendo al mondo la magia che è stata temporaneamente oscurata.
          <br />
          <br />
          Sii pronto a completare il tuo nobile compito. Davanti a te troverai un pannello con una serie di leve, bottoni e simboli. Utilizza la conoscenza dei tuoi viaggi e la tua intuizione per comprendere e attivare il meccanismo.
          <br />
          <br />
          Ogni gesto che compirai su questo pannello avrà un impatto diretto sul cielo notturno, e quando avrai completato la sequenza corretta, lo strumento si attiverà, diffondendo la luce delle stelle nel firmamento, riportando la magia del Natale a tutti coloro che guardano al cielo con speranza.
          <br />
          <br />
          Il destino del Natale è ora nelle tue mani, Federica. Affronta questo momento con la stessa determinazione e intelligenza che hai dimostrato in ogni fase della tua straordinaria avventura. Quando avrai attivato il meccanismo, la luce delle stelle brillerà di nuovo nel cielo, e la magia del Natale sarà restituita al mondo intero.
          <br />
          <br />
          Grazie,
          <br />
          Gli Elfi di Babbo Natale
        </p>
        <br />
        <br />
      </div>
    </main>
  )
}
