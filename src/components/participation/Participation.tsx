import styles from './participation.module.scss'
import elipses from './images/elipses.png'

const Participation = () => {
  return (
    <div style={{width: '100%', position: 'relative'}}>
    <div className={styles.main}>
        <p className={styles.effectiveCommunication}>Эффективное взаимодействие</p> 
        <h2 className={styles.mainTitle}>Что дает участие в акселераторе</h2>
        <img src={elipses} className={styles.elipsesImage}/>
        <div className={styles.cells}>
            <div className={styles.cell}>
                <h2>Финансирование</h2>
                <p>Возможность софинансирования или компенсации части прямых затрат для проверки гипотез</p>
            </div>
            <div className={styles.cell2}>
                <h2>Экспертиза</h2>
                <p>Внутренняя экспертиза на базовом и смежных рынках</p>
            </div>
            <div className={styles.cell3}>
                <h2>Бренд</h2>
                <p>Возможность работы под известным брендом</p>
            </div>
            <div className={styles.cell}>
                <h2>Инвестиции</h2>
                <p>Привлечение инвестиций от корпораций-партнеров и венчурных фондов</p>
            </div>
            <div className={styles.cell2}>
                <h2>Партнеры</h2>
                <p>Стратегические партнерства на нужных рынках с крупными игроками</p>
            </div>
            <div className={styles.cell3}>
                <h2>База</h2>
                <p>Доступ к базе клиентов, каналам коммуникации и дистрибуции</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Participation