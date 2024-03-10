export default function Layout({children}){
    return(
        <>
        <p>Layout!</p>
        <nav>
            <form>
                <label htmlFor="search">Search for a book</label>
                <input type="text" id="search" placeholder="James bond..."></input>
                <input type="submit" value="Search"></input>
            </form>
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}