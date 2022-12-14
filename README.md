# Afrodite Cartomante
<img width="660" alt="Screen Shot 2022-11-25 at 16 26 04" src="https://user-images.githubusercontent.com/15276832/204044837-fdd14203-6861-40d5-9e38-6fb2910199f7.png">


### <a href="https://afroditecartomante.netlify.app/">Site</a>

### Description

This is a React.js/Next.js based afrodite web page.

### Features

- 📱  Responsive design
- 🔥 [Next.js](https://nextjs.org) for Static Site Generator

- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)

- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx`

- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)

- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript

- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

#### 1. Clone repo

```
git clone 
cd afrodite
yarn
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open <http://localhost:3000> with your favorite browser to see your project.

#### 2. Add your own content

 1. **Content**: change the configuration in the ```src/config/index.json``` file to change the content of the landing page to match your use ```src/config/index.json```  folder and .
 2. **Images**:  add any images/icons..etc to the ```public/assets/images```  folder and update their reference source in ```src/config/index.json```.
 3. **Theme**:  to change the theme, update the ```tailwind.config.js```  file to match the theme of your branding. [Tutorial](https://tailwindcss.com/docs/configuration).

##### Deploy manually

You can see the results locally in production mode with:

  ```
yarn build
yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimised production build with:

```
yarn build-prod
```

## 💫 Deploy on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/4649d379-760f-4e2e-a11d-df09216e019b/deploy-status)](https://app.netlify.com/sites/afroditecartomante/settings/deploys)


### License

Licensed under the MIT License, Copyright © 2022
