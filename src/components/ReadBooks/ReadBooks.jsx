import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";


const ReadBooks = () => {
    const readData = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getStored("readlist");
        console.log(storedBooks);
    
        if (readData.length > 0) {
          const dataAll = [];
    
          for (const id of storedBooks) {
            const book = readData.find((d) => d.id === id);
    
            if (book) {
              dataAll.push(book);
            }
          }
          setReadBooks(dataAll);
          console.log(dataAll);
        }
      }, [readData]);

    return (
        <div>
            <h2>ReadBooks : {readBooks.length}</h2>
        </div>
    );
};

export default ReadBooks;