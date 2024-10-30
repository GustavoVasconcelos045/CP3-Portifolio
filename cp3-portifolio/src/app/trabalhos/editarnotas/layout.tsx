export default function EditarLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="editar-layout">
            <h2>Editar notas</h2>
            {children}
        </div>
    );
}
