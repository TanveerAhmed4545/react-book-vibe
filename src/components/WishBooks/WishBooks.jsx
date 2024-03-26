import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import WishBookList from "../WishBookList/WishBookList";


const WishBooks = () => {
    const wishData = useLoaderData();

    const [wishLists, setWishLists] = useState([]);

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
          console.log(dataWishAll);
        }
      }, [wishData]);

    return (
        <div className="flex flex-col gap-5 my-5">
            {/* <h2>WishBooks : {wishLists.length}</h2> */}

            {
              wishLists.map((wish,idx) => <WishBookList key={idx} wish={wish}></WishBookList>)
            }
        </div>
    );
};

export default WishBooks;