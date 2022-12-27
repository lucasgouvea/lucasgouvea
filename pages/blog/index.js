import styles from '../../styles/blog.module.css';
import Link from "next/link"

function PostHeader() {
    return (
        <div className={styles.post}>
            <Link href="/blog/post">
                <div className={styles.card}>
                    <div className={styles.content}>
                        <p className={styles.me}>#1 - De quem é a culpa das demissões em massa no setor de TI?</p>
                        <p>economics - technology</p>
                        <p>{new Date().toISOString()}</p>
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