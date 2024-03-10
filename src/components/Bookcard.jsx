import { Link } from "react-router-dom"

export default function Bookcard ({title, year, author, rating, amazoneId}) {


    return  (
        <article>
            <h3>{title}</h3>
            <h4>Author:</h4>
            <ul>
            {author?.map((item, index) =>
                <li key={"author" + index}>{item}</li>)}
            </ul>
            <p>First published: {year}</p>
            {rating?  (<p>Rating: {rating?.toFixed(1)}</p>) : (<p>Rating: none</p>) }
            {amazoneId?.map((item, idx) =>
            <Link key={"amazonLink"+idx} to={`https://www.amazon.com/s?k=${item}`}>Amazon link {idx+1}</Link>
            )}
        </article>
    )
}
