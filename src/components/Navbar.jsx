import { navLinks } from "@/constants"

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple Logo"/>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href="#">{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="./search.svg" alt="Search" />
                    </button>

                    <button>
                        <img src="./cart.svg" alt="Cart" />
                    </button>

                </div>
            </nav>
        </header>
    )
}