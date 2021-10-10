import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar pão na padaria!', done: false },
    { id: 2, name: 'comprar um bolo na padaria!', done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>LISTA DE TAREFAS</C.Header>

        {/* Aréa de adicionar nova tarefa */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;