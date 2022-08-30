import React from 'react'
import style from '../styles/about.module.css'
import Link from 'next/dist/client/link'

export default function About() {
  return (
    <main className={style.main}>
      <div className={style.box}>
        <h1>About Legcy blog page</h1>
        <hr />
        <div className={style.about}>
        <h3>Inroduction</h3>
        <p>hello dear reader welcome you on my blog page.</p>
        <p>legcy blog is the next js website made for educational purpose , here i try to give my best blog ever .</p>

        <br />

        <h3>our services</h3>
        <p>
          <li>provide best web page</li>
          <li>help in programming problems</li>
          <li>provide rect web</li>
          <li>and so on..</li>
        </p>
        <br />
        <h3>contact us </h3>
        <p>feel free to contact us , visit <Link href="/Contact"><a>contact page</a></Link> </p>
        </div>
      </div>
    </main>
  )
}
