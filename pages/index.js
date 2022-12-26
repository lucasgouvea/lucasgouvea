import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={styles.card}>
        <p>Strongly interested in architecting, developing, and maintaining systems based
          on the state of the art technologies. Besides that, I enjoy
          reading books on themes like psychology, philosophy, and
          economics. Cyberpunk enthusiast, lover of sci-fi series and
          retrogaming.</p>
      </div>
    </div>
  )
}