import Searchbar from "./Searchbar";

export default function Layout({children, setQuery}){
    return(
        <>
        <h1>Bookify</h1>
        <nav>
            <Searchbar setQuery = {setQuery}/>
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}