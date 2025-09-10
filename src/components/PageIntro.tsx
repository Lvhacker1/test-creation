import { PageIntroTypes } from "@/types/types"

const PageIntro = ({title, description}: PageIntroTypes) => {
    return (
        <div className="flex flex-col items-center text-center p-5 bg-gray-100 rounded-lg my-5 md:my-10">
            <h1 className="text-3xl text-black font-bold mb-2">{title}</h1>
            <p className="text-black font-medium">{description}</p>
        </div>
    )
}

export default PageIntro;