import React from 'react'
import { Followers } from '../Data/FollowersData'
import styles from '../styles/followersCard.module.css'
import Image from 'next/image'



function FollowersCard() {
  return (
    <div className={styles.FollowersCard}>
      <h3>Who is following you</h3>
        {Followers.map((follower,i)=>{
          return(
            <div className={styles.follower} key={follower.username}>
              <div>
                <Image src={follower.img} alt="" 
                className={styles.followerImg}/>
                <div className={styles.name}>
                  <span>{follower.name}</span>
                  <span>{follower.username}</span>
                </div>
              </div>
              <button className={`button ${styles.fc_button}`}>
                Follow
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default FollowersCard
