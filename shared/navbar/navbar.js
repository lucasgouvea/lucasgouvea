import Link from "next/link"
import Image from 'next/image';
import { useState } from "react"
import styles from "./navbar.module.css"
import { FaChevronRight } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { useRouter } from 'next/router';


const selectedStyle = {
    marginTop: '-0.18em',
    textDecoration: 'underline',
    textUnderlineOffset: '0.4em',
    transition: '0.15s'
}

const localeImgs = {
    "pt-BR": "/br.svg",
    "en-US": "/usa.svg",
}

const localesOptions = ["pt-BR", "en-US"]


export default function Navbar() {
    const router = useRouter()
    const [selected, setSelected] = useState('lucas')

    const optionLocale = localesOptions.filter((o) => o !== router.locale)[0]

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <FaChevronRight
                    className={styles.icon}
                    color="#FDFFF1"
                    size="12"

                    style={{ visibility: selected === 'lucas' ? 'visible' : 'hidden' }}
                />
                <p
                    className={styles.title}
                    onClick={() => setSelected('lucas')}
                >
                    <Link href="/">lucas gouvea</Link>
                </p>

            </div>

            <div className={styles.right_nav}>
                <div
                    id="blog"
                    style={selected === 'blog' ? selectedStyle : {}}
                    onClick={() => setSelected('blog')}
                >
                    <Link href="/blog" >
                        blog
                    </Link>
                </div>
                <div className={styles.i18n}>
                    <Image src={localeImgs[router.locale]} width={40} height={20} />
                    <FaCaretDown
                        className={styles.icon_arrow}
                        color="#FDFFF1"
                        size="12"
                    />
                    <Link href={`/${optionLocale}${router.pathname}`} locale={optionLocale}>
                        <div className={styles.i18n_content}>
                            <Image src={localeImgs[optionLocale]} width={40} height={20} />
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

