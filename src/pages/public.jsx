import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Video,
  Users,
  BookOpen,
  Bell,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { PublicNav, PublicFooter } from "../components/layout";
import { Card, Button } from "../components/common";
const features = [
  ["Live Zoom Lectures", Video],
  ["AI Lecture Summaries", Sparkles],
  ["Teacher & Student Management", Users],
  ["Class Management", BookOpen],
  ["Automated Notifications", Bell],
  ["Learning Analytics", BarChart3],
];
function PublicLayout({ children }) {
  return (
    <>
      <PublicNav />
      {children}
      <PublicFooter />
    </>
  );
}
export function Home() {
  return (
    <PublicLayout>
      <main>
        <section className="relative overflow-hidden bg-canvas">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-primary">
                <Sparkles className="h-3.5 w-3.5" /> AI-powered learning
                operations
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Manage classes.
                <br />
                <span className="text-primary">Teach smarter.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                A premium learning workspace for administrators, teachers and
                students — with live Zoom lectures and automated AI-powered
                lecture summaries.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/login" className="button-surface inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-claySm">
                  <ArrowRight className="h-4 w-4" />
                  Get Started
                </Link>
                <Link to="/features" className="button-surface inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-claySm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                  Explore Platform
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-xs font-semibold text-muted">
                {[
                  "Role-based access",
                  "Backend-ready APIs",
                  "Responsive by design",
                ].map((x) => (
                  <span key={x}>
                    <CheckCircle2 className="mr-1 inline h-4 w-4 text-emerald-500" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] bg-white p-4 shadow-clay">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted">
                        Today · Admin overview
                      </p>
                      <h3 className="mt-1 text-lg font-extrabold text-ink">
                        Learning at a glance
                      </h3>
                    </div>
                    <div className="rounded-xl bg-indigo-50 p-2 text-primary">
                      <BrainCircuit />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["Teachers", "5"],
                      ["Students", "15"],
                      ["Lectures", "15"],
                      ["AI Ready", "8"],
                    ].map(([a, b]) => (
                      <div
                        key={a}
                        className="rounded-xl bg-white p-3 shadow-claySm"
                      >
                        <p className="text-[10px] text-muted">{a}</p>
                        <p className="mt-1 text-lg font-extrabold text-ink">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-white p-4 shadow-claySm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-ink">
                          React Hooks Deep Dive
                        </p>
                        <p className="text-[11px] text-muted">
                          Ahmed Khan · MERN Batch 01
                        </p>
                      </div>
                      <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-600">
                        LIVE
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-2/3 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs font-bold text-indigo-900">
                          AI summary ready
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-indigo-700">
                          Main topics, key concepts and takeaways are organized
                          automatically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Everything in one workspace
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink">
              Built for the entire learning journey
            </h2>
            <p className="mt-3 text-muted">
              From class setup to live delivery and post-lecture knowledge
              capture.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([name, Icon]) => (
              <Card key={name} className="p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-ink">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Purpose-built workflows that stay simple for every role.
                </p>
              </Card>
            ))}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                How it works
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-ink">
                One flow from classroom to recap
              </h2>
              {[
                "Create your class and enroll students",
                "Schedule a Zoom-backed live lecture",
                "Students join from their workspace",
                "Lecture recording and transcript are processed",
                "AI creates a structured learning summary",
              ].map((x, i) => (
                <div key={x} className="mt-5 flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-indigo-50 text-sm font-extrabold text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm font-semibold text-slate-700">
                    {x}
                  </p>
                </div>
              ))}
            </div>
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-ink">Sample AI summary</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                Today’s lecture connected React state management with reusable
                component design. Students reviewed useState, useEffect and
                custom hooks, then practiced extracting logic into testable
                units.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["useState", "useEffect", "Custom Hooks", "Testing"].map(
                  (x) => (
                    <span
                      key={x}
                      className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700"
                    >
                      {x}
                    </span>
                  ),
                )}
              </div>
            </Card>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [
                "For Administrators",
                "Control users, classes, lectures and learning analytics.",
              ],
              [
                "For Teachers",
                "Deliver focused live sessions and refine AI-generated recaps.",
              ],
              [
                "For Students",
                "Join classes, attend lectures and revisit structured summaries.",
              ],
            ].map(([a, b]) => (
              <Card key={a} className="p-6">
                <h3 className="text-lg font-extrabold text-ink">{a}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              </Card>
            ))}
          </div>
        </section>
        <section className="bg-ink py-16 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-3xl font-extrabold">
              Ready to transform online learning?
            </h2>
            <p className="mt-3 text-slate-300">
              Explore the platform with role-based demo accounts and experience
              the complete lecture-to-summary flow.
            </p>
            <Link className="button-surface mt-7 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-claySm" to="/login">
              Enter Demo Workspace
            </Link>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
