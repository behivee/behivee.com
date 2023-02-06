"use client"

import { Roboto } from '@next/font/google'
import { use } from 'react'

const roboto = Roboto( {
  subsets: ['latin'],
  weight: "100"
} )

type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

const getData: () => Promise<Todo> = async () => await fetch( "https://jsonplaceholder.typicode.com/todos/1" ).then( res => res.json() ).catch( ( err ) => console.log( "ERROR: ", err ) )

export default function Home() {

  const todo = use( getData() )

  return (
    <main>
      <p className={roboto.className}>
        {JSON.stringify( todo )}
      </p>
    </main>
  )
}
