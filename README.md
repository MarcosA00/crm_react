Si tienes probleas para ejecutar scripts para usar la dependencia JSON-Server ejecuta las siguientes lineas de comando dentro del fichero principal del proyecto.

    - Get-ExecutionPolicy -List

Seguido de...
    
    - Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Para finalmente ejecutar:

    - json-server --watch db.json

<hr>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
