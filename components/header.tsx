import Link from "next/link"
export default function Header() {
    return (
        <header>
            <nav className="nav flex justify-between items-center bg-cyan-500 h-10">
                <label htmlFor="author" className="text-3xl text-white font-bold ml-5">Rajababu Shah</label>
                <ul className="flex flex-row justify-center items-center mr-5">
                    <li className="text-xl text-white mr-6"><Link href={"/"}>HOME</Link></li>
                    <li className="text-xl text-white mr-6"><Link href={"/skills"}>SKILLS</Link></li>
                    <li className="text-xl text-white mr-6"><Link href={"/projects"}>PROJECTS</Link></li>
                    <li className="text-xl text-white mr-6"><Link href={"/education"}>EDUCATION</Link></li>
                    <li className="text-xl text-white mr-6"><Link href={"/knowmore"}>WORKS</Link></li>
                    <li className="text-xl text-white mr-6"><Link href={"/contact"}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}