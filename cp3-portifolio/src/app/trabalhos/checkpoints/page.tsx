
const Checkpoints = () => {
    const trabalho = {
      titulo: 'Checkpoints',
      descricao:
        'Os Checkpoints são pequenos projetos avaliativos realizados ao longo do ano, que visam desenvolver habilidades práticas e teóricas em diferentes áreas do conhecimento. Cada projeto tem seu próprio conjunto de objetivos e é uma oportunidade para os alunos aplicarem o que aprenderam em sala de aula.',
      notas: {
        nota1: 65,
        nota2: 70,
        nota3: 85,
      },
    };
  
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">{trabalho.titulo}</h1>
        <p className="mt-4">{trabalho.descricao}</p>
        <div className="mt-6">
          <h2 className="text-xl">Notas:</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>Nota 1: {trabalho.notas.nota1}</li>
            <li>Nota 2: {trabalho.notas.nota2}</li>
            <li>Nota 3: {trabalho.notas.nota3}</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Checkpoints;
  