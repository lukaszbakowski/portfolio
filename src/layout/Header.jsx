import React from "react";
import module from "./index.module.scss";
import { NavButton, NavContainer } from "../components";
import cx from "classnames";

const Header = () => {
   return (
      <header className={module.header}>
         <div className={cx(module.flex, module.center, module.col)}>
         <div className={cx(module.flex, module.between)}  style={{paddingTop:"0.3rem"}}>
            <div style={{color:"white", fontSize:"1.5rem"}}>
               <span style={{ color: "brown" }}>&lt;</span>Łukasz Bąkowski <span style={{ color: "rgba(255,255,255,0.7)" }}>/</span>
               <span style={{ color: "brown" }}>&gt;</span>
            </div>
            <NavContainer className={module.flex}>
               <NavButton>Home</NavButton>
               <NavButton>About</NavButton>
               <NavButton>Experience</NavButton>
               <NavButton>Projects</NavButton>
               <NavButton>Contact</NavButton>
            </NavContainer>
         </div>
         <span style={{color:"antiquewhite"}}>WEB-DEVELOPER I PROGRAMISTA</span>
         </div>
      </header> 
   );
};

export default Header;
