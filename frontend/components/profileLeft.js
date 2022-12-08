import React from 'react'
import LogoSearch from '../components/logoSearch'
import FollowersCard from '../components/followersCard'
import InfoCard from '../components/infoCard'
import styles from '../styles/profileSide.module.css'

function ProfileLeft() {
  return (
    <div className={styles.ProfileSide}>
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
