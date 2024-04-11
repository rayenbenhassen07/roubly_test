import Navbar from "../Components/Navbar";
import HomeOne from "../Components/HomeOne";

import Skills from "../Components/Skills";
import ClientOnly from "@/Components/ClientOnly";
import Modal from "@/Components/modals/Modal";
import Statistic from "@/Components/Statistic";
import Services from "@/Components/Services";
import Client from "@/Components/Client";
import Footer from "@/Components/Footer";
import Example from "@/Components/Example";




export default function Home() {

  
  
  
  return (
   <>
    <ClientOnly>
      <Modal/>
      <Navbar/>
      <HomeOne/>
      <Skills/>
      <Statistic/>
      <Services/>
      
      <Client/>
      <Footer/>
    </ClientOnly>
   </>
  );
}
