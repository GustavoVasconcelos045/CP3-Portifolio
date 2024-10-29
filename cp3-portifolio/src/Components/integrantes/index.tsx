type IntegranteProps = {
    nome: string;
    funcao: string;
    descricao: string;
};

export default function Integrante({ nome, funcao, descricao }: IntegranteProps) {
    return (
        <div className="p-4 border">
            <h2>{nome}</h2>
            <p>{funcao}</p>
            <p>{descricao}</p>
        </div>
    );
}
