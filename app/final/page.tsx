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
          Ce l&#39;hai fatta! Grazie al tuo coraggio, alla tua intelligenza e al tuo impegno, il Natale è salvo ancora una volta. Gli elfi, finalmente calmi e concentrati, sono pronti a tornare al loro lavoro con rinnovata gioia e serenità. La magia del Natale brillerà in ogni angolo del mondo, portando sorrisi e meraviglia a tutti i bambini.
          <br />
          <br />
          Il dispositivo che hai creato con l&#39;aiuto di Lillo è straordinario. La Sabbia dei Sogni, le Rocce di Luna e il Kit di Costruzione della Meraviglia si sono uniti per realizzare qualcosa di unico, che non solo aiuterà gli elfi a lavorare in armonia, ma porterà anche una dolce calma in ogni angolo del Polo Nord.
          <br />
          <br />
          Ora, Federica, è il momento di aprire il tuo pacco speciale. Dentro troverai il regalo che hai contribuito a creare: un oggetto magico che, come il tuo spirito generoso, calmerà gli elfi e porterà un tocco di pace e serenità a tutti.
          <br />
          <br />
          Siamo tutti incredibilmente grati a te. Sei una vera eroina del Natale, e il tuo cuore gentile sarà sempre parte della nostra magia.
          <br />
          <br />
          Buon Natale, Federica! Che sia un Natale pieno di gioia, serenità e meraviglia.
          <br />
          <br />
          Con affetto e gratitudine,
          Babbo Natale
        </p>
        <br />
        <br />
      </div>
    </main>
  )
}
