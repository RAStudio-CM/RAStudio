# RAStudio Design System

## Principio
La arquitectura, el documento y la comunicación forman un único sistema. El código sigue la misma lógica: contenido separado, componentes reutilizables y reglas visuales compartidas.

## Tokens
Los valores globales viven en `styles/tokens.css`:
- color
- tipografía
- espaciado
- ancho de contenido
- movimiento

## Contenido de proyectos
Los proyectos viven en `content/projects.ts`. Cada registro define narrativa, ficha, imágenes y navegación.

## Componentes base
- `components/ui/Container.tsx`
- `components/ui/Section.tsx`
- `components/ui/Eyebrow.tsx`
- `components/ui/EditorialQuote.tsx`

## Componentes de proyecto
- `components/project/ProjectHero.tsx`
- `components/project/DrawingGallery.tsx`
- `components/project/ProjectGallery.tsx`
- `components/project/ProjectFacts.tsx`
- `components/project/ProjectNavigation.tsx`

## Regla para proyectos nuevos
1. Agregar imágenes en `public/images/projects`.
2. Crear una entrada en `content/projects.ts`.
3. Crear la ruta que renderiza `<ProjectPage {...projectBySlug[slug]} />`.
