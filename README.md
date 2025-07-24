# AIP-Todo

AI-powered productivity, modern UI, and seamless experience.

## Demo Video

<p align="center">
  <a href="https://youtube.com/shorts/QRZWhage2nc?feature=share" target="_blank">
    <img src="https://img.youtube.com/vi/QRZWhage2nc/hqdefault.jpg" alt="AIP-Todo Demo" style="max-width: 100%; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </a>
</p>

## About

AIP-Todo is a modern, AI-powered todo application that helps you generate, organize, and manage your tasks efficiently. The app features a beautiful, responsive UI and a seamless user experience.

**Key Features:**

-   AI-powered todo generation using Google Gemini LLM (gemini-2.5.flash-lite) with a custom prompt for title, description, and estimated date.
-   Basic CRUD operations: create, view, edit, and delete todos.
-   Todos are sorted by completion status (incomplete first) and latest estimated date.
-   Modern UI/UX with Tailwind CSS and dark mode support.
-   Best practices: Zustand selector pattern, React memoization, and logic optimization.
-   Uses React Router v7's `createBrowserRouter` for layout and page routing, and the `useOutlet` hook to display child components as pages from the Default Layout.
-   IndexedDB for local storage; no backend required.
-   Vercel serverless functions are used to securely proxy the Google AI API.

> **Note:** This app is device- and browser-specific and has no backend. Your data is stored in your browser, so todos will not sync or transfer across devices or browsers.

## Technologies Used

-   React
-   React Router v7
-   Tailwind CSS
-   Zustand
-   IndexedDB
-   Vercel Serverless
-   Google Gemini LLM

## File & Folder Structure

```
ai-powered-reactjs-todo/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── helpers/
│   ├── layouts/
│   ├── pages/
│   ├── stores/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   ├── routes.js
│   └── index.css
├── .env
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── pnpm-lock.yaml
```

1. **Clone the repository:**

    ```bash
    git clone branch_name
    cd directory
    ```

2. **Copy the example environment file:**

    ```bash
    cp .env.example .env
    # Then edit .env and set your desired values (e.g. API keys)
    ```

3. **Install dependencies:**

    ```bash
    pnpm install
    ```

4. **Start the development server (with Vercel):**

    ```bash
    vercel dev
    ```

---

**Developer:** [Saleh Ibne Omar](https://github.com/salehibneomar)  
[LinkedIn](https://www.linkedin.com/in/salehibneomar/)
