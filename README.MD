# First Ionic App

## Descripción

Este proyecto es una tarea para el curso de programación de aplicaciones móviles con Ionic y React. La finalidad del proyecto es consumir una API de productos y mostrarlos en una lista, además de implementar un scroll infinito para la carga progresiva de productos. También se ha implementado un carrito de compras utilizando Zustand para el manejo del estado global.

## Tecnologías Utilizadas

- **Ionic Framework**: Utilizado para la creación de la interfaz de usuario y la estructura de la aplicación.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Zustand**: Biblioteca para el manejo del estado global de la aplicación.
- **TypeScript**: Lenguaje de programación que se basa en JavaScript y añade tipos estáticos.

## Funcionalidades

### Consumo de API de Productos

La aplicación realiza una llamada a la API de [Fake Store API](https://fakestoreapi.com/products) para obtener una lista de productos. Los productos se muestran en una lista con la opción de filtrarlos por categoría.

### Scroll Infinito

Se ha implementado un scroll infinito para la carga progresiva de productos. La solución consiste en realizar una llamada a la API nuevamente, simulando una llamada a la siguiente página y agregando los datos nuevos a la lista existente.

### Carrito de Compras

Se ha implementado un carrito de compras utilizando Zustand para el manejo del estado global. Los usuarios pueden agregar productos al carrito y ver la cantidad de productos en el carrito en la barra de navegación. También pueden acceder a una página dedicada al carrito de compras para ver los productos añadidos y eliminarlos si lo desean.

## Estructura del Proyecto

- **src/pages/Tab1.tsx**: Página principal que muestra la lista de productos y el scroll infinito.
- **src/pages/Cart.tsx**: Página del carrito de compras.
- **src/components/ProductCard.tsx**: Componente que muestra la información de cada producto.
- **src/store/useCartStore.ts**: Archivo que contiene la lógica para el manejo del estado global del carrito de compras utilizando Zustand.
- **src/App.tsx**: Archivo principal de la aplicación que configura las rutas y la estructura de la aplicación.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/first-ionic-app.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd first-ionic-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Uso

- Navega a la página principal para ver la lista de productos.
- Utiliza el scroll infinito para cargar más productos.
- Haz clic en el icono del carrito de compras en la barra de navegación para ver los productos añadidos al carrito.

## Pruebas

Para ejecutar las pruebas, sigue estos pasos:

1. Asegúrate de tener todas las dependencias instaladas:
   ```bash
   npm install
   ```
2. Ejecuta las pruebas:
   ```bash
   npm run test.unit
   ```

Las pruebas están configuradas para ejecutarse con React Testing Library. Asegúrate de revisar el archivo de prueba `App.test.tsx` para más detalles sobre las pruebas implementadas.

### Descripción de las Pruebas

#### Pruebas de Componentes

- **ProductCard**: Verifica que el componente `ProductCard` renderiza correctamente la información del producto y maneja los eventos de clic para agregar al carrito.
  - **Resultado Esperado**: El componente debe mostrar el nombre, precio e imagen del producto. Al hacer clic en el botón de agregar al carrito, el producto debe añadirse al carrito.
  - **Prueba de funcionalidad del botón agregar**: Verifica que al hacer clic en el botón de agregar al carrito, se llama a la función `onBuyClick`.
    - **Resultado Esperado**: La función `onBuyClick` debe ser llamada una vez al hacer clic en el botón.

#### Pruebas de Páginas

- **Tab1**: Verifica que la página `Tab1` carga y muestra la lista de productos correctamente, y que el scroll infinito funciona como se espera.
  - **Resultado Esperado**: La página debe mostrar una lista de productos al cargar. Al hacer scroll, se deben cargar más productos y añadirse a la lista existente.

#### Pruebas de Listas

- **ProductList**: Verifica que el componente `ProductList` renderiza correctamente una lista de productos y maneja la simulación de scroll infinito.
  - **Resultado Esperado**: El componente debe mostrar una lista de productos en un contenedor con el rol `region`. La función `infinitySimulation` debe ser llamada correctamente para cargar más productos.




