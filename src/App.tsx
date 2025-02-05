import './App.css'
import CheckList from './components/CheckList'
import Mensualities from './components/Mensualities'
import Rentability from './components/Rentability'

function App() {
  return (
    <>
      <div className="flex justify-evenly items-center w-screen">
        {/* <Rentability />
        <Mensualities /> */}
        <CheckList />
      </div>
    </>
  )
}

export default App
