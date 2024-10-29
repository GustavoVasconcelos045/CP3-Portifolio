import data from '@/data/database.json';

export default function CheckpointsPage() {
    return (
        <div>
            <h3>Lista de Checkpoints</h3>
            <ul>
                {data.trabalhos.filter(trabalho => trabalho.tipo === "Checkpoint").map((trabalho, index) => (
                    <li key={index}>
                        <h4>{trabalho.titulo}</h4>
                        <p>Nota: {trabalho.nota}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
