import React from 'react'
import styles from './electromobility.module.scss'
import present from './images/present.png'
import star from './images/star.png'
import graphic from './images/graphic.png'

const Electromobility = () => {
  return (
    <div className={styles.main}>
       <p className={styles.fifthAcceleration}>пятая акселерационная программа</p> 
       <h2 className={styles.electromobilitySection}>Электромобильность</h2>
       <div className={styles.presentSection}>
            <div className={styles.leftSection}>
                <b>Настоящее</b>
                <img src={present} className={styles.presentImage}/>
            </div>
            <div className={styles.rightSection}>
                <p>Многие города России уже начали развивать инфраструктуру для электромобилей: 
                    устанавливают электрические зарядные станции на парковках и автозаправочных 
                    станциях, владельцы электромобилей получают субсидии и преференции на парковки 
                    и зарядные станции
                </p>
            </div>
       </div>
       <div className={`${styles.presentSection}, ${styles.defaultHeight}`}>
            <div className={styles.leftSection}>
                <b>Скоро</b>
            </div>
            <div className={styles.rightSectionList}>
                <p>Рост интереса к электромобилям и электрическим зарядным станциям: </p>
                <ul className={styles.ulSection}>
                    <li className={styles.liSection}>
                        <img src={star}/>
                        <p>
                            запуск производства электромобилей,
                        </p>
                    </li>
                    <li className={styles.liSection}>
                        <img src={star}/>
                        <p>
                            развитие широкой сети зарядных станций,
                        </p>
                    </li>
                    <li className={styles.liSection}>
                        <img src={star}/>
                        <p>
                            экологическая ответственность: снижение выбросов в атмосферу,
                        </p>
                    </li>
                    <li className={styles.liSection}>
                        <img src={star}/>
                        <p>
                            развитие концепции «автомобиль как девайс» 
                        </p>
                    </li>
                </ul>
            </div>
       </div>
       <div className={`${styles.presentSection}, ${styles.withoutBorder}`}>
            <div className={`${styles.leftSection}, ${styles.directionGraphic}`}>
                <img src={graphic} className={styles.direction}/>
            </div>
            <div className={styles.rightSection}>
                <b className={styles.directionTitle}>
                    Направления
                </b>
                <ul className={styles.ulDirection}>
                    <li className={`${styles.liDirection}`}>
                        <span>01</span><p>Зарядная инфраструктура для электротранспорта</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>02</span><p>Финтех услуги для рынка электромобильности</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>03</span><p>ИТ-решения для электрозарядных станций и автомобилей</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>04</span><p>Производство станций и комплектующих</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>05</span><p>Сервисы для электромобилей и производства батарей</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>06</span><p>Геосервисы для выгодной установки зарядных станций</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>07</span><p>Производство  электромобилей, комплектующих, батарей и накопителей </p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>08</span><p>Каршеринг электротранспорта</p>
                    </li>
                    <li className={styles.liDirection}>
                        <span>09</span><p>Электротехнические решения, связанные с автомобилями и процессом зарядки</p>
                    </li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Electromobility