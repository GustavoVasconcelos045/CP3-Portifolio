export default function AdicionarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="adicionar-layout">
            <h2>Adicionar Novo Trabalho</h2>
            {children}
        </div>
    );
}
