import { Swiper, SwiperSlide } from "swiper/react";

import { FC } from "react";
import { Navigation } from "swiper";
import React from "/src/components/Home/react.png";
import RestApi from "/src/components/Home/restApi.png";
import TypeScript from "/src/components/Home/ts.png";
import Bootstrap from "/src/components/Home/bootstrap.png";
import Tailwind from "/src/components/Home/tailwind.png";
import Firebase from "/src/components/Home/firebase.png";
import TechItem from "./TechItem";

const Slider: FC = () => {
  const arrayImage = [
    React, RestApi, TypeScript, Bootstrap, Tailwind, Firebase
  ]

  const arrayText = [
    "React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений",
    "REST  — архитектурный стиль взаимодействия компонентов распределённого приложения в сети. Другими словами, REST — это набор правил того, как программисту организовать написание кода серверного приложения, чтобы все системы легко обменивались данными и приложение можно было масштабировать.",
    "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript",
    "Bootstrap — это открытый и бесплатный HTML, CSS и JS фреймворк, который используется веб-разработчиками для быстрой вёрстки адаптивных дизайнов сайтов и веб-приложений.",
    "Tailwind — это служебная среда CSS. Он создан для служебных целей, что означает, что он должен облегчить разработку. Он отличается от других распространенных фреймворков CSS,",
    "Firebase - это облачная база данных, которая позволяет пользователям хранить и получать сохраненную информацию, а также имеет удобные средства и методы взаимодействия с ней."
  ]

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      spaceBetween={250}
    >
      {[...new Array(5)].map((_, index) => (
        <SwiperSlide className="!w-[400px]" key={index}>
          <TechItem className="w-[400px] h-[400px] rounded-xl" img={arrayImage[index]} text={arrayText[index]}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
