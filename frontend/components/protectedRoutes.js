import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { hideLoading, showLoading } from "../redux/alertSlice";
import { useRouter } from "next/router";

function ProtectedRoutes(props) {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("http://localhost:5000/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (response.status) {
        dispatch(setUser(response.data.data));
      } else {
        console.log("Token error");
        localStorage.clear();
        router.push("/");
      }
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
      console.log(error.message, "Get User Error");
      router.push("/");
    }
  };
  if(typeof window !== 'undefined'){
    if (localStorage.getItem("token")) {
      return props.children;
    } else {
      return router.push('/');
    }
  }
}

export default ProtectedRoutes;
