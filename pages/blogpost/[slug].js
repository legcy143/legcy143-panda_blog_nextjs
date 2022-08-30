import React from 'react'
import { useEffect } from "react";
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'

const Slug = () => {
    const [blog, setblog] = useState()
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        }).then((blogdata) => {
            setblog(blogdata)
        })                  
    }, [router.isReady])
  
    return <>
        <main className={styles.main}>
        <div className={styles.blogview}>
                    <h2>{blog && blog.tittle}</h2>
                    <p>{blog && blog.content}</p><br />
                    <h3>Author :  {blog && blog.author}</h3>
                </div>
        </main>
    </>;
}

export default Slug