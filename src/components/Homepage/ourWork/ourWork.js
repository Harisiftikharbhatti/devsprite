import { ourwork } from "../../../Utilities/constants"
import Styles from "./ourWork.module.css"

function Ourwork() {
    return (
        <div className={Styles.container}>
            <div className={Styles.primary}>
                <h2 className={Styles.secondary}>
                    Our Work
                </h2>
                <p className={Styles.tertiary}>
                    At Boldare, we don't just talk about great product. We make them with our clients. Read our case studies
                    and find out how we've helped them bring great products to market:
                </p>
            </div>
            <div className={Styles.content}>
                {ourwork?.map((work, index) =>
                        <div className={Styles.card} key={index}>
                            <img className={Styles.image} src={work.image}></img>
                            <button className={Styles.button} src={work.button}></button>
                            <div className={Styles.title}>{work.title}</div>
                            <div className={Styles.comment}>{work.comment}</div>
                            <button className={Styles.link}>{work.link}</button>
                        </div>
                    )
                 }   
                
            </div>
            <div className={Styles.portfolio}>
                <button className={Styles.works}>View all works</button>
            </div>
        </div>
    )
}

export default Ourwork