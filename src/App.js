import React, {useContext} from "react";
import Layout from "./layout";
import { About, Home, Experience, Projects, Contact, Url } from "./pages";
import { Carousel } from "react-bootstrap";
import IndexContextProvider, {IndexContext} from "./contexts/IndexContextProvider";

export default function App() {
   return (
      <IndexContextProvider>
         <Layout>
            <MyCarousel />
         </Layout>
      </IndexContextProvider>
   );
}

export const MyCarousel = () => {
   const {useIndex, newIndex} = useContext(IndexContext);
   const handleSelect = (selectedIndex) => {
      newIndex(selectedIndex)
    };
   return (
      <Carousel activeIndex={useIndex} indicators={false} wrap={false} interval={null} controls={false} onSelect={handleSelect}>
         <Carousel.Item style={{ backgroundColor: "#800080", minHeight: "100vh" }}>
            <Home />
         </Carousel.Item>
         <Carousel.Item style={{ backgroundColor: "#4e1893", minHeight: "100vh" }}>
            <About />
         </Carousel.Item>
         <Carousel.Item style={{ backgroundColor: "#0e388c", minHeight: "100vh" }}>
            <Experience />
         </Carousel.Item>
         <Carousel.Item style={{ backgroundColor: "#600047", minHeight: "100vh" }}>
            <Projects />
         </Carousel.Item>
         <Carousel.Item style={{ backgroundColor: "#02010A", minHeight: "100vh" }}>
            <Contact />
         </Carousel.Item>
      </Carousel>
   );
};
