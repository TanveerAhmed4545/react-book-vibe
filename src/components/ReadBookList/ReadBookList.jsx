import { IoPeopleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ReadBookList = ({read}) => {
    // eslint-disable-next-line react/prop-types
    const {id,bookName,author,image,yearOfPublishing,publisher,totalPages,category,tags,rating} =read;
    return (
        <div>
      <div className="card lg:card-side bg-base-100 border p-5">
        <figure>
          <img className="rounded-2xl w-auto lg:h-80" src={image} />
        </figure>
        <div className="ml-6">
          <h2 className="font-bold text-2xl pt-5 lg:pt-0">{bookName}</h2>
          <p className="font-medium mt-4">By: {author}</p>
          <div className="flex gap-7 flex-col lg:flex-row items-center my-5">
       <div className="flex items-center gap-3">
       <p className="text-[#131313]">Tags : </p>
    {
        // eslint-disable-next-line react/prop-types
        tags.map((tag,index) => <button className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px]" key={index}>{tag}</button>)
    }
       </div>
    <p className="flex items-center gap-3"><span className="text-xl"><CiLocationOn></CiLocationOn></span> <span>Year of Publishing : {yearOfPublishing}</span></p>
    </div>
    <div className="flex gap-6 flex-col lg:flex-row border-b-2 pb-4 ">
    <p className="flex items-center gap-3 text-[#13131399]"><span className="text-xl"><IoPeopleOutline></IoPeopleOutline></span> <span>Publisher : {publisher}</span></p>
    <p className="flex items-center gap-3 text-[#13131399]"><span className="text-xl"><MdOutlineFindInPage></MdOutlineFindInPage></span> <span>Page {totalPages}</span></p>
    </div>
          <div className="card-actions mt-4">
            <button className="btn bg-[#328EFF26] text-[#328EFF] rounded-[30px]">Category : {category}</button>
            <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-[30px]">Rating : {rating}</button>
           <Link to={`/listed-details/${id}`}> <button className="btn bg-[#23BE0A] text-white rounded-[30px]">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ReadBookList;