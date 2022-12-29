import styles from '../../styles/blog.module.css';
import Link from "next/link"
import { format } from "date-fns"

export async function getStaticProps(context) {
    let res

    switch (context.locale) {
        case 'en-US':
            res = await fetch('http://localhost:8080/v1/posts', { headers: { "Accept-Language": "en_US" } })
            break
        case 'pt-BR':
            res = await fetch('http://localhost:8080/v1/posts', { headers: { "Accept-Language": "pt_BR" } })
            break
        default:
            res = await fetch('http://localhost:8080/v1/posts', { headers: { "Accept-Language": "en_US" } })
    }

    res = await res.json()
    return {
        props: { posts: res.data },
    }
}

function PostHeader({ posts }) {
    return (
        <div className={styles.post}>
            <Link href="/blog/post">
                <div className={styles.card}>
                    <div className={styles.content}>
                        <p className={styles.me}>{posts[0].title}</p>
                        <p className={styles.keywords}>{posts[0].keywords.join(" - ")}</p>
                        <p>{format(new Date(posts[0].created_at), 'dd/MM/yyyy - HH:mm')} h</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function Blog({ posts }) {
    return (
        <div>
            <PostHeader posts={posts} />
        </div>
    )
}