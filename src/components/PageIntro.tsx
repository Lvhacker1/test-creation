import { PageIntroProps } from "@/types/types"

const PageIntro = ({title, description}: PageIntroProps) => {
    return (
        <div className="flex flex-col items-center text-center p-5 bg-gray-100 rounded-lg my-10">
            <h1 className="text-2xl text-black font-bold" >{title}</h1>
            <p className="text-black font-bold">{description}</p>
        </div>
    )
}

export default PageIntro;