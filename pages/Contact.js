import React from 'react'
import style from '../styles/about.module.css'

export default function Contact() {
  return (
  <main className={style.main}>
<div className='box'>
  <form className={style.form}>
    <h1>contact us</h1>
    <input type="text"  placeholder='name'/>
    <input type="text"  placeholder='email'/>
    <textarea name="txt-area" cols="30" rows="10" placeholder='enter you query'></textarea>
    <button>submit</button>
  </form>
</div>
  </main>
  )
}
