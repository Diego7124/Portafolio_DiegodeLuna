# Portafolio profesional — Diego de Luna

Portafolio responsive construido con React, TypeScript y Vite. Presenta el perfil, stack, experiencia práctica y siete casos de estudio con una distinción explícita entre proyectos públicos verificados y trabajo privado o anonimizado.

## Ejecutar localmente

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

Comandos disponibles:

```bash
npm run check    # valida TypeScript
npm run verify   # comprueba datos esenciales y seguridad de enlaces
npm run build    # genera el build de producción en dist/
npm run preview  # sirve localmente el build generado
```

## Dónde actualizar el contenido

La información editable está centralizada en [`src/data.ts`](src/data.ts):

- `siteConfig`: nombre, correo, ubicación, disponibilidad, CV y redes.
- `technologyGroups`: tecnologías y su uso por categoría.
- `projects`: tarjetas, filtros, arquitectura, retos, resultados y enlaces.
- `experience`: experiencia práctica y soporte de TI.
- `workSteps`: metodología de trabajo.

Los tipos de los datos están en [`src/types.ts`](src/types.ts). La interfaz y sus componentes están en [`src/App.tsx`](src/App.tsx), mientras que toda la dirección visual y los breakpoints viven en [`src/styles.css`](src/styles.css).

## Añadir el CV

El botón no aparece mientras no exista un archivo real.

1. Copia el PDF a `public/cv-diego-de-luna.pdf`.
2. En `src/data.ts`, cambia `cvUrl` de `null` a `'/cv-diego-de-luna.pdf'`.
3. Ejecuta `npm run build` y comprueba la descarga.

## Formulario de contacto

La versión actual valida nombre, correo y mensaje, y después abre la aplicación de correo del visitante mediante `mailto:`. No muestra un éxito falso ni almacena información.

Para envío directo desde la página se necesita un proveedor real. Una opción apropiada es crear una Function de Vercel o un endpoint backend que reciba el formulario y llame a Resend, Formspree u otro servicio. La clave del proveedor debe configurarse como variable de entorno del servidor; nunca debe exponerse como variable `VITE_*` ni incluirse en el repositorio. Después se sustituye el bloque `mailto:` dentro de `handleSubmit` en `src/App.tsx` por una petición a ese endpoint, conservando los estados de carga, error y éxito.

## Desplegar en Vercel

1. Sube este directorio a un repositorio Git.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Usa el preset **Vite**.
4. Comando de build: `npm run build`.
5. Directorio de salida: `dist`.
6. Despliega y revisa navegación, formulario, enlaces y metadatos con la URL final.

También puede desplegarse en Netlify o Cloudflare Pages usando el mismo comando de build y el directorio `dist`.

## Desplegar en GitHub Pages

El workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construye y publica el sitio automáticamente con cada push a `main`.

1. Haz push al repositorio `Diego7124/Portafolio_DiegodeLuna`.
2. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación si GitHub no la detecta automáticamente.
3. Espera a que el workflow **Deploy portfolio to GitHub Pages** termine correctamente en la pestaña **Actions**.
4. El sitio quedará disponible en `https://diego7124.github.io/Portafolio_DiegodeLuna/`.

La configuración de Vite usa esa subruta solo dentro de GitHub Actions; `npm run dev` sigue funcionando desde la raíz local.

## Información pendiente antes de publicar

- PDF final del CV.
- Capturas reales autorizadas y URLs de demo, si existen.
- Confirmación de qué proyectos privados pueden describirse públicamente.
- Fechas o cargos profesionales, únicamente cuando puedan verificarse.
- Dominio personalizado y URL canónica para completar metadatos sociales.
- Proveedor de formulario, solo si se desea envío directo en lugar de correo local.

No es necesaria una fotografía para publicar: la composición visual actual es original y funciona sin imágenes de stock.

## Criterios de contenido

La revisión pública de GitHub confirmó los stacks de `CheckInApp`, `ChecadorTIID`, `TicketAutomatization` y la API `cielitohome_storage_backend`. Los casos sin repositorio público están etiquetados como privados o anonimizados. No se incluyen métricas, clientes, certificaciones ni demos no verificadas.
