import Styles from '../Homepage/Homepage.module.css';
import Header from '../Homepage/Header/Header';
import Testimonials from './Testimonials/Testimonials';
import Ourwork from './ourWork/ourWork';
import OurServices from './ourServices/OurServices';

function Homepage() {
    return (
        <div className={Styles.homepage}>
          <Header />
          <Testimonials />
          <Ourwork />
          <OurServices />
        </div>
    );
}

export default Homepage