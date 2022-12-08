import React, { useEffect, useState } from "react";
import PostSide from "../components/PostSide";
import ProfileSide from "../components/ProfileSide";
import RightSide from "../components/RightSide";
import styles from "../styles/home.module.css";
import ProtectedRoutes from "../components/ProtectedRoutes";



function Home() {
  return (
    <ProtectedRoutes>
      <div className={styles.Home}>
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </ProtectedRoutes>
  );
}
export default Home;
