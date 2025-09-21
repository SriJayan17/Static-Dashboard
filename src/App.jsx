import { Suspense } from 'react'
import './App.css'
import Base from './pages/Base'

function App() {
  return (
    <Suspense fallback={<h1><center>Loading...</center></h1>}>
      <Base />
    </Suspense>
  )
}

export default App
