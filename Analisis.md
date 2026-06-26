Componente: Se usa para separar la interfaz en bloques independientes como MascotaCard, ListaMascotas y FiltroEspecie. Es adecuado porque permite organizar la aplicación en partes más pequeñas, fáciles de entender, reutilizar y mantener.

JSX: Se usa para construir la interfaz visual de la página, por ejemplo para mostrar cada tarjeta de mascota, los filtros y el mensaje cuando no hay resultados. Es adecuado porque permite combinar HTML y JavaScript de forma clara y natural dentro de React.

Props: Se usa para pasar información desde App hacia los componentes hijos, como por ejemplo enviar nombre, raza, edad, especie, descripción y características desde ListaMascotas a MascotaCard. Es adecuado porque permite que un componente se adapte a distintos datos sin duplicar código.

useState: Se usa para guardar el filtro de especie seleccionado y el texto de búsqueda ingresado por el usuario. Es adecuado porque permite que la interfaz reaccione en tiempo real cuando el usuario interactúa con la aplicación.

Renderizado de listas: Se usa para recorrer el arreglo de mascotas con .map() y generar una tarjeta por cada elemento. Es adecuado porque permite mostrar colecciones dinámicas de datos de forma sencilla y ordenada.

Renderizado condicional: Se usa para mostrar el mensaje “No hay mascotas que coincidan” cuando el resultado del filtro queda vacío, y también para mostrar la etiqueta “URGENTE” solo en las mascotas que tienen adopción urgente. Es adecuado porque permite cambiar la interfaz según condiciones específicas del contenido.

¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
Dividir el proyecto en componentes tiene la ventaja de hacer el código más ordenado, más fácil de leer y más sencillo de mantener. Además, permite trabajar por partes, reutilizar componentes y evitar que un solo archivo se vuelva demasiado largo o confuso.

¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
Las props se usan para pasar datos de un componente padre a uno hijo, mientras que el estado se usa para guardar información que puede cambiar durante la interacción del usuario. Un ejemplo de props en esta aplicación es pasar los datos de una mascota desde ListaMascotas a MascotaCard, como nombre, raza y descripción. Un ejemplo de estado es el useState que guarda el texto ingresado en el buscador o el filtro de especie seleccionado, porque esos valores cambian según la acción del usuario.
