import React, { useState } from "react";
import styles from "../styles/rightSide.module.css";
import Home from "../public/img/home.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../components/trendCard";
import ShareModal from "../components/shareModal";
import Image from "next/image";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.RightSide}>
      <div className={styles.navIcons}>
        <Image src={Home} alt="" />
        <UilSetting />
        <img src="./img/noti.png" alt="" />
        <img src="./img/comment.png" alt="" />
      </div>

      <TrendCard />

      <button
        className={`button ${styles.r_button}`}
        onClick={() => setModalOpened(true)}
      >
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        Share
      </button>
      
    </div>
  );
}

export default RightSide;
