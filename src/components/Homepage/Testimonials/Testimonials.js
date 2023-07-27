import Styles from '../Testimonials/Testimonials.module.css'
import CarouselComponent from './CarouselComponent/Carousel'

function Testimonials() {
    return (
        <div className={Styles.Testimonials}>
          <CarouselComponent />
        </div>
    )
}

export default Testimonials