# Daikoomyo.fr

Bienvenue sur le dépôt du site [Daikoomyo.fr](https://daikoomyo.fr), un site web full-stack performant, développé avec Next.js, Tailwind CSS, et une infrastructure optimisée pour le SEO et l'expérience utilisateur.

## Table des matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Déploiement](#déploiement)
- [Contact](#contact)

## Description

**Daikoomyo.fr** est un site web moderne et responsive, conçu pour offrir une navigation fluide et rapide grâce à l'utilisation des dernières technologies JavaScript et un hébergement optimisé sur un serveur VPS. Il intègre également des optimisations SEO avancées, comme la gestion des métadonnées avec `next-seo` et l'implémentation de rich snippets pour un meilleur référencement.

Le site est hébergé sur un **VPS**, ce qui offre plus de flexibilité en termes de gestion des ressources serveur et de personnalisation de l'environnement.

## Fonctionnalités

- **Full-stack avec Next.js v15** : Le site utilise Next.js 15, qui permet de générer du contenu statique (SSG) et de rendre côté serveur (SSR) pour améliorer le SEO et les performances.
  
- **SEO optimisé avec `next-seo`** : Gestion simplifiée des métadonnées et intégration des rich snippets pour optimiser le référencement naturel du site.

- **UI/UX responsive avec Tailwind CSS** : Bien que Tailwind CSS ne soit pas explicitement dans `package.json`, il est probablement utilisé pour le style, offrant un design moderne et adaptable à tous les types d'écrans.

- **Formulaires dynamiques avec Formik et Yup** : Gestion des formulaires utilisateurs simplifiée avec validation des champs côté frontend grâce à `Formik` et `Yup`.

- **Animations avec Framer Motion** : Utilisation de `framer-motion` pour des animations fluides et interactives, améliorant l'expérience utilisateur.

- **Icônes réactives avec React Icons** : Utilisation de `react-icons` pour des icônes adaptables et légères, contribuant à la réactivité du design.

- **Gestion de l'API avec Prisma** : Prisma est utilisé comme ORM pour gérer la base de données de manière efficace et optimisée.

- **Envoi d'e-mails avec Nodemailer** : `Nodemailer` est utilisé pour l'envoi de mails (notifications, formulaires de contact, etc.).

## Technologies utilisées

- **[Next.js](https://nextjs.org/)** v15.0.1 - Framework React full-stack pour les applications web modernes.
- **[React](https://reactjs.org/)** v19.0.0 (RC) - Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire pour un design responsive et modulable.
- **[Prisma](https://www.prisma.io/)** - ORM pour la gestion des bases de données.
- **[Formik](https://formik.org/)** - Gestionnaire de formulaires pour React.
- **[Yup](https://github.com/jquense/yup)** - Librairie de validation de schéma pour les formulaires.
- **[Framer Motion](https://www.framer.com/motion/)** - Librairie d'animations pour React.
- **[Nodemailer](https://nodemailer.com/)** - Solution pour l'envoi d'emails via Node.js.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Collection d'icônes pour React.
- **[next-seo](https://github.com/garmeeh/next-seo)** - Gestion des balises SEO et des rich snippets pour Next.js.

## Installation

### Prérequis

- Node.js (v16 ou supérieur)
- Yarn ou npm

### Étapes d'installation

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/david-vasseur/daikoomyo.git
   cd daikoomyo

