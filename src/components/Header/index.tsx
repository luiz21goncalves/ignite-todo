import igniteTodoLogo from '../../assets/ignite-todo.svg';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteTodoLogo}
        alt="Imagem de um foguete decolando acompanhado da palavra 'todo'"
      />
    </header>
  );
}
