import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cookies from "./Cookies";
import module from "./index.module.scss";
import cx from "classnames";

export default (props) => {
   return (
      <div className={module.main}>
         <Header />
         {props.children}
         <Footer />
      </div>
   );
};

export const Container = (props) => {
   return <div className={cx(module.flex, module.center, module.col)} >{props.children}</div>;
};
