import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
// import PublicRoutes from "../components/publicRoutes"

// export async function getStaticProps() {
//   const response = await axios.get("http://localhost:5000/hello");
//     const res = response.data.data;
//     return {
//       props: {
//         users: res,
//       },
//     };
// }

function Auth() {
  const dispatch = useDispatch();
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (signup) {
      try {
        dispatch(showLoading());
        console.log(formData, "form.......data");
        const response = await axios.post(
          "http://localhost:5000/register",
          formData
        );
        console.log(response);
        dispatch(hideLoading());
        if (response.status) {
          toast.success(response.data.data.message);
          toast("Redirecting to Home Page");
          localStorage.setItem("token", response.data.data.token);
          router.push("/home");
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error, "Register error");
        toast.error(error.response.data.message);
      }
    } else {
      try {
        dispatch(showLoading());
        const response = await axios.post(
          "http://localhost:5000/login",
          formData
        );
        console.log(response, "resposnmeeaad");
        dispatch(hideLoading());
        toast.success(response.data.data.message);
        toast("Redirecting to Home Page");
        console.log(formData, "fo1111111111111", response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        router.push("/home");
      } catch (error) {
        dispatch(hideLoading());
        console.log(error, " Login error");
        toast.error(error.response.data.message);
      }
    }
  }
  return (
    // <PublicRoutes>
    <div className={styles.Auth}>
      <div className={styles.a_left}>
        <img src="./img/logo1.png" alt="Logo" />
        <div className={styles.Webname}>
          <h1>Ring!</h1>
          <h5>Connect.Express.Grow</h5>
        </div>
      </div>
      <div className="spinner-border text-white" role="status"></div>
      <div className={styles.a_right}>
        <form
          className={`${styles.infoForm} ${styles.authForm}`}
          onSubmit={handleSubmit}
        >
          <h3>{signup ? "Signup" : "Login"}</h3>
          {signup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className={styles.infoInput}
                name="fname"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.infoInput}
                name="lname"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div>
            {signup && (
              <input
                type="text"
                placeholder="Username"
                className={styles.infoInput}
                name="username"
                onChange={handleChange}
                required
              />
            )}
            {signup && (
              <input
                type="text"
                placeholder="Phone"
                className={styles.infoInput}
                name="phone"
                onChange={handleChange}
                required
              />
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className={styles.infoInput}
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={styles.infoInput}
              name="password"
              onChange={handleChange}
              required
            />
            {signup && (
              <input
                type="password"
                placeholder="Confiirm Password"
                className={styles.infoInput}
                name="confirmpass"
                onChange={handleChange}
                required
              />
            )}
          </div>

          <div>
            <p style={{ fontSize: "12px" }}>
              {signup ? "Already have an account? " : "Don't have an account? "}
              <span onClick={() => setSignup((prev) => !prev)}>
                {signup ? "Login!" : "Signup"}
              </span>
            </p>
          </div>
          <button className={`button ${styles.infoButton}`} type="submit">
            {signup ? "Register" : "Login"}
          </button>
        </form>
      </div>
    </div>
    // </PublicRoutes>
  );
}

export default Auth;
