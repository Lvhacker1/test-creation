import { footerData } from "@/data/data";


const Footer = () => {
    const {description, year, copyright} = footerData;
    return (
        <footer className="flex flex-row items-center justify-center gap-3 p-5">
            <p>{copyright}</p>
            <p>{year}</p>
            <p>{description}</p>
        </footer>
    )
}

export default Footer;