import { Barra } from '../assets';
import styles from './Skills.module.css';

export function Skills() {
 
  return (
    <>
      <section className={styles.skills_section}>
        <h3>Minhas Habilidades</h3>
        <div className={styles.skills_container}>
          <Barra tech="Html5" percent={70} />
          <Barra tech="CSS3" percent={70} />
          <Barra tech="JavaScript" percent={60} />
          <Barra tech="BootStrap" percent={85} />
          <Barra tech="React" percent={55} />
          <Barra tech="Python" percent={55} />
        </div>
      </section>
    </>
  );
}
