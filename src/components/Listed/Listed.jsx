import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";


const Listed = () => {

    const data = useLoaderData();
       
    const [readBook,setReadBook] = useState([]);
    const [wishList,setWishList] = useState([]);

    useEffect(()=>{
        const storedBooks = getStored('readlist');
        console.log(storedBooks);

        if(data.length > 0){
            const dataAll = [];

            for(const id of storedBooks){
                const book = data.find((d) => d.id === id);

                if(book){
                    dataAll.push(book);
                }
            }
            setReadBook(dataAll);
            console.log(dataAll); 

        }

    },[data])


    useEffect(()=>{

    },[])


    return (
        <div>
            <h2>Listed read : {readBook.length}</h2>
        </div>
    );
};

export default Listed;