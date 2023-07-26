import { Barra } from '../assets';
import styles from './Skills.module.css';

export function Skills() {
 
  return (
    <>
      <section className={styles.skills_section}>
        <h3>Minhas Habilidades</h3>
        <div className={styles.skills_container}>
          <Barra tech="Html5" percent={90} />
          <Barra tech="CSS3" percent={90} />
          <Barra tech="JavaScript" percent={90} />
          <Barra tech="BootStrap" percent={90} />
          <Barra tech="React" percent={80} />
          <Barra tech="Python" percent={90} />
        </div>
      </section>
    </>
  );
}
