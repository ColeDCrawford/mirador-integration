## Integrating Mirador

This repository is designed to show integrating Mirador 3 with modern frontend build systems.

### Dependencies

You will likely need to have at least the following dependencies available in your `package.json`.

 - `mirador`
 - `react`
 - `react-dom`
 - `mirador-image-tools` - A plugin just to test plugin integration. This currently points to the M4 Github branch until the M4 version is released on NPM. This requires a postinstall script to build the plugin.

### Webpack

See `./webpack` for a basic webpack setup for Mirador 4 + a plugin.

```sh
npm run webpack
```

### Parcel

See `./parcel`, but essentially it is just an html file referencing the JavaScript.

```sh
npm run parcel
```

### Vite
See `.vite`. 
    
```sh
npm run vite:serve
```

If you want to test the prod build:
- Switch the `script` includes in `vite/index.html`
- Run `npm run vite:build`
- View the app. For some reason `npm run vite:preview` (with the build script `"vite:preview": "vite preview --config vite/vite.config.mjs"`) does not work. `python3 -m http.server 2222` works fine.
