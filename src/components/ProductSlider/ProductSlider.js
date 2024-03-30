// Hooks
import { useRef, useState } from 'react';
// Components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Button from '../Button/Button';
// Assets
import sneaker from '../../assets/images/sneaker.png';
import sneaker1 from '../../assets/images/sneaker1.png';
import sneaker2 from '../../assets/images/sneaker2.png';
import sneaker3 from '../../assets/images/sneaker3.png';
import sneaker4 from '../../assets/images/sneaker4.png';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
// Styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import classes from './ProductSlider.module.scss';


const FAKE_IMAGES = [
  sneaker,
  sneaker1,
  sneaker2,
  sneaker3,
  sneaker4,
];

const buttonProps = {
  style: { padding: '0 4px' },
  variant: 'text',
  w: 38,
};

const ProductSlider = () => {
  const prev = useRef(null), next = useRef(null);
  const [ product , setProduct ] = useState(0);


  return (
    <div className={classes.main}>
      <img alt="Product" className={classes.image} src={FAKE_IMAGES[ product ]} />
      <div className={classes.slider}>
        <Button {...buttonProps} onClick={() => prev.current.click()}><ArrowLeft /></Button>

        <Swiper
          loop
          navigation={{
            prevEl: '.slidePrev',
            nextEl: '.slideNext',
          }}
          slidesPerView={4}
          style={{ width: '292px' }}
        >
          <Buttons nextRef={next} prevRef={prev} setProduct={setProduct} />
          {
            FAKE_IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  alt="Product"
                  className={classes.slide}
                  onClick={() => setProduct(index)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setProduct(index)}
                  src={image}
                  tabIndex={0}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <Button {...buttonProps} onClick={() => next.current.click()}><ArrowLeft style={{ rotate: '180deg' }} /></Button>
      </div>
    </div>
  );
};

const Buttons = ({ prevRef, nextRef, setProduct }) => {
  const swiper = useSwiper();

  const handleClick = (isPrev = true) => {
    if (swiper) {
      if (isPrev) swiper.slidePrev();
      else swiper.slideNext();

      setProduct(swiper.realIndex);
    }
  };

  return <>
    <button className='slidePrev' hidden onClick={handleClick} ref={prevRef} tabIndex='-1'></button>
    <button className='slideNext' hidden onClick={() => handleClick(false)} ref={nextRef} tabIndex='-1'></button>
  </>;
};


export default ProductSlider;
