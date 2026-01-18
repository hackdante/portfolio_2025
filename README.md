# KENSAI Portfolio 2025 - Experiencia Web 3D Inmersiva

Un portafolio interactivo y dinámico desarrollado por KENSAI, liderado por Leandro González. Esta aplicación combina tecnologías web modernas con gráficos 3D avanzados para crear experiencias inmersivas, mostrando habilidades en desarrollo de software, UX/UI, y soluciones digitales innovadoras.

## 🚀 Características Principales

- **Escenas 3D Interactivas**: Navegación fluida entre escenas de introducción, portafolio, biografía y contacto usando Three.js y React Three Fiber.
- **Animaciones Avanzadas**: Integración con GSAP para transiciones suaves y efectos visuales.
- **Audio Inmersivo**: Controladores de audio con música de fondo y efectos sonoros.
- **Soporte de Temas**: Modo claro/oscuro/sistema con transiciones suaves.
- **Responsive y Optimizado**: Diseño adaptativo con loaders personalizados y detección de dispositivos móviles.
- **Dashboard Administrativo**: Área privada para gestión de proyectos y métricas.
- **Juegos Sociales**: Experiencias interactivas con service workers para funcionalidad offline.
- **SEO Optimizado**: Metadatos completos para motores de búsqueda.

## 🛠️ Tecnologías y Librerías

- **Next.js 16.0.7**: Framework de React con App Router y Turbopack.
- **React 19.2.0**: Biblioteca principal para interfaces de usuario.
- **TypeScript 5**: Tipado estático para mayor robustez.
- **Three.js 0.181.2**: Motor de gráficos 3D con React Three Fiber y Drei.
- **GSAP 3.13.0**: Librería de animaciones para transiciones fluidas.
- **@gsap/react 2.1.2**: Hook useGSAP para integrar GSAP con React.
- **Tailwind CSS 4**: Framework de estilos con PostCSS.
- **next-themes 0.4.6**: Gestión de temas claro/oscuro/sistema.
- **React Three Postprocessing**: Efectos visuales avanzados (bloom, depth of field, etc.).
- **React Three Rapier**: Física para interacciones 3D.
- **ESLint 9**: Linting y formateo de código.

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 20+
- pnpm (recomendado) o npm/yarn

### Pasos de Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/hackdante/portfolio_2025.git
   cd WEB_PAGE
   ```

2. **Instala dependencias:**
   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```

4. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador.**

### Scripts Disponibles
- `pnpm dev`: Inicia servidor de desarrollo con Turbopack.
- `pnpm lint`: Ejecuta ESLint para verificar código (sin warnings permitidos).
- `pnpm typecheck`: Ejecuta verificación de tipos TypeScript.
- `pnpm prebuild`: Ejecuta lint y typecheck antes del build.
- `pnpm build`: Construye la aplicación para producción.
- `pnpm start`: Inicia servidor de producción.
- `pnpm prepare`: Configura Husky para pre-commits.

## 🐳 Docker

El proyecto incluye soporte para Docker para facilitar el despliegue y desarrollo consistente.

### Construir Imagen Docker
```bash
docker build -t kensai-portfolio .
```

### Ejecutar Contenedor
```bash
docker run -p 3000:3000 kensai-portfolio
```

El Dockerfile utiliza Node.js 20 con Alpine, instala pnpm globalmente, y optimiza la construcción para producción.

## 🏗️ Arquitectura del Proyecto

```
WEB_PAGE/
├── app/                    # Páginas y layouts (Next.js App Router)
│   ├── (public)/          # Páginas públicas con escenas 3D
│   ├── dashboard/         # Dashboard administrativo
│   └── juegos/            # Juegos sociales con SW
├── components/            # Componentes modulares
│   ├── base/              # Componentes básicos (sidebar, navbar, loaders, themes)
│   ├── card/              # Componentes de tarjetas
│   ├── composite/         # Componentes complejos (hero 3D, navegación)
│   └── portfolio/         # Componentes 3D especializados
├── hooks/                 # Hooks personalizados (audio, fetch, screen, three)
├── types/                 # Definiciones TypeScript globales
├── utils/                 # Utilidades matemáticas y helpers
├── public/                # Assets estáticos (modelos 3D, fuentes, música)
└── apis/                  # APIs locales (escenas principales)
```

### Componentes 3D Clave
- **Hero3D**: Canvas principal con navegación entre escenas.
- **MainSceneStage**: Control de navegación y acciones.
- **CameraControllerMain**: Control de cámara con animaciones.
- **PostProcessingEffects**: Efectos visuales (bloom, DOF, etc.).
- **MainEnvironment**: Entorno 3D con iluminación y física.
- **ThemeSwitcher**: Componente para alternar entre temas claro/oscuro.
- **ThemeProviderSwitch**: Proveedor de temas configurado globalmente.

## 🎮 Funcionalidades

### Experiencia Principal
- **Escena de Introducción**: Landing con música y animaciones 3D.
- **Portafolio**: Galería interactiva de proyectos.
- **Biografía**: Información personal con elementos 3D.
- **Contacto**: Formulario con validación.

### Dashboard
- **Contador**: Métricas en tiempo real.
- **Gestión de Proyectos**: CRUD de portafolio.
- **Administración de Usuarios**: Control de acceso.

### Juegos
- **Sociales**: Experiencias multiplayer con persistencia offline.

## 🌐 Deployment

El proyecto está desplegado en Vercel con Docker support:

- **URL Principal**: [kensai.solutions](https://kensai.solutions)
- **URL de Desarrollo**: [portfolio-2025-q0vj385f7-leandro-gonzalezs-projects.vercel.app](https://portfolio-2025-q0vj385f7-leandro-gonzalezs-projects.vercel.app)

### Configuración de Docker
El proyecto incluye un Dockerfile optimizado para despliegue con Node.js 20 y pnpm.

## 🤝 Contribución

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para guías detalladas sobre cómo contribuir al proyecto.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**KENSAI - Leandro González**
- Desarrollo de software a medida
- Soluciones web y SaaS
- Experiencias 3D y UX/UI avanzado
- Especialista en Vue.js, React, Next.js y TypeScript

## 📞 Contacto

Para colaboraciones o consultas, abre un issue en el [repositorio de GitHub](https://github.com/hackdante/portfolio_2025) o contacta directamente.
