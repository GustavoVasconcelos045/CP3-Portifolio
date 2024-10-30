// pages/trabalhos/editar-notas.js

"use client";

import { useState, useEffect } from 'react';

const EditarNotas = () => {
  const [notas, setNotas] = useState({
    checkpoint1: 65,
    checkpoint2: 70,
    checkpoint3: 85,
    challenge: 70,
    globalSolution: 80,
  });

  // Função para buscar as notas do servidor
  useEffect(() => {
    const fetchNotas = async () => {
      const response = await fetch('/api/notas');
      const data = await response.json();
      setNotas(data);
    };
    fetchNotas();
  }, []);

  const handleNotaChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNotas((prevNotas) => ({
      ...prevNotas,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/notas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notas),
      });
      const result = await response.json();
      console.log(result.message); // Mensagem de sucesso
    } catch (error) {
      console.error('Erro ao salvar as notas:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Editar Notas</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <h2 className="text-2xl font-semibold mt-4">Notas dos Checkpoints</h2>
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 1:</label>
          <input
            type="number"
            name="checkpoint1"
            value={notas.checkpoint1}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 2:</label>
          <input
            type="number"
            name="checkpoint2"
            value={notas.checkpoint2}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 3:</label>
          <input
            type="number"
            name="checkpoint3"
            value={notas.checkpoint3}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-4">Notas de Outros Trabalhos</h2>
        <div className="mb-4">
          <label className="block mb-1">Nota Challenge:</label>
          <input
            type="number"
            name="challenge"
            value={notas.challenge}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nota Global Solution:</label>
          <input
            type="number"
            name="globalSolution"
            value={notas.globalSolution}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white rounded p-2">
          Salvar Notas
        </button>
      </form>
    </div>
  );
};

export default EditarNotas;
