# Interfaces en espejo

Dos maquetas visuales hechas con Ionic y Angular a partir de referencias de interfaces conocidas. El proyecto recrea la estructura de un reproductor de Spotify y una publicación de Instagram, con navegación local entre ambas vistas.

## Maquetas

### Reproductor de Spotify

- Composición centrada con `ion-grid`, `ion-row` e `ion-col`.
- Carátula abstracta, información de pista y estado de reproducción.
- Barra de progreso con tiempos `03:25 / 04:15`.
- Controles de reproducción construidos con Ionicons.

### Feed de Instagram

- Publicación única dentro de un `ion-card`.
- Encabezado con avatar, usuario y ubicación.
- Fotografía principal editorial.
- Acciones de me gusta, comentario, compartir y guardar.

## Tecnologías

- Ionic 9
- Angular 22
- TypeScript
- SCSS
- Ionicons 8
- Capacitor 8

## Ejecutar en local

Requisitos: Node.js 22 o superior y npm.

```bash
npm install
ionic serve
```

La aplicación se abre normalmente en `http://localhost:8100`.

## Estructura principal

```text
src/
├── app/home/home.page.html   # Layout de las dos maquetas
├── app/home/home.page.scss   # Sistema visual responsive
├── app/home/home.page.ts     # Estado de navegación e iconos
└── global.scss               # Estilos base de Ionic
```

## Capturas

La app incluye un selector superior para alternar entre las dos pantallas. Para generar capturas de entrega, ejecuta `ionic serve` y toma una captura de cada estado en el navegador.

## Validación

```bash
npm run build
```

El build de producción queda en `www/`.
