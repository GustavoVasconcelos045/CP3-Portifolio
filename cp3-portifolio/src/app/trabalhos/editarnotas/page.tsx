// pages/trabalhos/editar-notas.js

"use client";

import { useState } from 'react';

const EditarNotas = () => {
  // Estado para armazenar as notas
  const [notas, setNotas] = useState({
    nota1: 88,
    nota2: 92,
    nota3: 85,
  });

  // Função para lidar com a mudança nas notas
  const handleNotaChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNotas((prevNotas) => ({
      ...prevNotas,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar as notas
    console.log('Notas salvas:', notas);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Editar Notas</h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 1:</label>
          <input
            type="number"
            name="nota1"
            value={notas.nota1}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 2:</label>
          <input
            type="number"
            name="nota2"
            value={notas.nota2}
            onChange={handleNotaChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nota checkpoint 3:</label>
          <input
            type="number"
            name="nota3"
            value={notas.nota3}
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
