import React from 'react'
import styles from '../styles/logoSearch.module.css'
import {UilSearch} from '@iconscout/react-unicons'


function LogoSearch() {
  return (
    <div className={styles.LogoSearch}>
      <img src="./img/logo1.png" alt="Logo"  style={{width:'50px',height:'40px'}}/>
      <div className={styles.Search}>
        <input type="text" placeholder='#Explore'/>
        <div className={styles.s_icon}>
          <UilSearch/>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch