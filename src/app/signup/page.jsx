"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./signup.module.css";
import { registerUser } from "./../../services/authService";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg("");

    try {
      const data = {
        name: name || email.split("@")[0], // Use name if provided, otherwise use email prefix
        email,
        password,
        password_confirmation: password,
      };

      console.log("Sending registration data:", data);

      const response = await registerUser(data);
      console.log("Registration successful:", response);
      setStatusMsg("Registration successful!");

      // Redirect after a brief delay to show success message
      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    } catch (error) {
      console.error("Registration error in component:", error);
      setStatusMsg(`Registration failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Your existing UI elements */}
      <div className={styles.card}>
        <div>
          <div className={styles.logo}>
            <img src="/Group 1.svg" alt="Logo" />
          </div>
          <div className={styles.login}>
            <img src="/Line 4.svg" alt="Line" />
            <h2 className={styles.title}>Реєстрація</h2>
            <img src="/Line 3.svg" alt="Line" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                <img
                  src="/email.svg"
                  className={styles.Icon}
                  alt="Email icon"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className={styles.customInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                <img
                  src="/password.svg"
                  className={styles.Icon}
                  alt="Password icon"
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  className={styles.customInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className={styles.button}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Завантаження..." : "Далі"}
            </button>
          </form>
          {statusMsg && <p className={styles.statusMsg}>{statusMsg}</p>}
          <img src="/Line 3_2.svg" alt="Line" />
          <div className={styles.login2}>
            Якщо є аккаунт?{" "}
            <Link href="/signin" className={styles.link}>
              Увійти
            </Link>
          </div>
        </div>
        <p className={styles.socialText}>Реєстрація за допомогою</p>
        <div className={styles.socialIcons}>{/* Your social buttons */}</div>
      </div>
      {/* Your remaining UI elements */}
    </div>
  );
}
