interface NavItem {
    id: number;
    name: string;
    href: string;
}

const projectNav: NavItem[] = [
    { id: 1, name: "Inicio", href: "/dashboard" },
    { id: 2, name: "Área conocimiento", href: "/area-conocimiento" },
    { id: 3, name: "Criterio evaluación", href: "/criterio-evaluacion" },
    { id: 4, name: "Docente", href: "/docente" },
    { id: 5, name: "Estado propuesta", href: "/estado-propuesta" },
    { id: 6, name: "Facultad", href: "/facultad" },
    { id: 7, name: "Tipo innovación", href: "/tipo-innovacion" }
];

export default function ProjectHeader() {
    return (
        <header className="w-full bg-gray-100 border-b border-gray-950 backdrop-blur-lg shadow-xl">
            <nav className="max-w-7xl mx-auto px-8 py-10">
                <ul className="flex items-center justify-center gap-8">
                    {projectNav.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className="text-sm font-medium text-black transition-colors hover:text-blue-600">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}