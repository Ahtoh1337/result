import styles from './style.module.scss'
import Image from 'next/image'

export default function Index() {
  return <>
    <div className={styles.container}>

      <div className={`${styles.resultPanel} ${styles.panel}`}>

        <h3>Your Result</h3>

        <div className={styles.circle}>
          <div>76</div>
          <div>of 100</div>
        </div>

        <div className={styles.comment}>
          <h2>Great</h2>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

      </div>

      <div className={`${styles.summaryPanel} ${styles.panel}`}>

        <h3>Summary</h3>

        <ul className={styles.summaryList}>
          <li>  
            <span>Reaction</span>
            <div><b>80</b> / 100</div>
          </li>
          <li>
            <span>Memory</span>
            <div><b>92</b> / 100</div>
          </li>
          <li>
            <span>Verbal</span>
            <div><b>61</b> / 100</div>
          </li>
          <li>
            <span>Visual</span>
            <div><b>72</b> / 100</div>
          </li>
        </ul>

        <button>Continue</button>

      </div>

    </div>
  </>
}