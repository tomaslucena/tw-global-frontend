"use client"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Swiper from 'swiper';
import { Navigation, A11y, Pagination, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css';

interface SwiperSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  initializer: string,
  settings: any,
  children: React.ReactNode,
  controlsClass?: string,
  freeMode?: boolean
  resetControls?: boolean
}

let swiper = null

export default function SwiperSlider({initializer, settings, children, controlsClass, freeMode, resetControls, ...props}:SwiperSliderProps) {

  const modules = [Navigation, A11y, Pagination, Autoplay]

  if(freeMode) {
    modules.push(FreeMode)
  }

  settings.modules = modules

  const enableSwiper = function() {
    swiper = new Swiper(initializer, settings);
  };

  useEffect(() => {
    enableSwiper()
  },[])

  return (
    <div {...props}>
      <div className={`swiper-wrapper`}>
        {children}
      </div>
      <div className={`${resetControls ? 'default-controls' : 'slider-controls'} ${controlsClass}`}>
        <div className={`swiper-pagination`}></div>
        <div className={`slider-controls-prev swiper-button-prev`}><FontAwesomeIcon icon={faArrowLeft} size='xl' /></div>
        <div className={`slider-controls-next swiper-button-next`}><FontAwesomeIcon icon={faArrowRight} size='xl' /></div>
      </div>
    </div>
  )
}