import React, { useContext, useState } from "react";
import BusinessSection from "./BusinessSection";
import ContributeArticle from "../Alumini/ContributeArticle";
import ListArticles from "./ListArticles";
// import axios from 'axios';
// import CarouselComponent from "../CarouselComponent/CarouselComponent.jsx";
// import { UserContext } from "../../../context/userContext.jsx";

const Home = () => {
  // const { user, setUser } = useContext(UserContext);

  return (

    <>
      <BusinessSection />
      <ContributeArticle />
      <ListArticles />
    </>
  );
};

export default Home;

// {user ? (
//   <div>
//     <h1>Welcome, {user.fullname}!</h1>
//     <p>Email: {user.email}</p>
//   </div>
// ) : (
//   <h1>Loading user data...</h1>
// )}
