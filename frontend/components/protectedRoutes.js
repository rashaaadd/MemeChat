import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { hideLoading, showLoading } from "../redux/alertSlice";
import { useRouter } from "next/router";

export async function getStaticProps(){
    const user = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    const result = await axios.get("http://localhost:5000/user",{headers : {
      Authorization : 'Bearer ' + localStorage.getItem('token')
    }})
    console.log(result,'axios result .................2222')
    const data = result?.data
    if(!user){
      dispatch(setUser(data))
    }
    return {
      props:{
        users:data
      }
    }
  
};

function ProtectedRoutes({users,...props}) {

  const user = useSelector((state) => {
    console.log(state, "........prtectedroute", state.users);
    return state.users;
  });
  console.log(users,'........userData')
  const dispatch = useDispatch();
  const router = useRouter();
  // if(userData){
  // console.log(userData, "userDataaaaaa");
  // }
  // useEffect(() => {
  //   if (!user) {
  //     getUser();
  //   }
  // }, [user]);
  // const getUser = async () => {
  //   try {
  //     dispatch(showLoading())
  //     const response = await axios.get("http://localhost:5000/user");
  //     console.log(response, "responseeeeeee ethii");
  //     dispatch(hideLoading())
  //     if (response.status) {
  //       dispatch(setUser(response.data.user));
  //     } else {
  //       console.log("Token error");
  //       localStorage.clear();
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());
  //     localStorage.clear();
  //     console.log(error.message, "Get User Error");
  //     router.push("/");
  //   }
  // };
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      return props.children;
    } else {
      return router.push("/");
    }
  }
}

export default ProtectedRoutes;
