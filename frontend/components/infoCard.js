import React, { useState } from "react";
import styles from "../styles/infoCard.module.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../components/profileModal";

function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.InfoCard}>
      <div className={styles.infoHead}>
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.5rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className={styles.info}>
        <span>
          <b>Status</b>
        </span>
        <span> Single</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Lives in</b>
        </span>
        <span> Calicut</span>
      </div>
      <div className={styles.info}>
        <span>
          <b>Works at</b>
        </span>
        <span> Brototype</span>
      </div>

      <button className={`button ${styles.logout_btn}`}>Logout</button>
    </div>
  );
}

export default InfoCard;
