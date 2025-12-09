import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { RootObject } from "../../interfaces/dbData";
import Counter from "../global/Counter";
import ButtonContent from "../buttons/Buttons";

interface HeroSection2Props {
  data: RootObject; // Asegúrate de que RootObject está bien definido y accesible.
}

const HeroSection2: React.FC<HeroSection2Props> = ({ data }) => {
  const yearExperiense = data.yearsExperience;
  const miles = data.milesCover;
  const city = data.dataGeneral.location[0].city;

  //como puedo poner lo anterior en un array ? que sea parameter y label

  const dataCounter = [
    {
      label: "Experience",
      subLabel: "Years of",
      parameter: yearExperiense,
    },
    {
      label: city,
      subLabel: "miles around",
      parameter: miles,
    },
    {
      label: "On Time",
      subLabel: "%",
      parameter: 100,
    },
  ];

  return (
    <div className="w-full flex md:flex-row flex-col relative pb-20">
      <div className="md:w-full mx-auto w-[95%] flex items-center flex-wrap px-2 relative pt-[40px] md:pt-[240px] pb-[160px] md:pb-[200px]">
        <div className="absolute inset-0 w-full h-full rounded-xl">
          <video autoPlay loop muted className="w-full h-full object-cover rounded-xl">
            <source
              src="../assets/img/remodeling.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>{" "}
          {/* Black overlay with opacity */}
        </div>
        <div className="md:w-[80%] mx-auto w-full flex flex-col md:py-2 py-8 md:px-1 px-3 relative z-20">
          <div className="md:w-[80%] mx-auto w-full flex flex-col justify-center items-center">
            <div className="px-4 my-4 text-center">
              <span className="md:text-[30px] text-[20px] font-bold text-white">
                {data.name}
              </span>
              <h1 className="md:text-[50px] text-[30px] font-bold text-white">
                {data.slogan[0]}
              </h1>
            </div>
            <p className="text-white mb-4 text-center">{data.valuesContent.mission}</p>
            <ButtonContent />
          </div>
        </div>
        
      </div>
      <div className="w-full h-auto absolute left-0 -bottom-16 md:-bottom-24 py-10 flex justify-center items-center z-10">
        <div className="w-4/5 h-auto flex flex-col md:flex-row justify-center items-center bg-primary rounded-2xl">
        <img src={data.gallery[22]} alt="imagen" className="w-full md:w-3/5 h-[100px] md:h-[200px] object-cover object-center rounded-2xl" />
        <div className="w-full md:w-2/5">
        <a href={data.dataGeneral.phones[0].number} className="flex flex-col justify-center items-center gap-2 text-white">
        <i className="fa-solid fa-phone-volume text-xl md:text-4xl -rotate-45"></i>
        <p className="text-lg md:text-2xl font-bold">
          {data.dataGeneral.phones[0].number}
        </p>
        <p className="text-lg md:text-2xl font-bold">
          Call Us Now!!
        </p>
        </a>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection2;
