import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-6 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Portfólio-2024</h1>
                <nav className="flex gap-6 text-lg">
                    <Link href="/">Início</Link>
                    <Link href="/integrantes">Integrantes</Link>
                    <Link href="/trabalhos">Trabalhos</Link>
                </nav>
            </div>
        </header>
    );
}
