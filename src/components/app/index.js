import imgMan from 'assets/images/man.png';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={imgMan} className={styles.man} alt="man" />
        <div className={styles.text}>
          Hi! This page is currently under maintenance and will be back soon!
        </div>
      </div>
    </div>
  );
}

export default App;
