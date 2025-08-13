import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo' 
import './App.css'
import Todos from './components/Todos'

function App() {
  

  return (
    < >
    <div>
      <h1> Learn about redux toolkit </h1>
       <AddTodo />
       <Todos />
    </div>
    
    </>
  )
}

export default App

