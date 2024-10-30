// app/api/notas/route.ts

import { NextResponse } from 'next/server';

let notas = {
  checkpoint1: 88,
  checkpoint2: 92,
  checkpoint3: 85,
  challenge: 90,
  globalSolution: 87,
};

// Função para lidar com requisições GET para buscar as notas
export async function GET() {
  return NextResponse.json(notas);
}

// Função para lidar com requisições POST para atualizar as notas
export async function POST(request: Request) {
  const newNotas = await request.json();
  notas = { ...notas, ...newNotas }; // Atualiza o estado das notas
  return NextResponse.json({ message: 'Notas atualizadas com sucesso', notas });
}
