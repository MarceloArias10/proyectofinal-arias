
# Proyecto Final + Arias - E-commerce React

Este proyecto es una aplicación web de e-commerce (SPA) desarrollada con **React** y **Vite**, utilizando **Firebase Firestore** para la persistencia de datos y **Bootstrap** para el estilado.

## Tecnologías Usadas

*   **React** (v18+)
*   **Vite**
*   **React Router DOM** (Navegación)
*   **Firebase** (Firestore Database)
*   **Bootstrap** & **React-Bootstrap** (UI Framework)

## Instalación

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/Start-Warrior/ProyectoFinal+Arias.git
    cd ProyectoFinal+Arias
    ```

2.  Instalar dependencias:
    ```bash
    npm install
    ```

## Configuración (Firebase)

Crea un archivo `.env.local` en la raíz del proyecto basándote en el archivo `.env.example` y completa con tus credenciales de Firebase:

```env
VITE_API_KEY=tu_api_key
VITE_AUTH_DOMAIN=tu_auth_domain
VITE_PROJECT_ID=tu_project_id
VITE_STORAGE_BUCKET=tu_storage_bucket
VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_APP_ID=tu_app_id
```

## Ejecución

Para correr el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Deploy

El proyecto está listo para ser desplegado en plataformas como Vercel o Netlify. Asegúrate de configurar las variables de entorno en el panel de administración de la plataforma de hosting.

Para generar el build de producción:

```bash
npm run build
```

## Estructura del Proyecto

*   `src/components`: Componentes de la UI (NavBar, ItemListContainer, etc.)
*   `src/context`: Contexto global (CartContext)
*   `src/firebase`: Configuración de Firebase
