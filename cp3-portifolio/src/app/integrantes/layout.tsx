export default function IntegrantesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="integrantes-layout">
            <h1>Integrantes do Projeto</h1>
            {children}
        </div>
    );
}