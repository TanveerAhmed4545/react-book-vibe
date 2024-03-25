import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [listedBook,setListedBook] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setListedBook(data))
    },[])

    return (
        <div>
            <h2>Books {listedBook.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                listedBook.map((list) => <Book key={list.id} list={list}></Book> )
            }
            </div>
        </div>
    );
};

export default Books;