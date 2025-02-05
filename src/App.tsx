import './App.css'
import Mensualities from './components/Mensualities'
import Rentability from './components/Rentability'

function App() {
  return (
    <>
      <div className="flex justify-evenly items-center w-screen">
        <Rentability />
        <Mensualities />
      </div>
    </>
  )
}

export default App
