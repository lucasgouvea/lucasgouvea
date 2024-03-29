import styles from '../../styles/post.module.css';

import { loadPosts } from '../../lib/services';
import { format } from "date-fns"

export async function getStaticProps({ locale }) {
    const posts = await loadPosts(process.env.ENVIRONMENT, locale)
    return { props: { posts } }
}

export default function Post({ posts }) {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{posts[0].title}</h3>
                    <h4 className={styles.date}>{format(new Date(posts[0].created_at), 'dd/MM/yyyy - HH:mm')} h</h4>
                </div>
                <div className={styles.text}>
                    <div dangerouslySetInnerHTML={{ __html: posts[0].text }} />
                </div>
                <p className={styles.keywords}><b>keywords:</b> economics - technology</p>
            </div >
        </div>

    )
}