import { PageIntroProps } from "@/types/types"

const PageIntro = ({title, description}: PageIntroProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default PageIntro;