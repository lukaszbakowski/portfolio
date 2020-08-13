import React from "react";
import module from "./index.module.scss";
import cx from "classnames";

const Footer = () => {
   return (
      <footer className={module.footer}>
         <div className={cx(module.flex, module.center, module.col)}>
            <hr />
            <span style={{padding:"0.3rem"}}>&copy; 2019 Łukasz Bąkowski</span>
         </div>
      </footer>
   );
};

export default Footer;
