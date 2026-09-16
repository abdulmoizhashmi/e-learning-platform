import {Logo} from '../components/Logo'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button, Card, Input } from "../components/common";
import { useAuth } from "../context/AuthContext";
import { roleHome } from "../services/authService";
function AuthFrame({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-canvas px-4 py-8">
      <div className="mx-auto max-w-md">
        <Link
          to="/"
          className="mb-7 flex justify-center gap-2 text-lg font-extrabold text-ink"
        >
          <Logo className="text-lg" />
        </Link>
        <Card className="p-6 sm:p-8">
          <h1 className="text-2xl font-extrabold text-ink dark:text-white">
            {title}
          </h1>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
          {children}
        </Card>
        <p className="mt-6 text-center text-xs text-muted">
          Demo environment · Backend-ready architecture
        </p>
      </div>
    </div>
  );
}
export function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const u = await login(email, password);
      nav(roleHome(u.role));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthFrame
      title="Welcome back"
      subtitle="Sign in to your learning workspace."
    >
      <form onSubmit={submit} className="mt-6 space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={error}
        />
        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted">
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgot-password" className="font-bold text-primary">
            Forgot password?
          </Link>
        </div>
        <Button className="w-full" loading={loading}>
          Sign in
        </Button>
      </form>
      <div className="mt-6 rounded-xl bg-indigo-50 p-4 text-xs text-indigo-800">
        <p className="font-bold">Demo credentials</p>
        <p className="mt-1">
          Admin: admin@example.com · Teacher: teacher@example.com · Student:
          student@example.com
        </p>
        <p className="mt-1">
          Password for all: <b>demo123</b>
        </p>
      </div>
    </AuthFrame>
  );
}
export function ForgotPassword() {
  return (
    <AuthFrame
      title="Forgot password?"
      subtitle="Enter your email and we’ll prepare a reset flow."
    >
      <div className="mt-6 space-y-4">
        <Input label="Email" placeholder="you@example.com" />
        <Button className="w-full">Send reset link</Button>
        <Link
          to="/login"
          className="flex items-center justify-center gap-1 text-sm font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </Link>
      </div>
    </AuthFrame>
  );
}
export function ResetPassword() {
  return (
    <AuthFrame title="Reset password" subtitle="Choose a new secure password.">
      <div className="mt-6 space-y-4">
        <Input label="New password" type="password" />
        <Input label="Confirm password" type="password" />
        <Button className="w-full">Update password</Button>
      </div>
    </AuthFrame>
  );
}
export function ActivateAccount() {
  const [done, setDone] = useState(false);
  return (
    <AuthFrame
      title={done ? "Account activated" : "Activate your account"}
      subtitle={
        done
          ? "Your account is ready to use."
          : "Your administrator created this account for you."
      }
    >
      {done ? (
        <div className="py-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          <p className="mt-3 text-sm text-muted">
            Your password has been set successfully.
          </p>
          <Link className="mt-5 inline-block" to="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <Input label="Email" placeholder="student@example.com" />
          <Input label="Set password" type="password" />
          <Input label="Confirm password" type="password" />
          <Button onClick={() => setDone(true)} className="w-full">
            Activate Account
          </Button>
        </div>
      )}
    </AuthFrame>
  );
}
