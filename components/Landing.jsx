// import clsx from "clsx";
// import Button from "./Button";
// import Image from "next/image";
// import { images } from "../lib/images";
// import styles from "../components/LandingPlan.module.scss";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// export default function Landing() {
//   return (
//     <>
//       <main>
//         <section className="lg:flex lg:flex-nowrap">
//           <section className={clsx("mt-32 p-10 w-1/2 ")}>
//             <section className="flex">
//               <article>
//                 <h2 className="text-2xl font-montserrat text-blue-gray-900">
//                   Encuentra tu lugar favorito
//                 </h2>
//                 <h1 className="text-5xl font-montserrat text-blue-gray-900 font-bold mt-6">
//                   Únete a los
//                 </h1>
//               </article>
//               <article className="pl-10">
//                 <img src="./figure-hero-lines.webp w-1/2" alt="" />
//               </article>
//             </section>
//             <article>
//               <h1 className="py-2 text-6xl text-blue-gray-900 font-montserrat font-bold lgbtiq-grad-color">
//                 negocios en racha
//               </h1>
//             </article>
//             <article className="mt-5 font-montserrat text-blue-gray-700">
//               <p>Únete a Bee You, una plataforma orientada a personas de la</p>
//               <p>
//                 comunidad LGTBIQ+. ¡Encuentra tus lugares favoritos, eventos de
//               </p>
//               <p>interés y recibe grandes recompensas!</p>
//               <Button
//                 label="ENCUENTRA TU ESPACIO"
//                 isSubmit
//                 style="mt-8 mb-16 lgbtiq-button-two lgbtiq-grad-bg"
//               ></Button>
//             </article>
//           </section>
//           <section className="text-center p-10 w-6/6">
//             <img src="./figure-hero-cards@2x.webp" alt="" />
//           </section>
//         </section>
//         {/* BENEFITS */}
//         <section className={clsx("-mt-20 p-10 ")}>
//           <section className="flex lg:content-center md:w-full">
//             <article>
//               <h1 className="text-5xl font-montserrat text-blue-gray-900 font-bold mt-6">
//                 Disfruta de los
//               </h1>
//               <h1 className="text-5xl font-montserrat text-purple-800 font-bold mt-6">
//                 beneficios friendly
//               </h1>
//             </article>
//             <article className="pl-10">
//               <img src="./figure-benefits.svg" alt="" />
//             </article>
//           </section>

//           <article className="mt-5 font-montserrat text-blue-gray-700">
//             <p>
//               ¡Únete a los negocios en Bee You! Forma parte de los negocios y
//             </p>
//             <p>organizaciones que apoyan abierta, libre y activamente a la</p>
//             <p>comunidad LGBTIQ</p>
//             <section className="flex flex-nowrap justify-evenly content-center mt-16">
//               <div className="text-center">
//                 <img className="ml-12" src="./figure-negocio.svg" alt="" />
//                 <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
//                   +1K negocios
//                 </h2>
//                 <p>Incrementa tu visibilidad</p>
//                 <p>y alcance</p>
//               </div>
//               <div className="text-center">
//                 <img className="ml-20" src="./figure-lealtad.svg" alt="" />
//                 <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
//                   Premiamos tu lealtad
//                 </h2>
//                 <p>Obtén magníficos descuentos en</p>
//                 <p>nuestra app</p>
//               </div>
//               <div className="text-center">
//                 <img className="ml-12" src="./figure-calendar.svg" alt="" />
//                 <h2 className="text-[25px] font-bold font-montserrat text-blue-gray-900">
//                   Eventos para ti
//                 </h2>
//                 <p>Los mejores eventos en tu</p>
//                 <p>ciudad estan aquí</p>
//               </div>
//             </section>

//             <section className="w-full flex justify-items-center">
//               <Button
//                 label="¡ÚNETE A BEE YOU+!"
//                 isSubmit
//                 style="mt-8 lgbtiq-button-two lgbtiq-grad-bg"
//               ></Button>
//             </section>
//           </article>
//         </section>
//         {/* LADINGPLAN */}
//         <section className={clsx(styles["cards-section"])}>
//           <section>
//             <h2
//               className={clsx(
//                 "text-left text-3xl text-blue-gray-900 font-montserrat font-bold mt-6 mb-2"
//               )}
//             >
//               ¡Únete ahora! y...
//             </h2>
//             <div className="flex">
//               <h2
//                 className={clsx(
//                   "text-left text-4xl text-green-900 font-montserrat font-semibold mb-2"
//                 )}
//               >
//                 elige el <span className="max-md:block">mejor plan</span>
//               </h2>
//               <div className="flex">
//                 <Image
//                   className={clsx("ml-7 w-16 h-16")}
//                   src={images.medal}
//                   alt="Medal icon"
//                 />
//               </div>
//             </div>
//             <div className={styles["parragrah-landing"]}>
//               <p
//                 className={clsx(
//                   "text-base text-blue-gray-700 font-poppins font-light mt-6"
//                 )}
//               >
//                 Los usuarios de Bee you están en busca de comercios incluyentes
//                 y eventos sociales. ¡Elige el mejor plan para tu negocio y apoya
//                 abiertamente a la comunidad LGBTIQ+!
//               </p>
//             </div>
//           </section>
//           <section className="flex justify-evenly">
//             <Swiper
//               modules={[Pagination, A11y]}
//               spaceBetween={10}
//               slidesPerView={1}
//               pagination={{ clickable: true }}
//               onSwiper={(swiper) => console.log(swiper)}
//               onSlideChange={() => console.log("slide change")}
//               breakpoints={{
//                 when window width is >= 640px
//                 1024: {
//                   slidesPerView: 2,
//                 },
//                 when window width is >= 768px
//                 768: {
//                   width: 768,
//                   slidesPerView: 2,
//                 },
//               }}
//             >
//               <SwiperSlide className="mb-14">
//                 <article
//                   className={clsx(
//                     "md:m-auto xl:m-auto card border-40 max-w-sm p-4 {/*xl:ml-16*/}"
//                   )}
//                 >
//                   <div className="flex mb-7 items-end w-full">
//                     <Image
//                       className={clsx("mr-3.5")}
//                       src={images.free}
//                       alt="Free Plan Icon"
//                     />
//                     <div>
//                       <h3
//                         className={clsx(
//                           "inline font-montserrat font-bold text-xl"
//                         )}
//                       >
//                         Free
//                       </h3>
//                       <p className={clsx("font-poppins font-nomral text-sm")}>
//                         Funcionalidades básicas
//                       </p>
//                     </div>
//                   </div>

