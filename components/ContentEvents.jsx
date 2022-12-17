import { images } from "../lib/images";
import Image from "next/image";
import clsx from "clsx";
import ButtonPurple from "./ButtonPurple";
import { useState } from "react";

export default function ContentEvents({}){

  return(
    <>
    <section>
      <Image className="ml-6 w-[40px] h-[40px] inline-flex" src={images.nearEventIcon} alt="Icon Events" />
      <h1 className="text-[20px] text-blue-gray-700 font-bold font-montserrat inline-flex">Mis eventos publicados</h1>
      <section className="w-[508px] h-[320px] border-2 rounded-2xl m-6 gap-6 flex justify-center items-center">
        <article className="flex flex-col">
            <Image className="mb-2 w-[274px] h-[182px]" src={images.figureEvents} alt="Figure Events" />
             <ButtonPurple
              label="CREAR EVENTO"
              isSubmit
              style={clsx("mt-2 ml-auto mr-auto")}>
            </ButtonPurple>
 
        </article>
      </section>
      </section>
    </>
  )
}