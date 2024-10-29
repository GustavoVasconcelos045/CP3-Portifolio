import data from '@/data/database.json';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditarPage() {
    const router = useRouter();
    const { id } = router.query;
    const trabalho = data.trabalhos.find(trab => trab.id === Number(id));

    const [titulo, setTitulo] = useState(trabalho?.titulo || '');
    const [nota, setNota] = useState(trabalho?.nota || '');
    const [descricao, setDescricao] = useState(trabalho?.descricao || '');

    useEffect(() => {
        if (trabalho) {
            setTitulo(trabalho.titulo);
            setNota(trabalho.nota.toString());
            setDescricao(trabalho.descricao);
        }
    }, [trabalho]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para editar o trabalho (como fazer um PUT para a API)
        console.log({ id, titulo, nota, descricao });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div>
                <label>Nota:</label>
                <input type="number" value={nota} onChange={(e) => setNota(e.target.value)} />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>
            <button type="submit">Salvar Alterações</button>
        </form>
    );
}
