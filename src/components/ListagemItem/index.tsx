import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import * as Style from './styles';
import { Item } from '../../types/Item';

type ListagemItemProps = {
  item: Item;
  onToggle: (task: Item) => void;
  onDelete: (task: Item) => void;
}

export function ListagemItem({ item, onToggle, onDelete }: ListagemItemProps) {
  const [marcado, setMarcado] = useState<boolean>(item.done);

  return (
    <Style.Container done={marcado}>
      <input
        type="checkbox"
        checked={marcado}
        onChange={e => {
          setMarcado(e.target.checked)
          onToggle(item);
        }}
      />
      <label>{item.name}</label>
      <FaTrashAlt
        className="icon-trash"
        title="Remover Tarefa"
        onClick={e => onDelete(item)}
      />
    </Style.Container>
  );
}