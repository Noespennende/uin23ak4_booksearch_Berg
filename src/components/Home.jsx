export default function Home({content}){

    console.log(content)

    return(
        <>
            <section>
                {content?.map((book, index) =>
                <article key={"book"+ index}>
                    <h3>{book.title}</h3>
                    <h4>Author:</h4>
                    {book?.author_name?.map((author, idx) =>
                    <li key={"author" + idx}>{author}</li>)}
                    <p>First published: {book.first_publish_year}</p>
                </article>)}
            </section>
            <p>Home!</p>
        </>
    )
}
