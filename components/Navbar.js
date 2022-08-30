import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Navbar() {
  return(
  <nav className={styles.nav}>
    <ul>
  <Link href="/"><li>home</li></Link>
  <Link href="/Blog"><li>Blog</li></Link>
  <Link href="/About"><li>About us</li></Link>
  <Link href="/Contact"><li>Contact</li></Link>
    </ul>
  </nav>
  )

}
