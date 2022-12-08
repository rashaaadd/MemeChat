import React from 'react'
import { PostsData } from '../Data/PostData'
import Post from '../components/post'
import styles from '../styles/posts.module.css'

function Posts() {
  return (
    <div className={styles.Posts}>
        {PostsData.map((post,id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts