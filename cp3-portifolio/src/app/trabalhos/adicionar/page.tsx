import { useState } from 'react';
 
export default function AdicionarPage() {
  const [titulo, setTitulo] = useState('');
  const [nota, setNota] = useState('');
  const [descricao, setDescricao] = useState('');
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para adicionar o novo trabalho (como fazer um POST para a API)
    console.log({ titulo, nota, descricao });
  };
 
  return (
<form onSubmit={handleSubmit}>
<div>
<label>Título:</label>
<input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
</div>
<div>
<label>Nota:</label>
<input type="number" value={nota} onChange={(e) => setNota(e.target.value)} />
</div>
<div>
<label>Descrição:</label>
<textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
</div>
<button type="submit">Adicionar Trabalho</button>
</form>
  );
}