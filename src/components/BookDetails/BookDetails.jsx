import { useLoaderData, useParams } from "react-router-dom";
import { getStored,  removeFromWishlist,  saveToReadList, saveToWishlist } from "../Utils/localStorage";
import { toast } from "react-toastify";


const BookDetails = () => {

    const data = useLoaderData();

    const {id} = useParams();
    const idInt = parseInt(id);

    const details = data.find(d => d.id === idInt);
    // console.log(details);
 
    const handleReadBook = (bookId) =>{
        const readList = getStored('readlist');
        const isInReadList = readList.includes(bookId);
        const wishlist = getStored('wishlist');
        const isInWishlist = wishlist.includes(bookId);
    
        if (isInReadList) {
            // removeFromWishlist(isInReadList);
            toast.warning('This book is already in your Read list.');
        } else {
            if (isInWishlist) {
                removeFromWishlist(bookId); // Remove from wishlist if already in wishlist
            }
            saveToReadList(bookId);
            toast.success('The book has been added to your Read list.');
        }
    }

    const handleWishList = (bookId) =>{
       


        const readList = getStored('readlist');
        const wishlist = getStored('wishlist');
        const isInReadList = readList.includes(bookId);
        const isInWishlist = wishlist.includes(bookId);
    
        if (isInReadList) {
            
            toast.warning('This book is already in your Read list.');
        } else if (isInWishlist) {
            toast.warning('This book is already in your Wishlist.');
        } else {
            saveToWishlist(bookId);
            toast.success('The book has been added to your Wishlist.');
        }
        


    }


    return (
        <div className="my-12">
            <div className="card lg:card-side bg-base-100 ">
  <figure>
    <div className="p-16 bg-[#1313130D] rounded-2xl">
    <img className="lg:h-[500px]" src={details.image} alt="Album"/>
    </div>
  </figure>
  <div className="lg:ml-12 ml-0 lg:relative">
    <h2 className="font-bold text-4xl">{details.bookName}</h2>
    <p className="my-5 text-[#131313CC]">By : {details.author}</p>
    <div className="border-y-2">
    <p className="py-4">{details.category}</p>
    </div>
    <p className="pt-5"><span className="text-[#131313]">Review :</span> <span className="text-[#131313B3]">{details.review}</span></p>
    <div className="flex gap-3 items-center mt-9 border-b-2 pb-5">
        <p>Tags : </p>
    {
        // eslint-disable-next-line react/prop-types
        details.tags.map((tag,index) => <button className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px]" key={index}>{tag}</button>)
    }
    </div>
    <p className="pt-6 pb-3 flex items-center gap-7"><span className="text-[#131313B3]">Number of Pages :</span> <span>{details.totalPages}</span></p>
    <p className="flex items-center gap-7"><span className="text-[#131313B3]">Publisher : </span> <span>{details.publisher}</span></p>
    <p className="flex items-center gap-7 py-3"><span className="text-[#131313B3]">Year of Publishing:</span> <span>{details.yearOfPublishing}</span></p>
    <p className="flex items-center gap-7"><span className="text-[#131313B3]">Rating:</span> <span>{details.rating}</span></p>
    <div className="card-actions lg:absolute bottom-0">
      <button onClick={() => handleReadBook(details.id)} className="btn btn-outline border-[#1313134D]">Read</button>
      <button  onClick={() => handleWishList(details.id)} className="btn  bg-[#50B1C9] text-white">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;