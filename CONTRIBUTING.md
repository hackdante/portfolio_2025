# Guía de Contribución - KENSAI Portfolio 2025

¡Gracias por tu interés en contribuir al **KENSAI Portfolio 2025**! Este proyecto es un portafolio 3D inmersivo que demuestra habilidades avanzadas en desarrollo web moderno. Esta guía te ayudará a entender cómo colaborar de manera efectiva.

## Acerca del Proyecto

Este es un portafolio interactivo desarrollado por KENSAI, especializado en:
- Desarrollo de software a medida
- Aplicaciones web y SaaS
- Soluciones empresariales
- UX/UI avanzado
- Experiencias 3D con Three.js

El proyecto utiliza tecnologías de vanguardia como Next.js 16, React 19, TypeScript, y Three.js para crear experiencias web inmersivas.

### Tecnologías Principales
- **Next.js 16.0.7**: Con App Router y Turbopack para desarrollo rápido.
- **React 19.2.0**: Última versión con nuevas características.
- **TypeScript 5**: Tipado estático completo.
- **Three.js 0.181.2**: Gráficos 3D con React Three Fiber, Drei, y Postprocessing.
- **GSAP 3.13.0**: Animaciones avanzadas.
- **Tailwind CSS 4**: Estilos modernos.
- **ESLint 9**: Linting avanzado.

## Requisitos Previos

Antes de contribuir, asegúrate de tener instalados:
- **Node.js 20+**: Versión requerida para compatibilidad con React 19 y Next.js 16.
- **pnpm**: Gestor de paquetes recomendado (más rápido y eficiente).
- **Git**: Para control de versiones.
- **Editor**: VS Code recomendado con extensiones de TypeScript y ESLint.

### Configuración Recomendada
- Instala las extensiones de VS Code: TypeScript Importer, ESLint, Tailwind CSS IntelliSense.
- Configura Prettier para formateo automático.

## Configuración del Entorno de Desarrollo

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/hackdante/portfolio_2025.git
   cd WEB_PAGE
   ```

2. **Instala dependencias:**
   ```bash
   pnpm install
   ```

3. **Verifica la instalación:**
   ```bash
   pnpm lint
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```

5. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador.**

### Scripts Importantes
- `pnpm dev --turbo`: Desarrollo con Turbopack (más rápido).
- `pnpm build`: Build de producción.
- `pnpm start`: Servidor de producción local.
- `pnpm lint`: Verificación de código con ESLint.

### Pre-commit Hooks
El proyecto utiliza Husky para automatizar verificaciones antes de commits:
- **TypeScript Check**: `pnpm tsc --noEmit` para verificar tipos.
- **Linting**: `pnpm lint` para asegurar calidad de código.

Los hooks se configuran automáticamente con `pnpm prepare` tras instalar dependencias.

### Lint-staged
Se usa lint-staged para ejecutar linters solo en archivos modificados durante el commit, optimizando el proceso de desarrollo.

## Estructura del Proyecto Detallada

### Arquitectura de Componentes
- **components/base/**: Componentes fundamentales reutilizables.
- **components/portfolio/**: Componentes específicos para escenas 3D.
- **components/composite/**: Componentes complejos que combinan múltiples elementos.

### Hooks Personalizados
- `useLoopAudio`: Reproducción de audio en bucle.
- `useFetch`: Peticiones HTTP con manejo de errores.
- `useScreen`: Detección de tamaño de pantalla y responsive.
- `useConfiguredTexture`: Configuración de texturas para Three.js.

### Tipos y Utilidades
- Definiciones TypeScript en `types/global/`.
- Utilidades matemáticas en `utils/`.

## Guías de Desarrollo

### Estilo de Código
- Usa **TypeScript** estrictamente en todos los archivos nuevos.
- Sigue las convenciones: PascalCase para componentes, camelCase para variables.
- Usa imports absolutos con `@/` (configurado en tsconfig.json).
- Mantén componentes pequeños y enfocados en una responsabilidad.

### Trabajo con Three.js
- Usa React Three Fiber para integración con React.
- Implementa loaders personalizados para modelos 3D.
- Optimiza rendimiento con `useMemo` y `useCallback` en componentes 3D.
- Maneja limpieza de recursos en `useEffect` return.

### Animaciones con GSAP
- Usa GSAP para animaciones complejas.
- Coordina con animaciones de Three.js para transiciones suaves.
- Implementa timelines para secuencias de animación.

### Responsive Design
- Usa el hook `useIsMobile` para detectar dispositivos.
- Ajusta configuraciones de cámara y efectos según el dispositivo.
- Optimiza assets para móviles (menos polígonos, texturas más pequeñas).

## Proceso de Contribución

### Tipos de Contribuciones
- **🐛 Corrección de Bugs**: Reporta y arregla issues.
- **✨ Nuevas Funcionalidades**: Mejoras en escenas 3D, UI/UX.
- **🎨 Mejoras Visuales**: Efectos 3D, animaciones, estilos.
- **📚 Documentación**: Mejora README, comentarios en código.
- **🔧 Optimización**: Rendimiento, carga, SEO.

### Flujo de Trabajo
1. **Elige un Issue**: Revisa issues abiertos o crea uno nuevo.
2. **Crea una Rama**: `git checkout -b feature/nueva-funcionalidad`.
3. **Desarrolla**: Implementa cambios siguiendo las guías.
4. **Prueba**: Verifica en diferentes dispositivos y navegadores.
5. **Commit**: Mensajes descriptivos en inglés.
6. **Push y PR**: Envía pull request con descripción detallada.

### Pull Requests
- Describe claramente los cambios y su impacto.
- Incluye screenshots/videos para cambios visuales.
- Asegura que pase `pnpm lint` y `pnpm build`.
- Referencia issues relacionados.

### Testing
Actualmente sin tests automatizados. Para contribuciones:
- Prueba manualmente en Chrome, Firefox, Safari.
- Verifica responsive en móvil y desktop.
- Asegura compatibilidad con diferentes GPUs para WebGL.

## Problemas Comunes

### Rendimiento 3D
- Si las escenas son lentas, reduce complejidad de geometrías.
- Usa `instanced meshes` para objetos repetitivos.
- Implementa LOD (Level of Detail) para modelos distantes.

### Audio
- Archivos de audio deben ser optimizados (< 5MB).
- Usa formatos compatibles (MP3, OGG).
- Maneja errores de carga de audio.

### Deployment
- Build falla: Verifica que todas las dependencias estén en package.json.
- Assets no cargan: Asegura rutas correctas en `public/`.

## Comunidad

- **Repositorio**: [https://github.com/hackdante/portfolio_2025](https://github.com/hackdante/portfolio_2025)
- **Issues**: Para reportar bugs o solicitar features.
- **Discussions**: Para preguntas generales.

## Licencia

Este proyecto está bajo la Licencia MIT. Al contribuir, aceptas que tus contribuciones sean licenciadas bajo los mismos términos.

## Reconocimiento

¡Gracias por contribuir al crecimiento de KENSAI! Tu trabajo ayuda a demostrar las posibilidades del desarrollo web moderno.

¿Tienes preguntas? Abre un issue en el [repositorio de GitHub](https://github.com/hackdante/portfolio_2025) o contacta al mantenedor.</content>
<parameter name="filePath">c:\Users\ISAGI\OneDrive\Escritorio\EXPERIENCE_PROJECT\Nextjs\WEB_PAGE\CONTRIBUTING.md