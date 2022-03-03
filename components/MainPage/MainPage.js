import React from "react";
import Layout from "../Layout/Layout";
import Tour from "../Tour/Tour";
import Pacages from "../Pacages/Pacages";
const MainPage = () => {
  return (
    <div>
      <Layout>
        <Tour />
        <Pacages />
      </Layout>
    </div>
  );
};

export default MainPage;
