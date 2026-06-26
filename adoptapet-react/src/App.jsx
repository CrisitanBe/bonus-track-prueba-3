import './App.css'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>AdoptaPet</h1>
        <p>Encuentra a tu nueva compañera o compañero.</p>
      </header>

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
