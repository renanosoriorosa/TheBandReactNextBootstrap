"use client";

import { Container } from "react-bootstrap";
import {useState} from "react";
import Members from "./components/members";
import CarouselBand from "./components/carouselBand";
import Tour from "./components/tour";
import Contact from "./components/contact";
import Toggable from "./components/toggable";
import MapLocation from "./components/mapLocation";
import NavBarTopSide from "./components/navBarTopSide";
import Footer from "./components/footer";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBarTopSide/>
      <CarouselBand />
      <Container id="band" className="text-center">
        <h3>THE BAND</h3>
        <p>We love music!</p>
        <p>We have created a fictional band website. Lorem ipsum..</p>
        <br />
        <Members/>
      </Container>
      <Tour/>
      
      <Contact/>
      <Toggable/>
      <MapLocation/>
      <Footer/>
    </>
  )
}
