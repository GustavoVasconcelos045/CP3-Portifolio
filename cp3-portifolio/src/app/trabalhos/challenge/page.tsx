
const Challenge = () => {
    const trabalho = {
      titulo: 'Challenge',
      descricao:
        'Este trabalho foi realizado em parceria com a Porto Seguro, onde desenvolvemos uma plataforma para autoatendimento do cliente. O objetivo era facilitar a interação dos usuários com os serviços da empresa, oferecendo uma interface amigável e acessível.',
      nota: 70, // Nota do trabalho
    };
  
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">{trabalho.titulo}</h1>
        <p className="mt-4">{trabalho.descricao}</p>
        <div className="mt-6">
          <h2 className="text-xl">Nota Geral: {trabalho.nota}</h2>
        </div>
      </div>
    );
  };
  
  export default Challenge;
  