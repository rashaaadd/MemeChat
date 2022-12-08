import React from "react";
import Head from "next/head";
import styles from '../styles/layout.module.css'
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Layout({ children }) {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="App">
        {loading && (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row" className={styles.spinner_parent}>
            <CircularProgress color="inherit" className={styles.spinner_border}/>
          </Stack>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        {children}
      </div>
    </>
  );
}

export default Layout;
