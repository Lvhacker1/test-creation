import { navLinks } from "@/data/data";
import Link from "next/link";

const Header = () => {
    return (
        <header className="p-4 border-b border-b-gray-300 flex justify-around items-center">
            <nav className="space-x-5 text-lg font-medium md:space-x-10">
                {navLinks.map(link => 
                    <Link key={link.href} href={link.href }>{link.name}</Link>
                )}
            </nav>

        </header>
    )
}

export default Header;