"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) {
      setError("That email and password don't match an account.");
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-brand">
          <span className="brand-badge">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4z" /></svg>
          </span>
          Story Galaxy
        </div>
        <h1 className="auth-title serif">Welcome back</h1>
        <p className="auth-sub">Log in to keep reading.</p>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn-gold auth-submit" type="submit" disabled={loading}>
            {loading ? "Logging in…" : "Log In"}
          </button>
        </form>
        <p className="auth-switch">
          New to Story Galaxy? <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