//                   <ul>
//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Forma parte de la comunidad LGBTIQ+
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm mb-3 leading-6"
//                           )}
//                         >
//                           Forma parte de esta increíble comunidad y de los
//                           negocios que abrazan la diversidad.
//                         </p>
//                       </div>
//                     </li>

//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Publica hasta 5 eventos
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm mb-3 leading-6"
//                           )}
//                         >
//                           ¡Crea hasta 5 eventos! Por temática, estación o
//                           festividad. ¡Incentiva el interés de tu negocio!
//                         </p>
//                       </div>
//                     </li>

//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Publica hasta 5 descuentos
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm leading-6 mb-44 md:mb-44"
//                           )}
//                         >
//                           Publica hata 5 descuentos de productos o servicios que
//                           tu negocio ofrece. ¡Incentiva el consumo!
//                         </p>
//                       </div>
//                     </li>
//                   </ul>

//                   <button className={clsx("lgbtiq-button lgbtiq-grad-bg")}>
//                     ¡REGÍSTRATE AHORA!
//                   </button>
//                 </article>
//               </SwiperSlide>
//               <SwiperSlide className="mb-14">
//                 <article
//                   className={clsx(
//                     "md:m-auto xl:m-auto card max-w-sm p-4 {/*xl:mr-16*/}"
//                   )}
//                 >
//                   <div className="flex mb-7 items-end w-full">
//                     <Image
//                       className={clsx("mr-3.5")}
//                       src={images.pro}
//                       alt="Pro Plan Icon"
//                     />
//                     <section className="flex justify-between">
//                       <div>
//                         <h3
//                           className={clsx(
//                             "inline font-montserrat font-bold text-xl"
//                           )}
//                         >
//                           Pro
//                         </h3>
//                         <p
//                           className={clsx(
//                             "font-poppins font-normal text-sm leading-6"
//                           )}
//                         >
//                           MX$ 1599.99/año
//                         </p>
//                       </div>
//                       <div className="flex items-center text-center">
//                         <p
//                           className={clsx(
//                             "font-montserrat font-semibold text-blue-gray-700 text-xs bg-madang-50 rounded mb-6 px-1 py-0.5"
//                           )}
//                         >
//                           AHORRA MX$396
//                         </p>
//                       </div>
//                     </section>
//                   </div>

//                   <ul>
//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Forma parte de la comunidad LGBTIQ+
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm mb-3 leading-6"
//                           )}
//                         >
//                           Forma parte de esta increíble comunidad y de los
//                           negocios que abrazan la diversidad.
//                         </p>
//                       </div>
//                     </li>

//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Conviértete en un negocio en racha
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm mb-3 leading-6"
//                           )}
//                         >
//                           Incrementa tu alcance, tus impresiones y llega a más
//                           personas. ¿Todavía no estás en racha?
//                         </p>
//                       </div>
//                     </li>

//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Publica eventos de forma ilimitada
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm mb-3 leading-6"
//                           )}
//                         >
//                           ¡Crea eventos de forma ilimitada! Por temática,
//                           estación o festividad e incentiva el interés de tu
//                           negocio. ¡Da rienda suelta a la creatividad!
//                         </p>
//                       </div>
//                     </li>

//                     <li className="flex">
//                       <Image
//                         className={clsx("w-4 h-4 mr-3.5 mt-1")}
//                         src={images.check}
//                         alt="Check icon"
//                       />
//                       <div>
//                         <h4
//                           className={clsx(
//                             "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
//                           )}
//                         >
//                           Publica descuentos de forma ilimitada
//                         </h4>
//                         <p
//                           className={clsx(
//                             "font-poppins font-light text-sm leading-6 md:mb-5"
//                           )}
//                         >
//                           Publica descuentos de forma ilimitada de todos los
//                           productos o servicios que tu negocio ofrece e
//                           incrementa la rotación. ¡Incentiva el consumo!
//                         </p>
//                       </div>
//                     </li>
//                   </ul>

//                   <button className={clsx("lgbtiq-button lgbtiq-grad-bg")}>
//                     ¡REGÍSTRATE AHORA!
//                   </button>
//                 </article>
//               </SwiperSlide>
//             </Swiper>
//           </section>
//         </section>
//       </main>
//     </>
//   );
// }