import React from 'react'
import styles from '../styles/post.module.css'
import Comment from '../public/img/comment.png'
import Share from '../public/img/share.png'
import Heart from '../public/img/like.png'
import NotLike from '../public/img/notlike.png'
import Image from 'next/image'


function Post({data,id}) {
  return (
    <div className={styles.Post}>
         <Image src={data.img} alt="PostImage" objectFit="cover" objectPosition="center"/>

        <div className={styles.postReact}>
            <Image src={data.likes?Heart:NotLike} alt="" style={{width:'30px',height:'30px'}} />
            <Image src={Comment} alt="" />
            <Image src={Share} alt="" />
        </div>

       <span style={{color:'var(--gray) ',fontSize:'13px'}}>{data.likes} likes</span> 

       <div className={styles.details}>
            <span><b>{data.name} </b></span>
            <span> {data.desc}</span>
       </div>
    </div>
  )
}

export default Post
