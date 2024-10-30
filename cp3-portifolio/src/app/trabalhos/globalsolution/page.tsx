

const GlobalSolution = () => {
    const trabalho = {
      titulo: 'Global Solution',
      descricao:
        'O projeto Global Solution visa o apadrinhamento de animais, com o objetivo de arrecadar fundos para iniciativas que protejam e preservem o oceano. Através do apadrinhamento, os participantes contribuem diretamente para a conservação marinha, promovendo a educação ambiental e incentivando ações sustentáveis.',
      nota: 90, // Nota do trabalho
    };
  
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">{trabalho.titulo}</h1>
        <p className="mt-4">{trabalho.descricao}</p>
        <div className="mt-6">
          <h2 className="text-xl">Nota: {trabalho.nota}</h2>
        </div>
      </div>
    );
  };
  
  export default GlobalSolution;
  