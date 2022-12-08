import React from 'react'
import styles from '../styles/trendCard.module.css'
import { TrendData } from '../Data/TrendData'

function TrendCard() {
  return (
    <div className={styles.TrendCard}>
        <h3>Trends for you</h3>
        {TrendData.map((trend)=>{
            return(
                <div className={styles.trend} key={trend.name}>
                    <span>#{trend.name}</span>
                    <span>#{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
