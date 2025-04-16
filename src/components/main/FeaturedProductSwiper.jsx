import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import FeaturedProductCard from './FeaturedProductCard'
import FourWheelsFeaturedProduct from '../../assets/images/four-wheels/Cap-Pivot.png'
import TwoWheelsFeaturedProduct from '../../assets/images/two-wheels/Dumper-Clutch.png'
import TruckAndHeavyEquipmentFeaturedProduct from '../../assets/images/truck-heavy-equipment/Rubber-Mounting-Cab.png'
import ExportFeaturedProduct from '../../assets/images/export/Grommet.png'
import IndustryFeaturedProduct from '../../assets/images/industry/Grommet-Wire-Hardness-2.png'

function FeaturedProductSwiper() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}  
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true, // Center slides on mobile
          },
          640: {
            slidesPerView: 2,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        }}
        className="!pb-12 swiper-container-equal-height mobile-centered" // Added mobile-centered class
      >
        <SwiperSlide className="swiper-slide-equal-height">
          <FeaturedProductCard
            image={FourWheelsFeaturedProduct}
            title="Cap Pivot"
            description="A rotating joint that allows controlled movement in mechanical or structural assemblies."
            kind="Four Wheels"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-equal-height">
          <FeaturedProductCard
            image={TwoWheelsFeaturedProduct}
            title="Dumper Clutch"
            description="A shock-absorbing device that smooths torque transmission and reduces vibration in mechanical systems."
            kind="Two Wheels"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-equal-height">
          <FeaturedProductCard
            image={TruckAndHeavyEquipmentFeaturedProduct}
            title="Rubber Mounting Cab"
            description="A a vibration-damping support that reduces noise and shock in vehicle cabins."
            kind="Truck And Heavy Equipment"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-equal-height">
          <FeaturedProductCard
            image={ExportFeaturedProduct}
            title="Grommet"
            description="A protective ring that reinforces holes and prevents wear in cables or materials."
            kind="Export"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-equal-height">
          <FeaturedProductCard
            image={IndustryFeaturedProduct}
            title="Grommet Wire Hardness 2"
            description="A protective ring that reinforces holes and prevents wear in cables or materials."
            kind="Industry"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default FeaturedProductSwiper
