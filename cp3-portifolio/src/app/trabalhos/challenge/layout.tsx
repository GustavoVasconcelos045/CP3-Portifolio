export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="challenge-layout">
            <h2>Challenge - FIAP</h2>
            {children}
        </div>
    );
}
