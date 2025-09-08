import { footerData } from "@/data/data";


const Footer = () => {
    const {description, year, copyright} = footerData;
    return (
        <footer className="flex flex-col items-center justify-center gap-3 p-3 lg:flex-row lg:p-5">
            <p>{copyright}</p>
            <p>{year}</p>
            <p>{description}</p>
        </footer>
    )
}

export default Footer;