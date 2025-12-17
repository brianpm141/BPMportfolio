import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>

      <main className="
      w-full
      h-screen
      bg-linear-to-b from-green-900 via-green-950 to-black
      flex-col justify-center items-center text-center
      ">

        <Header />

        <section>
          <h1>My Portfolio</h1>
        </section>

      </main>
    </>
  )
}

export default App
