import Styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.logo}>
                <img src='/logo.png' alt='Company Logo' />
            </div>
            <div className={Styles.menuBar}>
                <ul className={Styles.content}>
                    <li>Our Work</li>
                    <li>Services</li>
                    <li>Technologies</li>
                    <li>industries</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
                <button className={Styles.contactUs}>Contact Us</button>
            </div>
        </div>
    );
}

export default Navbar