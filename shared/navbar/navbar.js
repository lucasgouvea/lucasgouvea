import Link from "next/link"
import { useState } from "react"
import styles from "./navbar.module.css"
import { FaChevronRight } from 'react-icons/fa';

const selectedStyle = {
    marginTop: '-0.18em',
    textDecoration: 'underline',
    textUnderlineOffset: '0.4em',
    transition: '0.15s'
}

export default function Navbar() {
    const [selected, setSelected] = useState('lucas')
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                {selected === 'lucas' && <FaChevronRight className={styles.icon} color="#FDFFF1" size="12" />}
                <p
                    className={styles.title}
                    onClick={() => setSelected('lucas')}
                >
                    <Link href="/">lucas gouvea</Link>
                </p>
            </div>

            <ul>
                <li
                    id="blog"
                    style={selected === 'blog' ? selectedStyle : {}}
                    onClick={() => setSelected('blog')}
                >
                    <Link href="/blog" >
                        blog
                    </Link>
                </li>
                <li id="contact"
                    style={selected === 'contact' ? selectedStyle : {}}
                    onClick={() => setSelected('contact')}
                >
                    <Link href="/contact">
                        contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

