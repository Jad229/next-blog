import Link from "next/link"
import styles from "./authLinks.module.css"
export const AuthLinks = () => {
  const status = "authenticated"

  return (
    <>
    {status === "notauthenticated" ? (
    <Link href="/login">Login</Link>
    ) : (
    <>
      <Link href="/write">Write</Link>
      <span className={styles.links}>Logout</span>
    </>
    )}
    </>
  )
}
