import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Style from './App.styles';
import { Item } from './types/Item';
import { ListagemItem } from './components/ListagemItem';
import { AdicaoItem } from './components/AdicaoItem';

function App() {
  const [itens, setItens] = useState<Item[]>([
    { id: uuidv4(), name: 'Estudar ReactJS!', done: true },
    { id: uuidv4(), name: 'Estudar Styled Components!', done: false },
  ]);

  const handleAddTask = (nameTask: string) => {
    let newList = [...itens];
    newList.push({
      id: uuidv4(),
      name: nameTask,
      done: false
    });
    setItens(newList);
  }

  const handleToggleTask = (task: Item) => {
    task.done = !task.done;
  }

  const handleDeleteTask = (task: Item) => {
    let newList = itens.filter(item => (task.id !== item.id));
    setItens(newList);
  }

  return (
    <Style.Container>
      <Style.Content>
        <Style.Header>Lista de Tarefas</Style.Header>

        <AdicaoItem onEnter={handleAddTask} />

        {itens.map((item, index) => (
          <ListagemItem
            key={item.id}
            item={item}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </Style.Content>
    </Style.Container>
  );
}

export default App;
