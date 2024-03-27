import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBookList from "../ReadBookList/ReadBookList";
import WishBookList from "../WishBookList/WishBookList";

const Listed = () => {
  const data = useLoaderData();
  console.log(data);

  const [readBook, setReadBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  // const [tabIndexs,setTabIndexs] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [filterBook,setFilterBook] = useState([]);
  const [filterWishBook,setFilterWishBook] = useState([]);




  const handleBooksFilter = filter =>{
    if(filter === 'all'){
     setFilterBook(readBook);
     setFilterWishBook(wishList);
    }else if(filter === 'num'){
      const filteredBooks = readBook.filter(book => book.totalPages >= 0);
      const sortedFilteredBooks = filteredBooks.sort((a, b) =>  b.totalPages - a.totalPages  );
      setFilterBook(sortedFilteredBooks);
      setFilterWishBook(sortedFilteredBooks);
    }else if (filter === 'year') {
      const filteredYearBooks = readBook.filter(book => book.yearOfPublishing >= 0);
      const sortedFilteredBooks=  filteredYearBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setFilterBook(sortedFilteredBooks);
      setFilterWishBook(sortedFilteredBooks);
    } else if (filter === 'rating') {
      
      const filteredBooks = readBook.filter(book => book.rating >= 0);
      const sortedFilteredBooks = filteredBooks.sort((a, b) => b.rating - a.rating);
      setFilterBook(sortedFilteredBooks);
      setFilterWishBook(sortedFilteredBooks);
    }
  }



  console.log(readBook,wishList);
  useEffect(() => {
    const storedBooks = getStored("readlist");
    // console.log(storedBooks);

    if (data.length > 0) {
      const dataAll = [];

      for (const id of storedBooks) {
        const book = data.find((d) => d.id === id);

        if (book) {
          dataAll.push(book);
        }
      }
      setReadBook(dataAll);
      setFilterBook(dataAll);
      console.log(dataAll);
    }
  }, [data]);

  useEffect(() => {
    const storedWishBooks = getStored("wishlist");
    // console.log(storedWishBooks);

    if (data.length > 0) {
      const dataWishAll = [];

      for (const id of storedWishBooks) {
        const bookWish = data.find((d) => d.id === id);

        if (bookWish) {
          dataWishAll.push(bookWish);
        }
      }
      setWishList(dataWishAll);
      setFilterWishBook(dataWishAll);
      console.log(dataWishAll);
    }
  }, [data]);

  return (
    <div>
      <div className="w-full bg-[#1313130D] rounded-2xl text-center">
        <h2 className="py-8 font-bold text-3xl">Books</h2>
      </div>
      
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

       <div>
       <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Read Books</Tab>
        <Tab>Wishlist Books</Tab>
      </TabList>
      <TabPanel>Read
      <div className="flex flex-col gap-5 my-5">
            {/* <h2>ReadBooks : {readBooks.length}</h2> */}

            {
              filterBook.map((read,idx) => <ReadBookList read={read} key={idx}></ReadBookList>)
            }

        </div>
         </TabPanel>
      <TabPanel> Wish 
      <div className="flex flex-col gap-5 my-5">
            {/* <h2>WishBooks : {wishLists.length}</h2> */}

            {
              filterWishBook.map((wish,idx) => <WishBookList key={idx} wish={wish}></WishBookList>)
            }
        </div>
      </TabPanel>
    </Tabs>
       </div>
       


{/* tabs */}
{/* <div className="pt-10">
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
	<Link
     to="" 
    onClick={()=> setTabIndexs(0)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndexs === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg`}>
		
		<span>Read Books</span>
	</Link>
	<Link  
    to={`wishlist`}
    onClick={()=> setTabIndexs(1)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndexs === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg`}>
		
		<span>Wishlist Books</span>
	</Link>
	
	
</div>
<Outlet></Outlet>
          </div>   */}

    </div>

  );
};

export default Listed;
