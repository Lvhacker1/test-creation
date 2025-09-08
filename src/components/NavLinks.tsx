import { navLinks } from "@/data/data"
import Link from "next/link"

const NavLinks = () => {
    return (
            <nav className="space-x-5 text-lg font-medium md:space-x-10">
                {navLinks.map(link => 
                    <Link key={link.href} href={link.href }>{link.name}</Link>
                )}
            </nav>
    )
}

export default NavLinks