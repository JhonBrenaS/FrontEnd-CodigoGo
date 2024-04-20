import Header from "./components/Header"
import Appointments from "./pages/Appointments"

const App = () => {
  return (
    <>
      <Header title="Citas médicas para mascotas" />

      <main className="container m-auto flex ga-12 py-5">
        <Appointments />
      </main>
    </>
  )
}

export default App