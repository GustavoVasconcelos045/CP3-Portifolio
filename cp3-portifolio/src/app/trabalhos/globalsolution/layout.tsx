export default function GSLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="gs-layout">
            <h2>Global Solution (GS) - FIAP</h2>
            {children}
        </div>
    );
}
