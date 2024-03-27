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
        <div className="mb-5 lg:mb-16">
            <div className="text-center pb-5 lg:pb-10">
                <h2 className="font-bold text-4xl ">Books </h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                listedBook.map((list) => <Book key={list.id} list={list}></Book> )
            }
            </div>
        </div>
    );
};

export default Books;