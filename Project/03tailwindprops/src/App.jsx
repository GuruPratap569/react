import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    name: "GURU",
    age: 21
  }

  let arr = ["hitesh",25,3]

  return (
    <>

     <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test </h1>
    <Card username='Guru' someObj={myObj.name} newarr={arr[1]} />
    <Card username={arr[0]} />
    <Card />

    </>
  )
}

export default App
