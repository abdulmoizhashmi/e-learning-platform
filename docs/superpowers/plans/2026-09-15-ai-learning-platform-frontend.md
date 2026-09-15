# AI Learning Platform Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build a complete responsive React/Vite frontend for the AI-powered online lecture management and learning platform described in the design spec.

**Architecture:** Public/auth pages use dedicated layouts; authenticated pages use role layouts with protected routes. Shared components render domain-specific pages from relational mock data, while service modules expose backend-ready interfaces for auth, users, classes, lectures, Zoom, summaries, notifications, and analytics.

**Tech Stack:** React 18, Vite, JavaScript, Tailwind CSS, React Router, Axios, Lucide React, Recharts, Vitest, Testing Library.

**Spec:** `docs/superpowers/specs/2026-09-15-ai-learning-platform-design.md`

## Global Constraints
- Use React + Vite and Tailwind CSS.
- Use React Router for navigation and role-protected routes.
- Do not expose Zoom or AI provider secrets in frontend code.
- Keep API logic in service modules, not page components.
- Default visual language is light, soft, minimal, professional, and restrained claymorphic.
- Every specified route must contain meaningful UI; no “Coming Soon” placeholders.
- Support desktop, tablet, and mobile layouts.
- Provide loading, empty, error, success, and confirmation states where relevant.

---

### Task 1: Project foundation and core services
**Files:** `package.json`, Vite/Tailwind config, `src/main.jsx`, `src/index.css`, `src/services/*`, `src/data/*`, `src/context/*`, `test/*`.
**Interfaces:** `authService.login(email,password)`, `authService.logout()`, `authService.getCurrentUser()`, `roleHome(role)`; domain services expose list/get/create/update methods returning Promise-like results.
- [x] Write failing auth service tests.
- [x] Verify tests fail because service modules are absent.
- [x] Implement demo users, relational mock data, auth service, domain service adapters, theme/auth/notification contexts, and global CSS.
- [x] Run service tests and verify they pass.

### Task 2: Reusable design system and application layouts
**Files:** `src/components/common/*`, `src/components/layout/*`, `src/layouts/*`.
**Interfaces:** shared `Button`, `Card`, `Badge`, `Modal`, `Toast`, `DataTable`, `StatCard`, `EmptyState`, `ErrorState`, `Skeleton`, `PageHeader`, `Sidebar`, `Topbar`, `NotificationBell` components.
- [x] Add component-level behavior tests for navigation/authenticated role shell.
- [x] Implement reusable components and responsive layouts.
- [x] Verify component tests and production build syntax.

### Task 3: Public website and authentication
**Files:** `src/pages/public/*`, `src/pages/auth/*`, `src/routes/*`.
**Interfaces:** public routes and auth routes consume shared components and auth service; protected route redirects unauthenticated users.
- [x] Add route coverage tests for public/auth paths.
- [x] Implement Home, About, Features, How It Works, Contact, Login, Forgot/Reset Password, and Activation pages.
- [x] Verify navigation and role redirects.

### Task 4: Admin experience
**Files:** `src/pages/admin/*`, `src/components/admin/*`, `src/components/domain/*`.
**Interfaces:** admin pages consume teacher/student/class/lecture/summary/analytics services and support local mock mutations.
- [x] Add failing tests for admin route access and a CRUD success interaction.
- [x] Implement dashboard, management lists/details, lecture detail/AI processing views, summary library, analytics, notifications, profile, settings.
- [x] Verify admin workflows with demo account.

### Task 5: Teacher experience
**Files:** `src/pages/teacher/*`, `src/components/teacher/*`.
**Interfaces:** teacher pages consume class/student/lecture/summary/zoom services and only expose teacher-authorized controls.
- [x] Add failing tests for lecture scheduling state and teacher-only routing.
- [x] Implement teacher dashboard, classes/students, schedule, start/live/end flow, history, summaries, notifications, profile/settings.
- [x] Verify scheduling → live → processing → summary state flow.

### Task 6: Student experience
**Files:** `src/pages/student/*`, `src/components/student/*`.
**Interfaces:** student pages consume enrolled class/lecture/summary services and hide editing/admin controls.
- [x] Add failing tests for student route restrictions and summary read-only behavior.
- [x] Implement student dashboard, classes, upcoming/history/detail, summaries, notifications, profile/settings.
- [x] Verify student cannot reach admin/teacher routes.

### Task 7: Quality pass, documentation, and packaging
**Files:** `README.md`, `.env.example`, `.gitignore`, final source adjustments.
**Interfaces:** README documents local setup, demo credentials, route map, mock-to-MERN replacement points, and safe Zoom/AI integration.
- [x] Run full test suite.
- [x] Run production build.
- [x] Run final route/source checklist against the spec.
- [x] Package the project as a zip without `node_modules`.
