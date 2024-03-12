import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function BookPage(content){
    const {id} = useParams()
    const contentIndex = parseInt(id.replaceAll(":", ""))

    let book = content.content[contentIndex]

    return (
        <>
        <nav><Link to={"/"}>Home</Link></nav>
            {book.cover_edition_key? (<img src={`https://covers.openlibrary.org/b/olid/${book?.cover_edition_key}-L.jpg`}  alt={`Coverbilde for ${book?.title}`}/>) :
            (<img src={"https://i.imgur.com/0ZzYCzH.png"} alt={`No coverimage found for this book`}/>)}
            <h2>{book.title}</h2>
            <h3>Author(s):</h3>
            <ul>
                {book.author_name?.map((name, index) =>
                <li key={"author"+ index}>{name}</li>
                )}
            </ul>
            <h3>Ratings:</h3>
            <ul>
                <li>Average: {book.ratings_average? (book.ratings_average.toFixed(1)):("none")}</li>
                {book.ratings_count? (<li>Based on: {book.ratings_count} ratings</li>) : ("")}
            </ul>
            <h3>Characters:</h3>
            <ul>
                {book.person_key?.map((char, idx) =>
                <li key={"Char"+idx}>{char.replaceAll("_", " ")}</li>
                )}
            </ul>
            <h3>Languages:</h3>
            <ul>
                {book.language?.map((lang, idx) =>
                <li key={"lang"+idx}>{lang}</li>
                )}
            </ul>
            <h4>Amazon links:</h4>
            <ul>
                <li><Link to={`https://www.amazon.com/s?k=${book.title}`}>Amazon link 1</Link></li>
                {book.amazoneId?.map((item, idx) => 
                <li key={"amazonlink"+idx}><Link key={"amazonLink"+idx} to={`https://www.amazon.com/s?k=${item}`}>Amazon link {idx+2}</Link></li>
                )}
            </ul>

        </>
    )
}