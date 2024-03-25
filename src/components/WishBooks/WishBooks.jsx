import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";


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
        <div>
            <h2>WishBooks : {wishLists.length}</h2>
        </div>
    );
};

export default WishBooks;