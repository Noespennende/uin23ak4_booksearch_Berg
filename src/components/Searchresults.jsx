import Bookcard from "./Bookcard"

export default function Home({content, query}){
    return(
        <>
            <section>
                <h1>{query.toUpperCase().replaceAll("+", " ")}</h1>
                {content?.map((book, index) =>
                <Bookcard key={"book"+ index} title={book.title} author={book.author_name} year={book.first_publish_year} rating={book.ratings_average} amazoneId={book.id_amazon} image={book.cover_edition_key} searchindex={index}/>
                )}
            </section>
        </>
    )
}
