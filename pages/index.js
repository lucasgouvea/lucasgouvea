import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import styles from '../styles/home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link"
import { loadLucasgouvea } from '../lib/services';

export async function getStaticProps({ locale }) {
  const lucasgouvea = await loadLucasgouvea(process.env.ENVIRONMENT, locale)
  return { props: { lucasgouvea } }
}

export default function Home({ lucasgouvea }) {
  const [count, setCount] = useState(0);
  const router = useRouter()

  useEffect(() => {
    if (count === 3) {
      router.push("/admin", "/admin", { locale: false })
    }
  }, [count])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6%', flexDirection: 'column' }}>
      <div className={styles.card}>
        <div style={{ padding: '1em' }}>
          <img id="abc" src="lucas-gouvea.jpg" onClick={() => setCount(count + 1)} />
          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: '10%' }}>
            <Link href="https://github.com/lucasgouvea">
              <FaGithub color='black' size={28}>
              </FaGithub>
            </Link>
            <Link href="https://www.linkedin.com/in/lucas-gouvea-56a288139/">
              <FaLinkedin size={28}>
              </FaLinkedin>
            </Link>
          </div>

        </div>
        <div className={styles.content}>
          <p className={styles.me}>About me</p>
          <p>{lucasgouvea.description}</p>
        </div>
      </div>
    </div>
  )
}