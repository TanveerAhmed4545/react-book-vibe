import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";

const Listed = () => {
  const data = useLoaderData();

  const [readBook, setReadBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [tabIndex,setTabIndex] = useState(0);

  useEffect(() => {
    const storedBooks = getStored("readlist");
    console.log(storedBooks);

    if (data.length > 0) {
      const dataAll = [];

      for (const id of storedBooks) {
        const book = data.find((d) => d.id === id);

        if (book) {
          dataAll.push(book);
        }
      }
      setReadBook(dataAll);
      console.log(dataAll);
    }
  }, [data]);

  useEffect(() => {
    const storedWishBooks = getStored("wishlist");
    console.log(storedWishBooks);

    if (data.length > 0) {
      const dataWishAll = [];

      for (const id of storedWishBooks) {
        const bookWish = data.find((d) => d.id === id);

        if (bookWish) {
          dataWishAll.push(bookWish);
        }
      }
      setWishList(dataWishAll);
      console.log(dataWishAll);
    }
  }, [data]);

  return (
    <div>
      <div className="w-full bg-[#1313130D] rounded-2xl text-center">
        <h2 className="py-8 font-bold text-3xl">Books</h2>
      </div>
      <div className="text-center">
        <button className="btn bg-[#23BE0A] text-white">Sort by</button>
      </div>
      <h2>Listed read : {readBook.length}</h2>
      <h2>Listed read : {wishList.length}</h2>

      {/* <div>
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">
          Read Books
          </a>
          <a role="tab" className="tab tab-active">
          Wishlist Books
          </a>
          
        </div>
      </div> */}


          {/* <div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:bg-gray-100 dark:text-gray-800 dark:text-gray-800">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:border-gray-600 dark:text-gray-600 dark:text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Architecto</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:border-gray-600 dark:text-gray-900 dark:text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Corrupti</span>
	</a>
	
	
</div>
          </div> */}
{/* tabs */}
<div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
	<Link
     to="" 
    onClick={()=> setTabIndex(0)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg`}>
		
		<span>Read Books</span>
	</Link>
	<Link  
    to={`wishlist`}
    onClick={()=> setTabIndex(1)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg`}>
		
		<span>Wishlist Books</span>
	</Link>
	
	
</div>
<Outlet></Outlet>
          </div>  

    </div>

  );
};

export default Listed;
