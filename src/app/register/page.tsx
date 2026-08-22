"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    const signInRes = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (signInRes?.error) {
      router.push("/login");
      return;
    }
    router.push("/");
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
        <h1 className="auth-title serif">Create your account</h1>
        <p className="auth-sub">Free to join &mdash; start reading in a minute.</p>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="auth-field">
            <label htmlFor="name">Name (optional)</label>
            <input id="name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required minLength={8} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn-gold auth-submit" type="submit" disabled={loading}>
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
