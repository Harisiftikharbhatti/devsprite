import Styles from '../Header/Header.module.css';

function  Header() {
    return (
        <div className={`${Styles.Header} Header`}>
                <div className={Styles.intro}>
                    <div className={Styles.intro1}>
                        <h1 className={Styles.intro2}>
                            Building a network for the smartest people
                        </h1>
                        <p className={Styles.intro3}>
                            Advanced software, advanced research for advanced people
                            where innovation meets excellence. We Provide the simplest
                            solution for the most complex problems.
                        </p>
                    </div>
                    <div className={Styles.intro4}>
                        <button className={Styles.intro5}>Get in touch</button>
                    </div>
                </div>
                <div className={Styles.img}>
                    <img className={Styles.img2} src="/imgheader.png" alt="Person sitting"/>
                </div>
            </div>
    )
}

export default Header