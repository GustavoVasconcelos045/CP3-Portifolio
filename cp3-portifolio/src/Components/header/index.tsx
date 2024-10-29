import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4">
            <h1>Portfólio Acadêmico</h1>
            <nav>
                <Link href="/">Início</Link>
                <Link href="/integrantes">Integrantes</Link>
                <Link href="/trabalhos">Trabalhos</Link>
            </nav>
        </header>
    );
}
