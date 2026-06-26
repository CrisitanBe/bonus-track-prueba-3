import './App.css'
import MascotaCard from './components/MascotaCard'
import { mascotas } from './data/mascotas'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>AdoptaPet</h1>
        <p>Encuentra a tu nueva compañera o compañero.</p>
      </header>

      <section className="mascotas-grid" aria-label="Listado de mascotas disponibles para adopción">
        {mascotas.map((mascota) => (
          <MascotaCard
            key={mascota.id}
            nombre={mascota.nombre}
            raza={mascota.raza}
            edad={mascota.edad}
            especie={mascota.especie}
            descripcion={mascota.descripcion}
            caracteristicas={mascota.caracteristicas}
          />
        ))}
      </section>
    </main>
  )
}

export default App
