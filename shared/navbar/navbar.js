import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <ul className={styles.navbar}>
            <li><Link href="/">me</Link></li>
            <li><Link href="/blog">blog</Link></li>
            <li><Link href="/contact">contact</Link></li>
        </ul>
    )
}

