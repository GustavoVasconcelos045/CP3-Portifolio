import Link from "next/link";

export default function HomePage() {
  const generateDescription = (category: string) => {
    category = category.toLowerCase();
    if (category === "checkpoint") {
      return "CheckPoints";
    } else if (category === "globalsolution") {
      return "Global Solution";
    } else {
      return "Challenge";
    }
  };

  const integrantes = [
    { nome: "Igor", media: 7.6 },
    { nome: "Felipe", media: 7.3 },
    { nome: "Gustavo", media: 7.0 },
  ];

  return (
    <div className="min-h-[100vh] py-12 px-4 flex flex-col items-center gap-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="font-bold text-[40px] mb-4">Portfólio Acadêmico</h1>
      <h2 className="font-semibold text-2xl mb-2">Trabalhos Realizados</h2>
      <p className="text-center mb-6">Aqui estão os principais trabalhos desenvolvidos ao longo do semestre. Clique para ver detalhes.</p>

      <div className="flex flex-col items-center gap-4"> 
        {["CheckPoints", "Challenge", "GlobalSolution"].map((category) => (
          <div
            key={category.toLowerCase()}
            className="w-[300px] p-4 bg-blue-600 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          >
            <h2 className="font-semibold text-xl">{category}</h2>
            <p className="text-center mt-2">{generateDescription(category)}</p>
            <Link
              href={`/trabalhos/${category.toLowerCase()}`}
              className="mt-4 py-2 px-4 font-semibold bg-blue-800 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700"
            >
              Ver Mais
            </Link>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-12">Médias Gerais - 1º Semestre</h2>
      <p className="text-center mb-6">Abaixo estão as médias gerais de cada integrante no semestre.</p>

      <div className="flex flex-wrap justify-center gap-6">
        {integrantes.map((integrante) => (
          <div
            key={integrante.nome}
            className="w-[200px] h-[100px] bg-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md"
          >
            <h3 className="font-semibold text-lg">{integrante.nome}</h3>
            <p className="text-center mt-2">Média: {integrante.media}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
