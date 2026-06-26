/**
 * Muestra la información de una mascota en una tarjeta visual.
 * Props esperadas:
 * - nombre: texto con el nombre de la mascota.
 * - raza: texto con la raza de la mascota.
 * - edad: número o texto con la edad de la mascota.
 * - especie: texto con el tipo de especie (Perro, Gato u Otro).
 * - descripcion: texto breve de presentación de la mascota.
 * - caracteristicas: arreglo de textos con características destacadas.
 */
function MascotaCard({
  nombre = 'Sin nombre',
  raza = 'Sin raza',
  edad = 'No especificada',
  especie = 'Otro',
  descripcion = 'Sin descripción disponible',
  caracteristicas = [],
}) {
  const especieTexto = typeof especie === 'string' && especie.trim() ? especie.trim() : 'Otro'

  const estilosPorEspecie = {
    Perro: {
      etiqueta: 'Perro',
      clase: 'mascota-card--perro',
      icono: '🐶',
    },
    Gato: {
      etiqueta: 'Gato',
      clase: 'mascota-card--gato',
      icono: '🐱',
    },
    Otro: {
      etiqueta: 'Otro',
      clase: 'mascota-card--otro',
      icono: '🐾',
    },
  }

  const estiloActual = estilosPorEspecie[especieTexto] ?? estilosPorEspecie.Otro
  const textoNombre = typeof nombre === 'string' && nombre.trim() ? nombre.trim() : 'Sin nombre'
  const textoRaza = typeof raza === 'string' && raza.trim() ? raza.trim() : 'Sin raza'
  const textoDescripcion = typeof descripcion === 'string' && descripcion.trim() ? descripcion.trim() : 'Sin descripción disponible'
  const caracteristicasSeguras = Array.isArray(caracteristicas)
    ? caracteristicas.filter((item) => typeof item === 'string' && item.trim())
    : []

  return (
    <article className={`mascota-card ${estiloActual.clase}`}>
      <div className="mascota-card__header">
        <div>
          <p className="mascota-card__species">
            {estiloActual.icono} {estiloActual.etiqueta}
          </p>
          <h3 className="mascota-card__name">{textoNombre}</h3>
        </div>
        <span className="mascota-card__badge">{textoRaza}</span>
      </div>

      <div className="mascota-card__meta">
        <span>Edad: {edad}</span>
        <span>Especie: {estiloActual.etiqueta}</span>
      </div>

      <p className="mascota-card__description">{textoDescripcion}</p>

      <div className="mascota-card__features" aria-label="Características de la mascota">
        {caracteristicasSeguras.length > 0 ? (
          caracteristicasSeguras.map((caracteristica, index) => (
            <span key={`${caracteristica}-${index}`} className="mascota-card__feature">
              {caracteristica}
            </span>
          ))
        ) : (
          <span className="mascota-card__feature">Sin características registradas</span>
        )}
      </div>
    </article>
  )
}

export default MascotaCard
