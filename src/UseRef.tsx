import { useRef } from 'react'

export function UseRef() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` aponta para o evento de `focus` gerado pelo campo de texto
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </div>
  );
}