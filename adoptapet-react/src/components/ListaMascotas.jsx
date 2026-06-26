import MascotaCard from './MascotaCard'

function ListaMascotas({ mascotas = [] }) {
  return (
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
  )
}

export default ListaMascotas
