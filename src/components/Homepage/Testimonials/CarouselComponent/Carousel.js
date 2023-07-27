import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Styles from './Carousel.module.css';
import { reviews } from '../../../../Utilities/constants';

function CarouselComponent() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
      className={`testimonialcarousel ${Styles.testimonialcarousel}`}
    >
      {reviews?.map((review, index) =>
        <div className={Styles.carouselmain} key={index}>
          <img className={Styles.carouselimg} src={review.image} alt="Image 1" />
          <h1 className={Styles.carouselname}>{review.name}</h1>
          <h2 className={Styles.carouseltitle}>{review.title}</h2>
          <img className={Styles.rating} src={review.rating} alt='stars' />
          <p className={Styles.commentsection}>
            {review.review}
          </p>
        </div>
      )
      }
    </Carousel>
  );
}

export default CarouselComponent;
