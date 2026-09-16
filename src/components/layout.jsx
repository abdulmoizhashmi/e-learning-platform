import { NavLink, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Video,
  Sparkles,
  BarChart3,
  Bell,
  Settings,
  UserRound,
  LogOut,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useApp } from "../context/AppContext";
import { Avatar, cn } from "./common";
import { Logo } from "./Logo";
const nav = {
  admin: [
    ["Dashboard", "/admin/dashboard", LayoutDashboard],
    ["Teachers", "/admin/teachers", Users],
    ["Students", "/admin/students", GraduationCap],
    ["Classes", "/admin/classes", BookOpen],
    ["Lectures", "/admin/lectures", Video],
    ["AI Summaries", "/admin/summaries", Sparkles],
    ["Analytics", "/admin/analytics", BarChart3],
    ["Notifications", "/admin/notifications", Bell],
  ],
  teacher: [
    ["Dashboard", "/teacher/dashboard", LayoutDashboard],
    ["My Classes", "/teacher/classes", BookOpen],
    ["My Students", "/teacher/students", GraduationCap],
    ["Schedule Lecture", "/teacher/schedule-lecture", Video],
    ["Lectures", "/teacher/lectures", Video],
    ["AI Summaries", "/teacher/summaries", Sparkles],
    ["Notifications", "/teacher/notifications", Bell],
  ],
  student: [
    ["Dashboard", "/student/dashboard", LayoutDashboard],
    ["My Classes", "/student/classes", BookOpen],
    ["Upcoming Lectures", "/student/lectures", Video],
    ["Lecture History", "/student/history", Video],
    ["AI Summaries", "/student/summaries", Sparkles],
    ["Notifications", "/student/notifications", Bell],
  ],
};
function Sidebar({ collapsed, onCollapse }) {
  const { user, logout } = useAuth();
  const items = nav[user?.role] || [];
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-slate-100 bg-white/90 p-3 backdrop-blur-xl transition-all lg:flex dark:border-slate-800 dark:bg-slate-950/90",
        collapsed ? "w-[82px]" : "w-[250px]",
      )}
    >
      <div className="mb-5 flex items-center justify-between px-2">
        <Link to="/" className="flex items-center gap-2">
          <Logo variant={collapsed ? "mark" : "full"} className="text-lg" />
        </Link>
        <button
          onClick={onCollapse}
          className="rounded-lg p-1.5 text-muted hover:bg-slate-100"
        >
          {collapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="mb-4 rounded-xl bg-[var(--lf-mint)] p-3 dark:bg-[var(--lf-mint)]">
        {!collapsed ? (
          <>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
              Workspace
            </p>
            <p className="mt-1 text-sm font-bold text-ink dark:text-white">
              {user?.title}
            </p>
          </>
        ) : (
          <div className="grid place-items-center">
            <Avatar initials={user?.avatar} />
          </div>
        )}
      </div>
      <nav className="flex-1 space-y-1">
        {items.map(([label, path, Icon]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                isActive
                  ? "bg-[var(--lf-primary-soft)] text-primary dark:bg-[var(--lf-mint)] dark:text-[var(--lf-primary)]"
                  : "text-slate-600 hover:bg-[var(--lf-primary-soft)] hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800",
                collapsed && "justify-center",
              )
            }
          >
            {<Icon className="h-4 w-4 shrink-0" />}
            {!collapsed && label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
        {[
          ["Profile", `/${user?.role}/profile`, UserRound],
          ["Settings", `/${user?.role}/settings`, Settings],
        ].map(([l, p, I]) => (
          <NavLink
            key={p}
            to={p}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <I className="h-4 w-4" />
            {!collapsed && l}
          </NavLink>
        ))}
        <button
          onClick={logout}
          className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </aside>
  );
}
function Topbar({ onMenu }) {
  const { user } = useAuth();
  const { dark, setDark } = useApp();
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 lg:px-7">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenu}
          className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="hidden max-w-md flex-1 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              className="input pl-9"
              placeholder="Search teachers, classes, lectures..."
            />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-xl p-2 text-muted hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to={`/${user?.role}/notifications`}
            className="relative rounded-xl p-2 text-muted hover:bg-slate-100"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
          </Link>
          <div className="hidden items-center gap-2 sm:flex">
            <Avatar initials={user?.avatar} />
            <div>
              <p className="text-xs font-bold text-ink dark:text-white">
                {user?.name}
              </p>
              <p className="text-[10px] capitalize text-muted">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export function AppShell({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <div className="min-h-screen bg-canvas dark:bg-slate-950">
      <Sidebar
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      />
      {mobile && (
        <div className="fixed inset-0 z-50 bg-slate-950/30 lg:hidden">
          <div className="h-full w-[280px] bg-white p-4 dark:bg-slate-900">
            <div className="flex justify-end">
              <button onClick={() => setMobile(false)}>
                <X />
              </button>
            </div>
            <MobileNav onClose={() => setMobile(false)} />
          </div>
        </div>
      )}
      <div
        className={cn(
          "min-h-screen transition-all",
          collapsed ? "lg:pl-[82px]" : "lg:pl-[250px]",
        )}
      >
        <Topbar onMenu={() => setMobile(true)} />
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}
function MobileNav({ onClose }) {
  const { user } = useAuth();
  return (
    <nav className="mt-5 space-y-1">
      {(nav[user?.role] || []).map(([l, p, I]) => (
        <NavLink
          onClick={onClose}
          key={p}
          to={p}
          className="flex items-center gap-3 rounded-xl px-3 py-3 font-semibold text-slate-600"
        >
          <I className="h-5 w-5" />
          {l}
        </NavLink>
      ))}
    </nav>
  );
}
export function PublicNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-ink"
        >
          <Logo className="text-lg" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted md:flex">
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link
          to="/login"
          className="button-surface rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-claySm"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}
export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 LearnFlow. Demo product interface.</span>
        <span>Built for modern online learning teams.</span>
      </div>
    </footer>
  );
}
