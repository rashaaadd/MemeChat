import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/profileCard.module.css";

function ProfileCard() {
  const ProfilePage = true;
  const user = useSelector((state)=> {
    console.log(state,'....................',state.user)
    return state.users.user
  })
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ProfileImages}>
        <img src="./img/cover.jpg" alt="" />
        <img src="./img/profileImg.jpg" alt="" />
      </div>
      <div className={styles.ProfileName}>
        <span>{user?.fname} {user?.lname}</span>
        <span>{user?.details.work}</span>
      </div>
      <div className={styles.FollowStatus}>
        <hr />
        <div>
          <div className={styles.follow}>
            <span>6890</span>
            <span>Followings</span>
          </div>
          <div className={styles.vl}></div>
          <div className={styles.follow}>
            <span>1M</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className={styles.vl}></div>
              <div className={styles.follow}>
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
