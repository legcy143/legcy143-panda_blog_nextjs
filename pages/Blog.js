import React, { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useState } from 'react'


//// step 1 : collect alll file from blogdata  directry ;
//// step 2: iterate through and display them;
export default function Blog() {
  const [blogs, setblogs] = useState()
  useEffect(()=>{
    fetch("http://localhost:3000/api/blog").then((e)=>{
      return e.json();
    }).then((da)=>{
      console.log(da);
      setblogs(da)
    })
  }, [])
  return (
   <div className={styles.blogwrap}>
    <h2>Latest blogs</h2>
   {blogs?.map((blogitem)=>{
      return<div className={styles.blogitembox} key={blogitem.tittle}>
        <h3>{blogitem.tittle}</h3>
        <p>{blogitem.content.substr(0,100)} ...</p>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <button className={styles.readbtn}>read more</button></Link>
        </div>
    })}
  </div>
  )
}
