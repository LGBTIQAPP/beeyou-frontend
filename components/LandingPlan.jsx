import clsx from "clsx"; // Organize CSS code into the archives
import Image from "next/image";
import { images } from "../lib/images";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function LandingPlan() {
  return (
    <section className="mx-4 md:pl-10 lg:pl-14">
      <section>
        <h2
          className={clsx(
            "text-left text-3xl text-blue-gray-900 font-montserrat font-bold mt-6 mb-2 pt-10"
          )}
        >
          ¡Únete ahora! y...
        </h2>
        <div className="flex">
          <h2
            className={clsx(
              "text-left text-4xl text-green-900 font-montserrat font-semibold mb-2"
            )}
          >
            elige el <span className="max-md:block">mejor plan</span>
          </h2>
          <div className="flex">
            <Image
              className={clsx("ml-7 w-16 h-16")}
              src={images.medalIcon}
              alt="Medal Icon"
            />
          </div>
        </div>
        <div className="">
          <p
            className={clsx(
              "text-center text-base text-blue-gray-700 font-poppins font-light mt-2 md:mb-10 md:text-start lg:mb-12 max-w-lg"
            )}
          >
            Los usuarios de Bee you están en busca de comercios incluyentes y
            eventos sociales. ¡Elige el mejor plan para tu negocio y apoya
            abiertamente a la comunidad LGBTIQ+!
          </p>
        </div>
      </section>
      <section className="flex justify-evenly">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            1024: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            // 768: {
            //   width: 768,
            //   slidesPerView: 2,
            // },
          }}
        >
          <SwiperSlide className="mb-14">
            <article
              className={clsx(
                "md:m-auto xl:m-auto card border-40 max-w-sm p-4"
              )}
            >
              <div className="flex mb-7 items-end w-full">
                <Image
                  className={clsx("mr-3.5")}
                  src={images.freePlanIcon}
                  alt="Free Plan Icon"
                />
                <div>
                  <h3
                    className={clsx("inline font-montserrat font-bold text-xl")}
                  >
                    Free
                  </h3>
                  <p className={clsx("font-poppins font-nomral text-sm")}>
                    Funcionalidades básicas
                  </p>
                </div>
              </div>

              <ul>
                <li className="flex">
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Forma parte de la comunidad LGBTIQ+
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm mb-3 leading-6"
                      )}
                    >
                      Forma parte de esta increíble comunidad y de los negocios
                      que abrazan la diversidad.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Publica hasta 5 eventos
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm mb-3 leading-6"
                      )}
                    >
                      ¡Crea hasta 5 eventos! Por temática, estación o
                      festividad. ¡Incentiva el interés de tu negocio!
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Publica hasta 5 descuentos
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm leading-6 mb-44 md:mb-44"
                      )}
                    >
                      Publica hata 5 descuentos de productos o servicios que tu
                      negocio ofrece. ¡Incentiva el consumo!
                    </p>
                  </div>
                </li>
              </ul>

              <button className={clsx("lgbtiq-button lgbtiq-grad-bg")}>
                ¡REGÍSTRATE AHORA!
              </button>
            </article>
          </SwiperSlide>
          <SwiperSlide className="mb-14">
            <article
              className={clsx(
                "md:m-auto xl:m-auto card max-w-sm p-4 {/*xl:mr-16*/}"
              )}
            >
              <div className="flex mb-7 items-end w-full">
                <Image
                  className={clsx("mr-3.5")}
                  src={images.proPlanIcon}
                  alt="Pro Plan Icon"
                />
                <section className="flex justify-between">
                  <div>
                    <h3
                      className={clsx(
                        "inline font-montserrat font-bold text-xl"
                      )}
                    >
                      Pro
                    </h3>
                    <p
                      className={clsx(
                        "font-poppins font-normal text-sm leading-6"
                      )}
                    >
                      MX$ 1599.99/año
                    </p>
                  </div>
                  <div className="flex items-center text-center">
                    <p
                      className={clsx(
                        "font-montserrat font-semibold text-blue-gray-700 text-xs bg-madang-50 rounded mb-6 px-1 py-0.5"
                      )}
                    >
                      AHORRA MX$396
                    </p>
                  </div>
                </section>
              </div>

              <ul>
                <li className={clsx("flex")}>
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Forma parte de la comunidad LGBTIQ+
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm mb-3 leading-6"
                      )}
                    >
                      Forma parte de esta increíble comunidad y de los negocios
                      que abrazan la diversidad.
                    </p>
                  </div>
                </li>

                <li className={clsx("flex")}>
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Conviértete en un negocio en racha
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm mb-3 leading-6"
                      )}
                    >
                      Incrementa tu alcance, tus impresiones y llega a más
                      personas. ¿Todavía no estás en racha?
                    </p>
                  </div>
                </li>

                <li className={clsx("flex")}>
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Publica eventos de forma ilimitada
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm mb-3 leading-6"
                      )}
                    >
                      ¡Crea eventos de forma ilimitada! Por temática, estación o
                      festividad e incentiva el interés de tu negocio. ¡Da
                      rienda suelta a la creatividad!
                    </p>
                  </div>
                </li>

                <li className={clsx("flex")}>
                  <Image
                    className={clsx("w-4 h-4 mr-3.5 mt-1")}
                    src={images.checkIcon}
                    alt="Check Icon"
                  />
                  <div>
                    <h4
                      className={clsx(
                        "inline font-montserrat font-medium text-base text-blue-gray-700 leading-5"
                      )}
                    >
                      Publica descuentos de forma ilimitada
                    </h4>
                    <p
                      className={clsx(
                        "font-poppins font-light text-sm leading-6 md:mb-5"
                      )}
                    >
                      Publica descuentos de forma ilimitada de todos los
                      productos o servicios que tu negocio ofrece e incrementa
                      la rotación. ¡Incentiva el consumo!
                    </p>
                  </div>
                </li>
              </ul>

              <button className={clsx("lgbtiq-button lgbtiq-grad-bg")}>
                ¡REGÍSTRATE AHORA!
              </button>
            </article>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}
