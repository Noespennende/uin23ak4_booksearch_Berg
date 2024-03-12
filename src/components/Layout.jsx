import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Layout({children, setQuery}){
    return(
        <>
            <header>
                <Link to="/" className="logo">Bookify</Link>
                <nav>
                    <Searchbar setQuery = {setQuery}/>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}