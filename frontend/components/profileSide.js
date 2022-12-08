import { StylesApiProvider } from '@mantine/core';
import React from 'react'
import FollowersCard from '../components/followersCard';
import LogoSearch from '../components/logoSearch';
import ProfileCard from '../components/profileCard';
import styles from '../styles/profileSide.module.css'


function ProfileSide() {
    return (
      <div className={styles.ProfileSide}>
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
      </div>
    )
  }
  
  export default ProfileSide;