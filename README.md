Plataforma de Reportes en Tiempo Real

========Justificación de la arquitectura elegida===============


La solución implementa una arquitectura cliente-servidor desacoplada, compuesta por un frontend desarrollado en React y un backend construido con Node.js y Express, conectado a una base de datos MongoDB. Esta arquitectura fue seleccionada porque permite una clara separación de responsabilidades, facilitando la escalabilidad, el mantenimiento y la evolución futura del sistema.

El frontend se encarga exclusivamente de la interfaz de usuario y la experiencia de interacción, mientras que el backend gestiona la lógica de negocio, la persistencia de datos y la comunicación en tiempo real. Esta separación permite desplegar ambos componentes de forma independiente y adaptarlos a distintos entornos.

Se incorporó comunicación en tiempo real mediante Socket.io, lo que mejora la experiencia de usuario al permitir actualizaciones automáticas sin recargar la página. Asimismo, el uso de MongoDB proporciona flexibilidad en la estructura de datos y escalabilidad ante posibles ampliaciones del sistema.

En conjunto, la arquitectura elegida responde a criterios de rendimiento, modularidad, mantenibilidad y buenas prácticas profesionales en el desarrollo de aplicaciones web modernas.

============Tecnologías utilizadas=================


En el frontend se utilizaron las siguientes tecnologías:

  *  React como biblioteca para la construcción de la interfaz.

  *  Vite como herramienta de desarrollo y empaquetado.

  *  Fetch API para comunicación asíncrona con el servidor.

  *  Socket.io-client para recepción de eventos en tiempo real.

En el backend se emplearon:

  *  Node.js como entorno de ejecución.

  *  Express como framework para la construcción de la API REST.

  *  Socket.io para comunicación en tiempo real.

  *  Mongoose como ODM para la gestión de datos en MongoDB.

  *  Como sistema de base de datos se utilizó MongoDB.

==========Pasos de instalación y ejecución=================


Para ejecutar el proyecto en entorno local, es necesario contar con Node.js y MongoDB instalados previamente.

Primero, se debe clonar el repositorio y acceder a la carpeta del proyecto.

En la carpeta correspondiente al backend se deben instalar las dependencias y ejecutar el servidor. El backend se ejecuta en el puerto 8080 y establece conexión con MongoDB.

Posteriormente, en la carpeta del frontend se deben instalar las dependencias y ejecutar el entorno de desarrollo. La aplicación frontend se ejecuta en el puerto 5173.

Una vez iniciados ambos servicios, la aplicación puede visualizarse en el navegador accediendo a la dirección local del frontend.
