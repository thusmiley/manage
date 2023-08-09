import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import ali from "../assets/avatar-ali.png";
import anisha from "../assets/avatar-anisha.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mt-20 lg:-mt-8 flexCenter flex-col overflow-visible"
    >
      <h2 className="heading2 text-center mb-16">What they&apos;ve said</h2>
      <div className=" w-container md:w-full">
        <Swiper
          centeredSlides={true}
          initialSlide={1}
          navigation={false}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 6000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          className="pt-10 pb-8 overflow-hidden"
        >
          <SwiperSlide className="bg-[#fafafa] flex flex-col justify-start items-center text-center px-5 py-10 min-h-[253px] min-w-[340px] sm:min-w-[540px]">
            <img
              src={ali}
              alt="Ali Bravo"
              className="rounded-full -mt-[76px] w-[72px] h-[72px] object-contain"
            />
            <h3 className="heading3 mt-6 mb-4">Ali Bravo</h3>
            <p className="paragraph">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </SwiperSlide>

          <SwiperSlide className="bg-[#fafafa] flex flex-col justify-start items-center text-center px-5 py-10 min-h-[253px] min-w-[340px] sm:min-w-[540px]">
            <img
              src={anisha}
              alt="Anisha Li"
              className="rounded-full -mt-[76px] w-[72px] h-[72px] object-contain"
            />
            <h3 className="heading3 mt-6 mb-4">Anisha Li</h3>
            <p className="paragraph">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#fafafa] flex flex-col justify-start items-center text-center px-5 py-10 min-h-[253px] min-w-[340px] sm:min-w-[540px]">
            <img
              src={richard}
              alt="Richard Watts"
              className="rounded-full -mt-[76px] w-[72px] h-[72px] object-contain"
            />
            <h3 className="heading3 mt-6 mb-4">Richard Watts</h3>
            <p className="paragraph">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#fafafa] flex flex-col justify-start items-center text-center px-5 py-10 min-h-[253px] min-w-[340px] sm:min-w-[540px]">
            <img
              src={shanai}
              alt="Shanai Gough"
              className="rounded-full -mt-[76px] w-[72px] h-[72px] object-contain"
            />
            <h3 className="heading3 mt-6 mb-4">Shanai Gough</h3>
            <p className="paragraph">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#fafafa] flex flex-col justify-start items-center text-center px-5 py-10 min-h-[253px] min-w-[340px] sm:min-w-[540px]">
            <img
              src={richard}
              alt="Richard Watts"
              className="rounded-full -mt-[76px] w-[72px] h-[72px] object-contain"
            />
            <h3 className="heading3 mt-6 mb-4">Richard Watts</h3>
            <p className="paragraph">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </SwiperSlide>
        </Swiper>
      </div>

      <button className="mt-12">Get Started</button>
    </section>
  );
};

export default Testimonials;
