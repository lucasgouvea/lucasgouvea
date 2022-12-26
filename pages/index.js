import styles from '../styles/home.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link"

const startedYear = 2018

function getWelcomeText() {
  const currentYear = new Date().getFullYear()
  const inTheIndustryYears = currentYear - startedYear
  const welcomeText = `Hello there, my name is Lucas Gouvea, and I'm a Software Engineer. I've been working in the industry for ${inTheIndustryYears} years. Besides technology, I enjoy reading books on themes like self-development, philosophy, and economics.`
  return welcomeText
}
export default function Home() {

  const welcomeText = getWelcomeText()
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
          <p className={styles.me}>Me</p>
          <p>{welcomeText}</p>
        </div>
      </div>


    </div>
  )
}