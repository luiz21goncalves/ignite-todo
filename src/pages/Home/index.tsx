import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { TaskList } from '../../components/TaskList';
import styles from './styles.module.css';

export function Home() {
  return (
    <div>
      <Header />

      <main className={styles.content}>
        <Form />
        <TaskList />
      </main>
    </div>
  );
}
