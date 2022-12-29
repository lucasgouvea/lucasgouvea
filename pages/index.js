import styles from '../styles/home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link"

export async function getStaticProps(context) {
  let res

  switch (context.locale) {
    case 'en-US':
      res = await fetch('http://localhost:8080/v1/lucasgouvea', { headers: { "Accept-Language": "en_US" } })
      break
    case 'pt-BR':
      res = await fetch('http://localhost:8080/v1/lucasgouvea', { headers: { "Accept-Language": "pt_BR" } })
      break
    default:
      res = await fetch('http://localhost:8080/v1/lucasgouvea', { headers: { "Accept-Language": "en_US" } })
  }

  res = await res.json()
  return {
    props: { lucasgouvea: res.data[0] },
  }
}

export default function Home({ lucasgouvea }) {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6%', flexDirection: 'column' }}>
      <div className={styles.card}>
        <div style={{ padding: '1em' }}>
          <img id="abc" src="lucas-gouvea.jpg" />
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