import styles from './expectations.module.scss'
import borders from './images/borders.png'
import star from './images/star.png'
const Expectations = () => {
  return (
    <div style={{width: '100%', position: 'relative'}}>
        <div className={styles.main}>
            <h2>Мы ожидаем от стартапов:</h2>
            <img src={borders} className={styles.bordersImage}/>
            <div className={styles.cells}>
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Честное сотрудничество</p>
                </div>
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Открытость мышления и креатив</p>
                </div>
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Принятие принципа взаимной ценности и подхода win-win</p>
                </div>
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Готовность к взаимодействию</p>
                </div>
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Ценность продукта<br/> для клиентов и бизнеса</p>
                </div> 
                <div className={styles.cell}>
                    <img src={star}/>
                    <p>Предпринимательский подход и нацеленность на результат</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expectations