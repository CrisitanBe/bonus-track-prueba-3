function FiltroEspecie({ filtroActual, onCambiarFiltro, valorBusqueda, onCambiarBusqueda }) {
  const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <div className="filtros">
      <div className="filtros__botones" role="group" aria-label="Filtrar por especie">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            type="button"
            className={`filtro-boton ${filtroActual === opcion ? 'filtro-boton--activo' : ''}`}
            onClick={() => onCambiarFiltro(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>

      <label className="buscador" htmlFor="buscar-mascota">
        <span>Buscar por nombre</span>
        <input
          id="buscar-mascota"
          type="text"
          value={valorBusqueda}
          onChange={(event) => onCambiarBusqueda(event.target.value)}
          placeholder="Ej. Pelusa"
          maxLength={30}
        />
      </label>
    </div>
  )
}

export default FiltroEspecie
