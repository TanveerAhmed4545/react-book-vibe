import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import ReadBookList from "../ReadBookList/ReadBookList";


const ReadBooks = () => {
    const readData = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [filterBook,setFilterBook] = useState([]);

    console.log(readBooks);
 
    const handleBooksFilter = filter =>{
      if(filter === 'all'){
       setFilterBook(readBooks);
      }else if(filter === 'num'){
        const filteredBooks = readBooks.filter(book => book.totalPages >= 0);
        const sortedFilteredBooks = filteredBooks.sort((a, b) =>  b.totalPages - a.totalPages  );
        setFilterBook(sortedFilteredBooks);
      }else if (filter === 'year') {
        const filteredYearBooks = readBooks.filter(book => book.yearOfPublishing >= 0);
        const sortedFilteredBooks=  filteredYearBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setFilterBook(sortedFilteredBooks);
      } else if (filter === 'rating') {
        
        const filteredBooks = readBooks.filter(book => book.rating >= 0);
        const sortedFilteredBooks = filteredBooks.sort((a, b) => b.rating - a.rating);
        setFilterBook(sortedFilteredBooks);
      }
    }

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
          setFilterBook(dataAll);
          console.log(dataAll);
        }
      }, [readData]);

    return (
        <div>

          <div className="pt-4 text-center">
          <details className="dropdown">
  <summary className="m-1 btn bg-[#23BE0A] text-white">Sort by</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleBooksFilter('all')}><a>All</a></li>
    <li onClick={() => handleBooksFilter('num')}><a>Page Number</a></li>
    <li onClick={() => handleBooksFilter('year')}><a>Year</a></li>
    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
  </ul>
</details>
          </div>

          <div className="flex flex-col gap-5 my-5">
            {/* <h2>ReadBooks : {readBooks.length}</h2> */}

            {
              filterBook.map((read,idx) => <ReadBookList read={read} key={idx}></ReadBookList>)
            }

        </div>
        </div>
    );
};

export default ReadBooks;