'use client'
import Link from "next/link"
import styles from "./authLinks.module.css"
import { useState } from "react"
export const AuthLinks = () => {
  const status = "notauthenticated"

  const [open, setOpen] = useState(false);
  return (
    <>
    {status === "notauthenticated" ? (
    <Link className={styles.links} href="/login">Login</Link>
    ) : (
    <>
      <Link className={styles.links} href="/write">Write</Link>
      <span className={styles.links}>Logout</span>
    </>
    )}
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>

    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/Contact">Contact</Link>
        {status === "notauthenticated" ? (
          <Link href="/login">Login</Link>
          ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.links}>Logout</span>
          </>
        )}
      </div>
    )}
    </>
  )
}
