import React from 'react'
import styles from './selection.module.scss'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'

const Selection = () => {
  return (
    <div className={styles.main}>
        <h2>Критерии отбора</h2>
        <div className={styles.cells}>
            <div className={styles.cell}>
                <img src={image1}/>
                <div className={styles.cellText}>
                    <h3>Продукт</h3>
                    <p>Работающий продукт<br/>на уровне не ниже зрелого MVP</p>
                </div>
            </div>
            <div className={styles.cell}>
                <img src={image3}/>  
                <div className={styles.cellText}>
                    <h3>Продажи</h3>
                    <p>Наличие первых клиентов и продаж</p>
                </div>  
            </div>  
            <div className={styles.cell}>
                <img src={image2}/>
                <div className={styles.cellText}>
                    <h3>Команда</h3>
                    <p>Укомплектованная команда во главе<br/>с лидером</p>
                </div>
            </div>
            <div className={styles.cell}>
                <img src={image4}/>
                <div className={styles.cellText}>
                    <h3>Ценность</h3>
                    <p>Высокий потенциал решения</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selection;