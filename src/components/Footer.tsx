import { footerData } from "@/data/data";

const Footer = () => {
    const {description, year, copyright} = footerData;
    return (
        <footer className="flex flex-col h-full items-center justify-center gap-3 p-5 md:flex-row md:p-5">
            <div className="flex flex-row">
                <p>{copyright}</p>
                <p>{year}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </footer>
    )
}

export default Footer;