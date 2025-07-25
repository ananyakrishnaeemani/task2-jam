# KeshavSoft - JAMstack Portfolio Website

A modern, responsive business website built using the JAMstack architecture to showcase the services, journey, and team of **KeshavSoft**, a software solutions company. This project demonstrates best practices in performance, modular React components, static site generation, and seamless deployment.

## Project Overview

The site includes:

- A dynamic **Hero section** with responsive background images
- Dedicated pages: `Home`, `About`, and `Contact`
- Timeline and team showcase sections
- Responsive client testimonials
- Fully functional **Contact form** integrated with [Formspree](https://formspree.io)
- Clean UI built with Bootstrap 5
- JAMstack-compliant structure using **Next.js**

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Bootstrap 5, custom CSS
- **Deployment**: Vercel
- **Forms**: Formspree
- **Font Icons**: Font Awesome

## JAMstack Implementation

This project follows the JAMstack principles:

| Feature               | Implementation |
|-----------------------|----------------|
| **JavaScript**        | Interactive features and routing with Next.js and React |
| **APIs**              | Contact form handled via Formspree API |
| **Markup**            | Pre-rendered HTML via static site generation (SSG) using Next.js |

- **No server-rendered pages**; all pages are statically generated for performance
- Form submissions handled by a third-party API (Formspree), removing the need for a backend server
- Deployed to Vercel for CDN-backed delivery and fast global performance

## Features

- Modular React components: `Navbar`, `Hero`, `Footer`, `Timeline`, `Team`, `CallToAction`
- Shared `Hero` component supports variable height per page (e.g., 100vh on home, 80vh on about)
- Testimonial section with dynamic star rendering
- Contact form with validation and hover animation effects
- Mobile-first, fully responsive layout
- Minimal external dependencies, optimized for JAMstack deployment

## Folder Structure
```
├── public/
│ └── assets/ # Images used across the site
├── components/
│ ├── Navbar.js
│ ├── Hero.js
│ ├── Footer.js
│ ├── Timeline.js
│ ├── Team.js
│ └── CallToAction.js
├── pages/
│ ├── index.js # Home page
│ ├── about.js
│ └── contact.js
├── styles/
│ └── globals.css # Global CSS + Bootstrap imports
└── README.md
```
