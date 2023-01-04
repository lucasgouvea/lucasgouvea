import styles from '../../styles/blog.module.css';
import Link from "next/link"
import { format } from "date-fns"
import { loadPosts } from '../../lib/services';

export async function getStaticProps({ locale }) {
    const posts = await loadPosts(process.env.ENVIRONMENT, locale)
    return { props: { posts } }
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