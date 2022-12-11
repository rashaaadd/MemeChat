import React, { useState } from "react";
import styles from "../styles/rightSide.module.css";
import Home from "../public/img/home.png";
import Noti from "../public/img/noti.png";
import Comment from "../public/img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../components/trendCard";
import ShareModal from "../components/shareModal";
import Image from "next/image";
import { useRouter } from "next/router";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  const router  = useRouter()
  const logOutUser = ()=>{
    localStorage.clear();
    router.push('/')
  }
  return (
    <div className={styles.RightSide}>
      <div className={styles.navIcons}>
        <Image src={Home} alt="" />
        <UilSetting />
        <Image src={Noti} alt="" />
        <Image src={Comment} alt="" />
      </div>

      <TrendCard />

      <button
        className={`button ${styles.r_button}`}
        onClick={() => setModalOpened(true)}
      >
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        Share
      </button>

      <button 
        className={`button ${styles.l_button}`}
        onClick = {()=> logOutUser()}
      >
        Logout
      </button>
      
    </div>
  );
}

export default RightSide;
