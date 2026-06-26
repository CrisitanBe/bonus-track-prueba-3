import { useMemo, useState } from 'react'
import './App.css'
import FiltroEspecie from './components/FiltroEspecie'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const busquedaNormalizada = useMemo(() => {
    return busqueda.trim().slice(0, 30).toLowerCase()
  }, [busqueda])

  const mascotasFiltradas = useMemo(() => {
    return mascotas.filter((mascota) => {
      const coincideEspecie = filtroEspecie === 'Todas' || mascota.especie === filtroEspecie
      const nombreMascota = mascota.nombre.toLowerCase()
      const coincideBusqueda = busquedaNormalizada.length === 0 || nombreMascota.includes(busquedaNormalizada)

      return coincideEspecie && coincideBusqueda
    })
  }, [busquedaNormalizada, filtroEspecie])

  const urgentes = useMemo(() => {
    return mascotas.filter((mascota) => mascota.adopcionUrgente).length
  }, [])

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>AdoptaPet</h1>
        <p>Encuentra a tu nueva compañera o compañero.</p>
        <p className="contador-urgentes">Mascotas con adopción urgente: {urgentes}</p>
      </header>

      <FiltroEspecie
        filtroActual={filtroEspecie}
        onCambiarFiltro={setFiltroEspecie}
        valorBusqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
      />

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p className="mensaje-vacio">No hay mascotas que coincidan</p>
      )}
    </main>
  )
}

export default App
