# Amazon Clone

This project is an Amazon clone built with **Next.js** and **Drizzle ORM**. It features product listings, reviews, and product features, with data stored in a **Singlestore** database. The project is still in progress.

Live Version
A live version of this project can be accessed at:
[Fabazon](https://fabazon.netlify.app/)

## Features

- 🛒 Product listing with images, descriptions, ratings, and prices
- 💬 Customer reviews with ratings and comments
- ✨ Product features displayed in a structured format
- 🗃️ Mock data for quick setup and seeding
- 🚀 Scalable database schema using Drizzle ORM

## Technologies Used

- **Next.js** for the frontend and server-side rendering
- **Drizzle ORM** for database interaction
- **Singlestore** as the database
- **TypeScript** for type safety

## Project Structure

```
/src
  /db
    schema.ts      # Database schema with Drizzle ORM
  /components      # React components for the frontend
  /pages           # Next.js pages for the UI
  /utils           # Utility functions
```

## How to Run

1. Install dependencies:
   ```
   pnpm install
   ```
2. Start the development server:
   ```
   pnpm run dev
   ```
3. Visit `http://localhost:3000` to view the app.

## To Do

- [ ] Create user database
- [ ] Implement cart functionality
- [ ] Render product items on the frontend
