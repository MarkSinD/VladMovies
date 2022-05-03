import { FC, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar";
import SkeletonSlider from "../components/Home/SkeletonSlider";
import Title from "../components/Title";
import TopSearches from "../components/Home/TopSearches";
import Logo from "/src/components/Home/main.jpg";
import "/src/components/Home/skeletonSliderStyle.css";


const Home: FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  console.log("Home")
  return (
    <>
      <Title value="FilmHot - AdFree Movie / Anime Watching Website" />
      <div className="flex sm:hidden justify-between px-[4vw] mt-6">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-8 h-8" src="/src/components/Home/logo.png" alt="" />
          <span className="text-xl font-medium">Кинозал№1</span>
        </Link>
        <button onClick={() => setSidebarActive(!sidebarActive)}>
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      <div className="flex">
        <SideBar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />

        <div className="flex-grow px-[4vw] md:px-8 pb-8 pt-0 overflow-hidden flex flex-col items-stretch">
          {(
            <>
              <div className="relative h-0 pb-[42%] mt-8">
                <img className="absolute top-0 left-0 w-full h-full rounded-2xl img-main__img" src={Logo} alt="Main Logo"/>
                <div className="absolute img-main__text" >
                  <div className="img-main__text img-main__text_header" >
                    Провайдер для вашего сайта с фильмами
                  </div>
                  <div className="img-main__text img-main__text_footer" >
                    Frontend подойдет для любого формата сайтом по схеме Rest Api
                  </div>
                </div>
              </div>
              <div className="slider-tech">
                Используемые технологии
              </div>
              <div className="overflow-hidden ">
                <SkeletonSlider/>
              </div>
            </>
          )}
        </div>

        <div className="flex-shrink-0 w-[350px] p-8 sticky top-0 h-screen scrollbar overflow-hidden overflow-y-auto hidden md:block">
          <TopSearches />
        </div>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
      </style>
    </>
  );
};

export default Home;
