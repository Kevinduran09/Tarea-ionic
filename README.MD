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



### Arquitectura Modular

El proyecto utiliza una arquitectura modular para organizar el código en diferentes carpetas dentro del directorio `src/features`. Cada carpeta representa una funcionalidad o módulo independiente de la aplicación. Esto permite mantener el código limpio, reutilizable y fácil de escalar. A continuación, se describen brevemente los módulos principales:


Cada módulo tiene su propia estructura interna que incluye componentes, servicios, hooks y pruebas específicas para esa funcionalidad.

## Estructura del Proyecto

El proyecto está organizado en módulos dentro de la carpeta `src/features`, donde cada módulo agrupa toda la lógica, componentes, servicios y modelos relacionados con una funcionalidad específica. A continuación, se describe la estructura principal:

- **src/features/products**: Módulo que contiene todo lo relacionado con los productos.
  - **components**: Componentes de UI específicos para los productos, como `ProductCard` y `ProductList`.
  - **services**: Servicios para realizar consultas a la API de productos, como `productsService.ts`.
  - **models**: Modelos TypeScript que definen las interfaces y tipos utilizados en el módulo.
  - **hooks**: Hooks personalizados relacionados con la lógica de productos.
  - **tests**: Pruebas unitarias y de integración específicas del módulo de productos.

- **src/features/cart**: Módulo que maneja la funcionalidad del carrito de compras.
  - **components**: Componentes de UI específicos para el carrito, como la lista de productos en el carrito.
 
  - **models**: Modelos TypeScript que definen las interfaces y tipos utilizados en el módulo.
  - **tests**: Pruebas unitarias y de integración específicas del módulo del carrito.

- **store**: Lógica para el manejo del estado global del carrito utilizando Zustand.
- **src/App.tsx**: Archivo principal de la aplicación que configura las rutas y la estructura general de la aplicación.
## API de Productos

La aplicación consume la API de [Fake Store API](https://fakestoreapi.com/products) para obtener información sobre los productos. A continuación, se describen los endpoints utilizados:

- **GET /products**: Obtiene la lista completa de productos.
  - **Uso**: Este endpoint se utiliza para mostrar la lista inicial de productos en la página principal.
  - **Ejemplo de Respuesta**:
    ```json
    [
      {
        "id": 1,
        "title": "Producto A",
        "price": 20.5,
        "description": "Descripción del producto A",
        "category": "electronics",
        "image": "https://example.com/image.jpg"
      },
      ...
    ]
    ```

- **GET /products/category/:category**: Obtiene los productos filtrados por categoría.
  - **Uso**: Este endpoint se utiliza para filtrar los productos por categoría seleccionada por el usuario.
  - **Ejemplo de Respuesta**:
    ```json
    [
      {
        "id": 2,
        "title": "Producto B",
        "price": 15.0,
        "description": "Descripción del producto B",
        "category": "jewelery",
        "image": "https://example.com/image2.jpg"
      },
      ...
    ]
    ```

- **GET /products/:id**: Obtiene los detalles de un producto específico.
  - **Uso**: Este endpoint se utiliza para mostrar información detallada de un producto cuando el usuario selecciona uno.
  - **Ejemplo de Respuesta**:
    ```json
    {
      "id": 3,
      "title": "Producto C",
      "price": 30.0,
      "description": "Descripción del producto C",
      "category": "clothing",
      "image": "https://example.com/image3.jpg"
    }
    ```

El servicio de productos (`src/features/products/services/productsService.ts`) encapsula las llamadas a estos endpoints, proporcionando funciones reutilizables para interactuar con la API.

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
   ionic serve
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





