import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [rent, setRent] = useState(0);
  const allowance = 10000 - rent + 25;
  const formatter = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <p className={styles.label}>Latest paid rent <small>(inclusive of transfer fee)</small></p>
        <input type="number" className={styles.input} onChange={e => setRent(e.target.value)} />
        <p className={`${styles.label} ${styles['margin-top']}`}>Allowance to transfer</p>
        <span className={styles.span}>{rent && formatter.format(allowance)}</span>
      </div>
    </div>
  );
}

export default App;
