# Flavorful Folios - Catering Personal Website

Welcome to Flavorful Folios, a catering personal website showcasing a delightful portfolio and services. This project is built using Next.js, React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Lighthouse Report](#lighthouse-report)
- [Tech Stack](#tech-stack)

## Introduction

Flavorful Folios is a catering personal website that allows users to explore a diverse portfolio of catering services, discover the mission behind the culinary creations, and find information about the services provided. The website is designed to provide an immersive and visually appealing experience to potential clients and showcase the expertise of the catering business.

## Installation

To run the Flavorful Folios project locally, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/dannycahyo/flavorful-folios.git
```

2. Navigate to the project directory.

```bash
cd flavorful-folios
```

3. Install the dependencies.

```bash
npm install
```

## Usage

To start the development server, use the following command:

```bash
npm run dev
```

The development server will be running at `http://localhost:3000`. Open your web browser and navigate to this URL to view the website.

To run the linting tool, use the following command:

```bash
npm run lint
```

To run the storybook, use the following command:

```bash
npm run storybook
```

The storybook will be running at `http://localhost:6006`. Open your web browser and navigate to this URL to view the storybook.

## Deployment

Flavorful Folios can be easily deployed using Vercel, a platform optimized for Next.js applications. Follow these steps to deploy your project:

1. Sign up for a Vercel account if you don't have one.
2. Install the Vercel CLI globally on your machine.

```bash
npm install -g vercel
# or
yarn global add vercel
```

3. Build the production version of the project.

```bash
npm run build
# or
yarn build
```

4. Deploy the project using Vercel.

```bash
vercel --prod
```

## Lighthouse Report

Below is the Lighthouse report for Flavorful Folios, showing the performance, accessibility, best practices, and SEO scores:

- Desktop Version Report

![Desktop Lighthouse Report](https://res.cloudinary.com/du5jbmwz5/image/upload/v1690082659/Flavorful%20Folios%20Lighthouse%20Desktop%20Report.png)

You can access the live Lighthouse report at [Desktop Lighthouse Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fflavorful-folios.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext).

- Mobile Version Report

![Mobile Lighthouse Report](https://res.cloudinary.com/du5jbmwz5/image/upload/v1690082801/Flavorful%20Folios%20Lighthouse%20Mobile%20Report.png)

You can access the live Lighthouse report at [Mobile Lighthouse Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fflavorful-folios.vercel.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext).

## Tech Stack

### Next.js

Next.js is a powerful and popular React framework for building server-side rendered (SSR) and static websites. It simplifies the creation of React applications by providing a seamless development experience and supporting various advanced features like server-side rendering, automatic code splitting, static site generation, and more. With Next.js, Flavorful Folios benefits from improved performance, SEO, and better user experience.

### React

React, a JavaScript library for building user interfaces, forms the core of Flavorful Folios. Its component-based architecture enables efficient code organization, reusability, and maintainability. With React's virtual DOM, the website efficiently updates and renders changes to user interactions, resulting in a smooth and responsive experience.

### TypeScript

TypeScript adds static typing to JavaScript, making Flavorful Folios more robust and scalable. By catching type-related errors during development, TypeScript helps maintain a reliable codebase, enhances developer productivity, and promotes code readability. The combination of TypeScript and React provides a powerful toolset for creating complex applications with confidence.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that powers the design of Flavorful Folios. Its utility classes offer a practical and efficient approach to styling components, allowing developers to build custom and responsive designs with ease. Tailwind CSS fosters a consistent design language, accelerates development, and enhances the overall user experience.

### Vercel

Vercel is a cloud platform specialized for deploying and hosting modern web applications. It seamlessly integrates with Next.js, simplifying the deployment process for Flavorful Folios. With Vercel's powerful infrastructure, automatic scaling, and global CDN, the website enjoys lightning-fast loading times and reliable performance across the globe.
