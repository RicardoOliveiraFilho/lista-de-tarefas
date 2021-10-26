import { useState, KeyboardEvent } from 'react';
import * as Style from './styles';

type AdicaoItemProps = {
  onEnter: (nameTask: string) => void;
}

export function AdicaoItem({ onEnter }: AdicaoItemProps) {
  const [valueInput, setValueInput] = useState<string>('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && valueInput !== '') {
      onEnter(valueInput);
      setValueInput('');
    }
  }

  return (
    <Style.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Style.Container>
  );
}