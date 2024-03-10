import Bookcard from "./Bookcard"

export default function Home({content}){

    console.log(content)

    return(
        <>
            <section>
                {content?.map((book, index) =>
                <Bookcard key={"book"+ index} title={book.title} author={book.author_name} year={book.first_publish_year} rating={book.ratings_average} amazoneId={book.id_amazon}/>
                )}
            </section>
        </>
    )
}
