import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>

      <main>
        <h1 className={styles.title}>
          lucas <a href="#">gouvea</a>
        </h1>

        <div className={styles.card}>
            <p>Strongly interested in architecting, developing, and maintaining systems based
          on the state of the art technologies. Besides that, I enjoy
          reading books on themes like psychology, philosophy, and
          neuroscience. Cyberpunk enthusiast, lover of sci-fi series and
          retrogaming.</p>
        </div>
      </main>


      <style jsx>{`
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}