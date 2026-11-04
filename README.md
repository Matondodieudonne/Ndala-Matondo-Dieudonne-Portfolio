# Mafesarlu Autos

Projet de site vitrine et e-commerce pour la vente de véhicules, conçu avec Next.js + TypeScript + Tailwind CSS.

## Fonctionnalités

- Page d’accueil moderne
- Catalogue de véhicules
- Section Login
- Section créer un compte
- Tableau de bord utilisateur
- Authentification locale avec localStorage

## Prérequis

- Node.js LTS installé
- npm

## Installation

```bash
npm install
```

## Démarrage

```bash
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

## Comptes de test

Le système de connexion est simulé localement via `localStorage`.

1. Créer un compte via la page `/register`
2. Se connecter via `/login`
3. Accéder au tableau de bord `/dashboard`

## Structure principale

```text
app/
  dashboard/
  login/
  register/
  globals.css
  layout.tsx
  page.tsx
components/
  auth-form.tsx
  car-card.tsx
  footer.tsx
  navbar.tsx
```
