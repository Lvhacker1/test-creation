import {render, screen} from "@testing-library/react"
import NavLinks from "@/components/NavLinks"

const mockNavLinks = [
    {name: "Home", href: "/" },
    {name: "Courses", href: "/courses" },
    {name: "About", href: "about" },
]

jest.mock('@/data/data', () => ({
    navLinks: mockNavLinks
}))