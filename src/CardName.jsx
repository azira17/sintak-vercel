import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CardName() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-200">

        <div className="w-96 h-auto border-2 p-4">

          <div className="flex justify-center items-center flex-col">

            <img 
            src="src\assets\photo.jpg" alt="" 
            className="w-30 rounded-full shadow-xl border-2" />

            <h1 
            className="text-xl font-bold">
                Azira Choni Zahro</h1>

            <p className="text-gray-400">Mahasiswa</p>
          </div>

          <div className="mt-2 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum molestiae ea, suscipit enim tempora quibusdam eligendi architecto quas eos! Rerum, similique necessitatibus soluta ut architecto veritatis laboriosam consequatur sint pariatur.</p>
          </div>

      <LinkSocial 
      text="Instagram"
      icon={<FaInstagram className="mr-2"/>}
      link="https://www.instagram.com/az_rrac.z?igsh=bnEyaG11cWc5ZXdt"/>  
      <LinkSocial 
      text="Twitter"
      icon={<FaXTwitter className="mr-2"/>}
      link="https://x.com/22817_l?t=J9CKlQq81cJsk2HtCWAigw&s=09"/>  
         
        </div>
      </div>
    </>
  );
}

export default CardName;
function LinkSocial(props) {
  return(
    <>
     <div className="mt-2 flex justify-center items-center">
          <a
          className="bg-black text-white p-2 w-full rounded-md text-center flex justify-center items-center "
          href={props.link} target="blank"> 
          {props.icon} {props.text} </a>

          </div>
    </>
  )
  
}