export function About() {
  return (
    <PublicLayout>
      <main className="bg-canvas py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Our story
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-ink">
            A calmer way to run online learning.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            LearnFlow was designed around a simple idea: educators should
            spend their energy teaching, not stitching together spreadsheets,
            meeting links and scattered notes.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                "Mission",
                "Make live learning operations clear and accessible.",
              ],
              ["Vision", "Turn every lecture into reusable knowledge."],
              [
                "Values",
                "Clarity, empathy, practical technology and responsible AI.",
              ],
            ].map(([a, b]) => (
              <Card key={a} className="p-5">
                <h3 className="font-bold text-ink">{a}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{b}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-white p-7 shadow-clay">
            <h2 className="text-2xl font-extrabold text-ink">
              How the platform works
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Administrators create the learning structure. Teachers schedule
              and deliver live lectures. Students receive reminders and join
              through their workspace. After a lecture, backend automation
              processes the recording/transcript and stores an AI-generated
              summary that authorized users can revisit.
            </p>
          </div>
          <h2 className="mt-12 text-2xl font-extrabold text-ink">Core team</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              "Olivia Carter · Product",
              "Ahmed Khan · Learning",
              "Maya Patel · AI Systems",
            ].map((x) => (
              <Card key={x} className="p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50 text-primary">
                  <Users />
                </div>
                <p className="mt-3 font-bold text-ink">{x}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </PublicLayout>
  );
}
export function Features() {
  return (
    <PublicLayout>
      <main className="bg-canvas py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Platform capabilities
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-ink">
              A full operating system for online lectures.
            </h1>
            <p className="mt-4 text-muted">
              Designed around the exact responsibilities of admins, teachers and
              students.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([name, Icon]) => (
              <Card key={name} className="p-6">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-bold text-ink">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Structured workflows, clear states and backend-ready
                  integration points.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </PublicLayout>
  );
}
export function HowItWorks() {
  return (
    <PublicLayout>
      <main className="bg-canvas py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h1 className="text-4xl font-extrabold text-ink">How it works</h1>
          <p className="mt-3 text-muted">
            A single connected flow keeps learning operations understandable.
          </p>
          <div className="mt-10 space-y-4">
            {[
              "Admin creates teachers, students and classes.",
              "Teacher schedules a lecture for an assigned class.",
              "The platform creates a Zoom meeting through the backend.",
              "Students receive a notification and join at the appropriate time.",
              "After the lecture, recording/transcript processing begins.",
              "AI structures the recap into topics, concepts, examples, homework and takeaways.",
              "Authorized teachers and students revisit the summary from lecture history.",
            ].map((x, i) => (
              <Card key={x} className="flex gap-4 p-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary font-bold text-white">
                  {i + 1}
                </div>
                <p className="pt-1 text-sm font-semibold text-slate-700">{x}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </PublicLayout>
  );
}
export function Contact() {
  return (
    <PublicLayout>
      <main className="bg-canvas py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Contact
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-ink">
              Let’s talk about your learning workflow.
            </h1>
            <p className="mt-4 text-muted">
              This demo uses a frontend-only contact experience. A future
              backend can connect the form to your support/email service.
            </p>
          </div>
          <Card className="p-6">
            <div className="space-y-4">
              <input className="input" placeholder="Full name" />
              <input className="input" placeholder="Email address" />
              <select className="input">
                <option>General inquiry</option>
                <option>Product demo</option>
                <option>Support</option>
              </select>
              <textarea
                className="input min-h-32"
                placeholder="How can we help?"
              />
              <Button className="w-full">Send message</Button>
            </div>
          </Card>
        </div>
      </main>
    </PublicLayout>
  );
}
