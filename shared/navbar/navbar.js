import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <p className={styles.title}>
                <Link href="/">lucas gouvea</Link>
            </p>
            <ul>
                <li id="blog"><Link href="/blog">blog</Link></li>
                <li id="contact"><Link href="/contact">contact</Link></li>
            </ul>
        </div>
    )
}

