export default function GSLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="gs-layout">
            <h2>Trabalhos de Global Solution (GS)</h2>
            {children}
        </div>
    );
}
