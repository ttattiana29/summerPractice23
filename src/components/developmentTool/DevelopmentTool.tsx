import styles from './developmentTool.module.scss'
import light from './images/light.png'
const DevelopmentTool = () => {
  return (
    <div className={styles.main}>
        <img src={light} className={styles.light}/>
        <div className={styles.flex}>
            <div className={styles.content}>
                <h2>
                    <span className={styles.spanWhite}>Инструмент развития </span> 
                    <br />
                    <span className={styles.spanBlue}>бизнеса стартапа <br /> и компании</span>
                </h2>
                <p>
                    По итогам программы резиденты масштабируют бизнес, 
                    а компания — совершенствует решения топливного ритейла, 
                    расширяя портфель клиентских сервисов в IT-продуктах
                </p>
            </div>
            <div className={styles.achievements}>
                <div className={styles.card}>
                    <h2>2019</h2>
                    <p>старт 1 программы</p>
                </div>
                <div className={styles.card}>
                    <h2>24 программы</h2>
                    <p>за 4 года</p>
                </div>
                <div className={styles.card}>
                    <h2>36 стартапов</h2>
                    <p>прошли программу</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevelopmentTool