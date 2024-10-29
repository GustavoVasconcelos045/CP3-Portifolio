type NotaProps = {
    titulo: string;
    nota: number;
};

export default function Nota({ titulo, nota }: NotaProps) {
    return (
        <div className="nota">
            <h3>{titulo}</h3>
            <p>Nota: {nota}</p>
        </div>
    );
}
