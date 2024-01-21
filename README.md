<h1 align="center">
  <img alt="Alfabit Design System" title="#designsystem-alfabit" src="public/logo-alfabit-branco.png" height="150" />
</h1>

<p align="center">
   <h2 align="center">
    Alfabit Design System
    </h2>
</p>

<p align="center">
Alfabit Web Component Library
</p>

<p align="center">
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/kayoennrique/alfabit?color=4e5acf">

  <a aria-label="Last Commit" href="https://github.com/kayoennrique/alfabit/commits/develop-3">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/kayoennrique/alfabit?color=4e5acf">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-4e5acf">
  </a>
</p>
<p align="center">
  <a target="_blank" href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/static/v1?color=blue&label=Typescript&message=TS&?style=plastic&logo=Typescript">
  </a>
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img alt="Next.js" src="https://img.shields.io/static/v1?color=blue&label=Next&message=JS&?style=plastic&logo=Next.js">
  </a>
  <a target="_blank" href="https://storybook.js.org/docs/react/get-started/introduction">
    <img src="https://img.shields.io/static/v1?color=red&label=Storybook&message=SB&?style=plastic&logo=Storybook">
  </a>
  <a target="_blank" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?color=blue&label=Tailwind&message=CSS&?style=plastic&logo=TailwindCSS">
  </a>
  <a target="_blank" href="https://www.figma.com/">
    <img src="https://img.shields.io/static/v1?color=red&label=Figma&message=%20%20&%253Fstyle=plastic&logo=Figma">
  </a>
</p>

## What is it?

Alfabit is an innovative technology company dedicated to providing creative and efficient solutions for its customers. Recognizing the importance of consistent and intuitive design across all its platforms and products, Alfabit decided to invest in a cutting-edge design system.
<br> </br>

## 👨‍💻 How to install?

```bash
# Using  npm
npm i designsystem-alfabit

# Using  yarn
yarn add designsystem-alfabit
```

## 🏃How to use?

The designsystem-alfabit library was created to work in Next.js+TailwindCSS applications. Therefore, to use it, remember to create your applications with this structure. In order for you to be able to use all the library components without problems, additional configuration is necessary in your project. Let's do this step by step:

1.  In the same file that you import the tailwind layers (usually the `globals.css` or `styles.css` file) import the CSS file from the Alfabit library as well

    ```tsx
    import "./globals.css";
    import "designsystem-alfabit/styles/globals.css";
    ```

2.  Inside the Tailwind configuration file, `tailwind.config.js`, add the Alfabit library settings as `preset`:

    ```tsx
    const config = {
      presets: [require("designsystem-alfabit/tailwind.config")],
      // ... other settings...
    };
    ```

3.  Add in the same configuration file the reference of the Alfabit library files to be covered by Tailwind and processed in PostCSS. To do this, simply add the path of the Alfabit library components within the `content` property, in the same tailwind configuration file as in the previous step:

    ```tsx
    const config = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/designsystem-alfabit/components/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      // ... demais configurações ...
    };
    ```

4.  Configure Next.js transpile in the `next.config.js` file. In the new version of Next 13 we have a feature that will help transpile our library. Without this we will receive successive compilation errors because Next will not understand our library.

    ````jsx
    /\*_ @type {import('next').NextConfig} _/
    const nextConfig = {
    transpilePackages: ["designsystem-alfabit"],
    };

        module.exports = nextConfig;
        ```

    And now you can use the library components on your pages:
    ````

```tsx
"use client";
import { Typograph } from "designsystem-alfabit/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center text-gray-950 bg-gray-800">
        <Typograph element="h3" size="title3" className="font-black text-white">
          Hello World!
        </Typograph>
      </div>
    </main>
  );
}
```

<!-- <img alt="Example of using the Quero delivery library" src="example/public/exampleInput.png" height="80" /> -->

## 🎨 What colors were used in the library pattern?

The entire visual identity of the library, such as components, spacing and colors, can be accessed on [Figma by clicking on this link](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=0-1&t=GuaFV9cp30SS2di9-0).

> Also check out the library documentation for more usage details [Documentation](https://designsystem-alfabit.vercel.app/?path=/docs/design-tokens-colors--docs).

## 📚 What dependencies are used in this library?

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Class Variance Authority (cva)](https://cva.style/docs)
- [classnames](https://github.com/JedWatson/classnames)
- [HeadlessUI](https://headlessui.com/)
- [heroicons](https://heroicons.com/)
- [Chromatic](https://www.chromatic.com/)

## 📝 Documentation

To check the documentation click [here](https://designsystem-alfabit.vercel.app/?path=/docs/design-tokens-colors--docs)

- To check the documentation under development, do

```bash
npm run storybook or yarn storybook
```

## Developers/Contributors :octocat:

This is the team responsible for creating this component library

| [<img src="https://github.com/kayoennrique.png" width=120><br><sub>Kayo Ennrique</sub>](https://github.com/kayoennrique) | 
| :---:

## License

The [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) (GPL)

Copyright :copyright: 2024 - Alfabit Design System
