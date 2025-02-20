import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRequest } from "../hooks/useRequest";
import { ImagesProps } from "../interfaces/Types";
import { Loader } from "lucide-react";

const Carousel: React.FC = () => {
  const { data, error, loading } = useRequest<ImagesProps>({
    url: "images", // API հասցեն․․․
  });

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-3xl">No data</div>;
  }

  // Settings
  const settings = {
    dots: false, // Չի ցուցադրում նավիգացիոն կետեր (dots)
    speed: 500, // Անիմացիայի արագությունը (500 միլիվայրկյան)
    slidesToShow: 4, // Միաժամանակ ցուցադրվող սլայդների քանակը (3 հատ)
    slidesToScroll: 1, // Քանի սլայդ է տեղափոխվում մեկ քայլում (1 հատ)
    infinite: true, // Անսահման պտույտ (loop)՝ հասնելով վերջը, նորից սկսում է սկզբից
    autoplay: true, // Ինքնաշխատ պտույտ (slide-երը շարժվում են ավտոմատ)
    autoplaySpeed: 1000, // Յուրաքանչյուր սլայդի ցուցադրման տևողությունը (1000 միլիվայրկյան = 1 վայրկյան)
  };

  return (
    <div className={`relative max-w-6xl mx-auto overflow-hidden p-2`}>
      <Slider {...settings}>
        {data.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              style={{ borderRadius: "20px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
