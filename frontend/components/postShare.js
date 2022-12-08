import React, { useState } from "react";
import styles from "../styles/postShare.module.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useRef } from "react";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className={styles.PostShare}>
      <img src="./img/profileImg.jpg" alt="ProfileImage" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className={styles.postOptions}>
          <div
            className={styles.option}
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className={styles.option} style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className={styles.option} style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className={styles.option} style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className={`button ${styles.ps_button}`}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && 
        
        
        <div className={styles.previewImage}>
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
        </div>
        
        }
      </div>
    </div>
  );
}

export default PostShare;
