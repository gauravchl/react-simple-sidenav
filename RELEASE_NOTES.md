# Release Notes - v3.0.0

## What's New

**TypeScript Support**
- Full TypeScript rewrite with type definitions
- Exported types: `SideNavProps`, `MenuIconProps`

**85% Smaller Bundle**
- Reduced from 7.5 kB to **1.45 kB gzipped**
- React properly externalized (not bundled)

**Modern Build System**
- Migrated from Rollup to Vite
- Dual format: ES modules + UMD
- React 18 support

**Professional Demo**
- Redesigned with modern UI
- Live at: https://gauravchl.github.io/react-simple-sidenav/demo/

## Bundle Size Comparison

| Version | Minified | Gzipped |
|---------|----------|---------|
| v2.x    | 24.68 kB | 7.50 kB |
| **v3.0.0** | **3.67 kB** | **1.45 kB** |

## Breaking Changes

1. **React 18 Required** - Minimum version is now React 18.0.0
2. **ES Modules** - Package uses ES modules by default (UMD still available)
3. **Peer Dependencies** - `react` and `react-dom` must be installed separately

## Migration

For most users on React 18, simply update:

```bash
npm install react-simple-sidenav@latest
```

For React 16/17 users, upgrade React first:

```bash
npm install react@18 react-dom@18
npm install react-simple-sidenav@latest
```

## Full Changelog

**Added**
- TypeScript support
- Vite build system
- Modern demo site

**Changed**
- Updated to React 18
- 85% bundle size reduction
- ES module format

**Removed**
- Rollup/Babel configuration
- Bundled React code

---

**Version:** 3.0.0
**License:** MIT
