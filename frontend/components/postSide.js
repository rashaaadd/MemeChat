import React from 'react'
import Posts from '../components/posts'
import PostShare from '../components/postShare'
import styles from '../styles/postSide.module.css'

function PostSide() {
  return (
    <div className={styles.PostSide}>
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSide