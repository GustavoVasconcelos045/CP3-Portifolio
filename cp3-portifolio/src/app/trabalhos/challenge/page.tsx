import data from '@/data/database.json';

export default function ChallengePage() {
    return (
        <div>
            <h3>Lista de Challenges</h3>
            <ul>
                {data.trabalhos.filter(trabalho => trabalho.tipo === "Challenge").map((trabalho, index) => (
                    <li key={index}>
                        <h4>{trabalho.titulo}</h4>
                        <p>Nota: {trabalho.nota}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
