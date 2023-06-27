import styles from './banner.module.scss'
import logo from '../header/images/logo.png'
import Button from '../button/Button'

const Banner = () => {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            {window.innerWidth >= 550 ? (
                <>
                <img src={logo} className={styles.logo} />
                <h2>Accelerator</h2>
                <p>Индивидуальный подход <br/>в работе со стартапами</p>
                </>
            ) : (
                <>
                <h2>Accelerator</h2>
                <p>Индивидуальный подход в работе со стартапами сфер транспорта и логистики</p>
                </>
            )}
            <Button />
        </div>
        <div>
            <p className={styles.spanText}>Акселератор StartupDrive от «Газпром нефти»</p>
        </div>
    </div>
  )
}

export default Banner