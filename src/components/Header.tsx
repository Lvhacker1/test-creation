import NavLinks from "./NavLinks";

const Header = () => {
    return (
        <header className="p-4 border-b border-b-gray-300 flex justify-around items-center">
            <NavLinks />
        </header>
    )
}

export default Header;