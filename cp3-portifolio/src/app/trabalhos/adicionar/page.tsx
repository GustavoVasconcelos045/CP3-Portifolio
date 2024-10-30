"use client";
import { useState } from 'react';

export default function AdicionarTrabalho() {
  const [novoTrabalho, setNovoTrabalho] = useState({
    titulo: '',
    descricao: '',
    nota: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNovoTrabalho((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/trabalhos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoTrabalho),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o trabalho');
      }

      const result = await response.json();
      alert('Trabalho adicionado com sucesso!');
      setNovoTrabalho({ titulo: '', descricao: '', nota: '' });
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao adicionar o trabalho.');
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',  // Cor de fundo cinza claro
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h2>Adicionar Novo Trabalho</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Título do Trabalho:
          <input
            type="text"
            name="titulo"
            value={novoTrabalho.titulo}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <label>
          Descrição:
          <textarea
            name="descricao"
            value={novoTrabalho.descricao}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <label>
          Nota:
          <input
            type="number"
            name="nota"
            value={novoTrabalho.nota}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <button type="submit" style={{
          padding: '10px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Adicionar Trabalho
        </button>
      </form>
    </div>
  );
}
