import React from "react";
import { ListImageCorousel } from "../common/Imagecorousel";
import BoschLogo from"@/public/Bosch.webp"
import DLFLogo from "@/public/Dlf.webp"
import Tesco from "@/public/Tesco.webp"
import Intel from "@/public/Intl.webp"
import Engage from "@/public/engage.png"
import Tcs from "@/public/Tcs.webp"
import Britania from "@/public/Britania.webp"
import Dps from "@/public/Dps_logo.jpg"
import Goorej from "@/public/Goprej.webp"
import Lsop from "@/public/LSOP.png"

const images = [BoschLogo,DLFLogo,Tesco,Intel,Engage,Tcs,Britania,Dps,Goorej,Lsop]
function Clients() {
  return (
    <div className="">
      <div className="flex items-center justify-center h-auto">
        <h1 className="text-white font-extrabold">Our Clients</h1>
      </div>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
      <ListImageCorousel images={images}/>
    </div>   
    </div>
  );
}

export default Clients;
