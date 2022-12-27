import styles from '../../styles/blog.module.css';
import Link from "next/link"
import { format } from "date-fns"

function PostHeader() {
    return (
        <div className={styles.post}>
            <Link href="/blog/post">
                <div className={styles.card}>
                    <div className={styles.content}>
                        <p className={styles.me}>#1 - De quem é a culpa das demissões em massa no setor de TI?</p>
                        <p className={styles.keywords}>economics - technology</p>
                        <p>{format(new Date("2022-12-26T17:00:00"), 'dd/MM/yyyy - HH:mm')}</p>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default function Blog() {
    return (
        <div>
            <PostHeader />
        </div>
    )
}