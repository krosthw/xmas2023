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
          Ce l&#39;hai fatta! Grazie al tuo coraggio, alla tua intelligenza e al tuo impegno, il Natale è salvo ancora una volta. Gli elfi, finalmente calmi e concentrati, hanno ripreso il loro lavoro con rinnovata gioia e armonia. La magia del Natale brillerà in ogni angolo del mondo, portando sorrisi e meraviglia a tutti i bambini.
          <br />
          <br />
          Il dispositivo che hai costruito con l&#39;aiuto di Lillo è straordinario. La Sabbia dei Sogni, le Rocce di Luna e il Kit di Costruzione della Meraviglia si sono uniti per creare qualcosa di unico: un dono non solo per gli elfi, ma anche per te.
          <br />
          <br />
          Ora, Federica, è il momento di aprire il tuo pacco speciale. Dentro troverai lo strumento che hai creato: un bellissimo Proiettore di Stelle. Questo oggetto non solo illuminerà il cielo della tua stanza con le costellazioni più magiche, ma ti ricorderà sempre che anche nei momenti più difficili, il tuo ingegno e il tuo cuore possono fare la differenza.
          <br />
          <br />
          Tutti noi, qui al Polo Nord, ti siamo infinitamente grati. Sei una vera eroina del Natale, e il tuo spirito gentile e generoso sarà sempre parte della nostra magia.
          <br />
          <br />
          Buon Natale, Federica! Che sia pieno di gioia, meraviglia e stelle luminose.
          <br />
          <br />
          Con affetto e gratitudine,
          <br />
          <br />
          Babbo Natale
        </p>
        <br />
        <br />
      </div>
    </main>
  )
}
