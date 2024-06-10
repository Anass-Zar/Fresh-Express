import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../images/slider1.jpg';
import slide2 from '../images/slider2.jpg';
import slide3 from '../images/slider3.jpg';
import slide4 from '../images/slider4.jpg';
import slide5 from '../images/slider5.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const sentences = [
    "Global goodness, delivered fresh.",
    "Discover the world's flavors, one bite at a time.",
    "From farm to fork, excellence knows no borders.",
    "Fresh picks from around the world, just for you.",
    "Taste the world with our international produce.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      <div className="relative h-[180px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${currentSlide === index ? 'block' : 'hidden'} absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out`}
            data-carousel-item
          >
            <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-0 flex justify-center items-center bg-black/20">
              <div className="grid justify-items-center gap-10">
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center py-2 font-[Dosis] uppercase'>{sentences[index]}</h1>
                <Link to="/about_us" className="mb-8 text-md md:text-lg lg:text-xl font-semibold text-white py-2 px-4 bg-green-500 hover:bg-green-400 rounded-3xl">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-2.5 h-2.5 -mb-3 rounded-full ${currentSlide === index - 1 ? 'bg-white' : 'bg-gray-300'}`}
            aria-current={currentSlide === index - 1 ? 'true' : 'false'}
            aria-label={`Slide ${index}`}
            onClick={() => setCurrentSlide(index - 1)}
            data-carousel-slide-to={index - 1}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className=" hidden md:flex absolute top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full group bg-white/30 hover:bg-white/50">
          <svg
            className="w-5 h-5 text-gray-100 group-hover:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className=" hidden md:flex absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer "
        data-carousel-next
        onClick={nextSlide} 
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full group bg-white/30 hover:bg-white/50">
          <svg
            className="w-5 h-5 text-gray-100 group-hover:text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
