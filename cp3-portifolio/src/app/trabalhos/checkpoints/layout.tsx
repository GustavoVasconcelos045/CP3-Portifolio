export default function CheckpointsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="checkpoints-layout">
            <h2>Trabalhos de Checkpoints</h2>
            {children}
        </div>
    );
}
