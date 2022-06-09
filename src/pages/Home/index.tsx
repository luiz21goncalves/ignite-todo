import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <Form />
      </main>
    </div>
  );
}
