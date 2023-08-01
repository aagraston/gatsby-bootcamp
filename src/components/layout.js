import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import * as layoutStyles from "./layout.module.scss";
import '../styles/index.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
