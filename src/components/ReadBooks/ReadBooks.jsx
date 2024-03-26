import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import ReadBookList from "../ReadBookList/ReadBookList";


const ReadBooks = () => {
    const readData = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getStored("readlist");
        // console.log(storedBooks);
    
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
        <div className="flex flex-col gap-5 my-5">
            {/* <h2>ReadBooks : {readBooks.length}</h2> */}

            {
              readBooks.map((read,idx) => <ReadBookList read={read} key={idx}></ReadBookList>)
            }

        </div>
    );
};

export default ReadBooks;