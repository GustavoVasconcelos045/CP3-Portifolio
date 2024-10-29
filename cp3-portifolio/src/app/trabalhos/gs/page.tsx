import data from '@/data/database.json';

export default function GSPage() {
    return (
        <div>
            <h3>Lista de Trabalhos de Global Solution (GS)</h3>
            <ul>
                {data.tra.filter(trabalho => trabalho.tipo === "GS").map((trabalho, index) => (
                    <li key={index}>
                        <h4>{trabalho.titulo}</h4>
                        <p>Nota: {trabalho.nota}</p>
                        <p>Descrição: {trabalho.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
