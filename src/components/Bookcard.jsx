import { Link } from "react-router-dom"

export default function Bookcard ({title, year, author, rating, amazoneId, image, searchindex}) {


    return  (
        <article className="articleCard">
            {image? (<img src={`https://covers.openlibrary.org/b/olid/${image}-M.jpg`} alt={`Coverbilde for ${title}`}/>) : (<img src={"https://i.imgur.com/0ZzYCzH.png"} alt={`No coverimage found for this book`}/>)}
            <h3>{title}</h3>
            <h4>Author(s):</h4>
            <ul className="articleCardAuthorList">
            {author?.map((item, index) =>
                <li key={"author" + index}>{item}</li>)}
            </ul>
            <p>First published: {year}</p>
            {rating?  (<p>Rating: {rating?.toFixed(1)}</p>) : (<p>Rating: none</p>) }
            <h4>Amazon links:</h4>
            <ul className="articleCardAmazonList">
                <li><Link to={`https://www.amazon.com/s?k=${title}`}>Amazon link 1</Link></li>
                {amazoneId?.map((item, idx) => 
                <li key={"amazonlink"+idx}><Link key={"amazonLink"+idx} to={`https://www.amazon.com/s?k=${item}`}>Amazon link {idx+2}</Link></li>
                )}
            </ul>
            <Link to={`/book/:${searchindex}`} className="readMore">Read more</Link>
        </article>
    )
}
