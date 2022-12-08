import React from 'react'
import styles from '../styles/profile.module.css'
import ProfileLeft from '../components/profileLeft'
import ProfileCard from '../components/ProfileCard'
import PostSide from '../components/PostSide'
import RightSide from '../components/RightSide'

function Profile() {
  return (
    <div className={styles.Profile}>
        <ProfileLeft/>

        <div className={styles.Profile_center}>
            <ProfileCard/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile
