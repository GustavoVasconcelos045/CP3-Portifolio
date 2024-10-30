export default function CheckpointsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="checkpoints-layout">
            <h2>Checkpoints - FIAP</h2>
            {children}
        </div>
    );
}
