export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="challenge-layout">
            <h2>Trabalhos de Challenge</h2>
            {children}
        </div>
    );
}
