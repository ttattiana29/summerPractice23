import React from 'react'
import styles from './cooperation.module.scss'
import light from './images/light.png'
import lightMobile from './images/lightMobile.png'
import image1 from './images/img-1.png'
import image2 from './images/img-2.png'
import image3 from './images/img-3.png'
import background from './images/background.png'
import events from './images/events.png'
import eventsMobile from './images/eventsMobile.png'

const Cooperation = () => {
  return (
    <div style={{width: '100%', position: 'relative'}}>
        <img src={lightMobile} className={styles.lightMobileImage}/>
        <img  src={light} className={styles.lightImage}/>
        <img src={background} className={styles.backgroundImage}/>
        <div className={styles.main}>
            <h2>Перспективы сотрудничества</h2>
            <p>по итогам акселерационной программы:</p>
            <div className={styles.cells}>
                <div className={styles.cell}>
                    <img src={image1}/>
                    <div className={styles.cellText}>
                        <h3>Revenue Sharing</h3>
                        <p>Дополнительный поток доходов для стартапа на условиях разделения прибыли</p>
                    </div>
                </div>
                <div className={styles.cell}>
                    <img src={image2}/>
                    <div className={styles.cellText}>
                        <h3>Joint Venture</h3>
                        <p>Создание нового совместного продукта</p>
                    </div>
                </div>
                <div className={styles.cell}>
                    <img src={image3}/>
                    <div className={styles.cellText}>
                        <h3>Equity Swaps</h3>
                        <p>Участие в дальнейшем развитии стартапа в роли миноритарного акционера</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.eventsAndDates}>
            <img src={events} className={styles.eventsImage}/>
            <img src={eventsMobile} className={styles.eventsMobileImage}/>
            <h2>События и даты</h2>
            <div className={styles.events}>
                <div className={styles.event}>
                    <span>ИЮНЬ</span>
                    <b>Старт</b>
                    <p>сбора заявок</p>
                </div>
                <div className={styles.event}>
                    <span>АВГУСТ</span>
                    <b>Завершение</b>
                    <p>сбора заявок</p>
                </div>
                <div className={styles.event}>
                    <span>АВГУСТ</span>
                    <b>Selection day</b>
                </div>
                <div className={styles.event}>
                    <span>СЕНТЯБРЬ</span>
                    <b>Старт</b>
                    <p>акселерационной <br />программы</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cooperation