import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import WishBookList from "../WishBookList/WishBookList";


const WishBooks = () => {
    const wishData = useLoaderData();

    const [wishLists, setWishLists] = useState([]);
    const [filterWish,setFilerWish] = useState([]);



    const handleWishFilter = filter =>{
      if(filter === 'all'){
        setFilerWish(wishLists);
       }else if(filter === 'num'){
         const filteredBooks = wishLists.filter(book => book.totalPages >= 0);
         const sortedFilteredBooks = filteredBooks.sort((a, b) =>  b.totalPages - a.totalPages  );
         setFilerWish(sortedFilteredBooks);
       }else if (filter === 'year') {
         const filteredYearBooks = wishLists.filter(book => book.yearOfPublishing >= 0);
         const sortedFilteredBooks=  filteredYearBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
         setFilerWish(sortedFilteredBooks);
       } else if (filter === 'rating') {
         
         const filteredBooks = wishLists.filter(book => book.rating >= 0);
         const sortedFilteredBooks = filteredBooks.sort((a, b) => b.rating - a.rating);
         setFilerWish(sortedFilteredBooks);
       }
    }
    

    useEffect(() => {
        const storedWishBooks = getStored("wishlist");
        console.log(storedWishBooks);
    
        if (wishData.length > 0) {
          const dataWishAll = [];
    
          for (const id of storedWishBooks) {
            const bookWish = wishData.find((d) => d.id === id);
    
            if (bookWish) {
              dataWishAll.push(bookWish);
            }
          }
          setWishLists(dataWishAll);
          setFilerWish(dataWishAll);
          console.log(dataWishAll);
        }
      }, [wishData]);

    return (
        <div>

             
<div className="pt-4 text-center">
          <details className="dropdown">
  <summary className="m-1 btn bg-[#23BE0A] text-white">Sort by</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleWishFilter('all')}><a>All</a></li>
    <li onClick={() => handleWishFilter('num')}><a>Page Number</a></li>
    <li onClick={() => handleWishFilter('year')}><a>Year</a></li>
    <li onClick={() => handleWishFilter('rating')}><a>Rating</a></li>
  </ul>
</details>
          </div>



          <div className="flex flex-col gap-5 my-5">
            {/* <h2>WishBooks : {wishLists.length}</h2> */}

            {
              filterWish.map((wish,idx) => <WishBookList key={idx} wish={wish}></WishBookList>)
            }
        </div>
        </div>
    );
};

export default WishBooks;