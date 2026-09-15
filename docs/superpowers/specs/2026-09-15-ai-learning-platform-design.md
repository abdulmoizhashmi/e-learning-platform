# AI Learning Platform Frontend Design

## Goal
Build a complete frontend-first React SaaS for Admin, Teacher, and Student workflows around classes, Zoom lectures, post-lecture AI summaries, notifications, and analytics.

## Architecture
The UI is divided into Public/Auth layouts and role-specific authenticated layouts. Pages consume reusable components and a service layer; services currently return realistic local mock data but expose backend-shaped methods so Axios/JWT/Express integration can replace the mock implementation without rewriting UI components.

The domain flow is Class → Teacher/Students → Lecture → Zoom state → recording/transcript processing → AI summary. Role guards determine access, while shared design primitives provide consistent soft-claymorphic styling, responsive behavior, feedback states, and accessibility.

## Product Decisions
- Default visual theme: light, soft, minimal, educational SaaS with restrained claymorphism.
- Demo authentication supports Admin, Teacher, and Student accounts only; public self-registration is excluded.
- Zoom and AI credentials are never present in the browser; frontend services represent backend calls.
- Mock data is relational and intentionally realistic; UI mutations update local session state for demonstrations.
- Every specified route has useful content, not a placeholder/coming-soon screen.
- Mobile uses compact navigation and responsive cards/tables.

## Route Coverage
Public: `/`, `/about`, `/features`, `/how-it-works`, `/contact`.
Auth: `/login`, `/forgot-password`, `/reset-password`, `/activate-account`.
Admin: dashboard, teachers/list/detail, students/list/detail, classes/list/detail, lectures/list/detail, summaries/list/detail, analytics, notifications, profile, settings.
Teacher: dashboard, classes/list/detail, students/list/detail, lectures/list/detail, schedule lecture, start/live lecture state, summaries/list/detail, notifications, profile, settings.
Student: dashboard, classes/list/detail, lectures/upcoming/history/detail, summaries/list/detail, notifications, profile, settings.

## Quality Requirements
- Responsive desktop/tablet/mobile.
- Reusable form, modal, table, card, badge, toast, skeleton, empty/error components.
- Route-level authorization with redirect to login or 403.
- Loading, empty, error, success, destructive confirmation states.
- Accessible labels, focus states, semantic controls, keyboard-friendly dialogs.
- Dark mode is optional but implemented and light mode is default.
- Build should pass Vite production compilation; tests cover core auth and routing/service behavior.
