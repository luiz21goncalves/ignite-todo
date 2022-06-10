import { useCallback, useMemo, useState } from 'react';

import shortid from 'shortid';

import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { TaskList } from '../../components/TaskList';
import { Todo } from '../../types';
import styles from './styles.module.css';

export function Home() {
  const [todoList, setTodolist] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    setTodolist((prevState) => [
      ...prevState,
      { id: shortid.generate(), isDone: false, text },
    ]);
  }, []);

  const removeTodo = useCallback((todoId: string) => {
    setTodolist((prevState) => prevState.filter((todo) => todo.id !== todoId));
  }, []);

  const toggleCompletedTodoState = useCallback(
    (todoId: string) => {
      const newTodoListState = todoList.reduce((acc, todo) => {
        const currentTodo = todo;

        if (todo.id === todoId) {
          currentTodo.isDone = !todo.isDone;
        }

        acc.push(currentTodo);

        return acc;
      }, [] as Todo[]);

      setTodolist(newTodoListState);
    },
    [todoList],
  );

  const numberOfTotalTodo = useMemo(() => todoList.length, [todoList]);
  const numberOfTodoCompleted = useMemo(
    () => todoList.reduce((acc, todo) => (todo.isDone ? acc + 1 : acc), 0),
    [todoList],
  );

  return (
    <div>
      <Header />

      <main className={styles.content}>
        <Form onAddTodo={addTodo} />
        <TaskList
          todoList={todoList}
          totalTodo={numberOfTotalTodo}
          totalTodoCompleted={numberOfTodoCompleted}
          onToggleComplete={toggleCompletedTodoState}
          onRemove={removeTodo}
        />
      </main>
    </div>
  );
}
