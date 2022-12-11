import axios from "axios";
import Image from "next/image";
import React from "react";
import Cover from "../public/img/cover.jpg"
import ProfileImage from "../public/img/profileImg.jpg"
import { useSelector } from "react-redux";
import styles from "../styles/profileCard.module.css";




function ProfileCard() {
  const ProfilePage = true;
  const user = useSelector((state)=>state.users)
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ProfileImages}>
        <Image src={Cover} alt="" />
        <Image src={ProfileImage} alt="" />
      </div>
      <div className={styles.ProfileName}>
        <span>hELLO sIR</span>
        <span>Hello</span>
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
