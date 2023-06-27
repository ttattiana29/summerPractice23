import styles from './footer.module.scss'
import telegram from './images/telegram.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h2>Контакты</h2>
        <div className={styles.container}>
            <div className={styles.address}>
                <p>Санкт-Петербург, Виленский пер. 14</p>
            </div>
            <div className={styles.contact}>
                <a href="mailto:accelerator@startupdrive.ru" aria-label="E-mail: accelerator@startupdrive.ru">accelerator@startupdrive.ru</a>
                <div className={styles.flex}>
                    <img src={telegram} className={styles.telegram}/>
                    <a href="https://t.me/startupdrive">@startupdrive</a>
                </div>
            </div>
        </div>
        <p className={styles.copyRight}>&copy; 2019-2023 StartupDrive</p>
    </footer>
  )
}

export default Footer