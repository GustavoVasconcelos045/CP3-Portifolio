import Link from 'next/link';

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/integrantes">Integrantes</Link></li>
                <li><Link href="/trabalhos">Trabalhos</Link></li>
            </ul>
        </nav>
    );
}
