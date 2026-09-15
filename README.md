# LearnFlow AI — Complete Frontend

A production-style React/Vite frontend for an AI-powered online lecture management and learning platform.

## Stack
- React + Vite
- Tailwind CSS
- React Router
- Axios-ready service architecture
- Lucide React
- Recharts-compatible analytics UI
- Vitest + Testing Library

## Run in VS Code
```bash
npm install
npm run dev
```

## Demo accounts
All use password `demo123`:
- Admin: `admin@example.com`
- Teacher: `teacher@example.com`
- Student: `student@example.com`

## Backend integration
Replace mock methods in `src/services/` with Axios calls to your Express API. Keep Zoom and AI credentials on the backend. Suggested endpoints: `/api/auth`, `/api/teachers`, `/api/students`, `/api/classes`, `/api/lectures`, `/api/summaries`, `/api/notifications`, `/api/analytics`.
