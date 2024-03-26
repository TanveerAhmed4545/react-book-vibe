import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Book = ({list}) => {
    // eslint-disable-next-line react/prop-types
    const {id,bookName,author,image,tags,category,rating} = list;
    // console.log(tags);
    return (
       // eslint-disable-next-line no-undef
       <Link to={`/listed-details/${id}`}>
        <div className="card  bg-base-100 border rounded-2xl">
  <figure className="px-5 pt-5">
    <div className="rounded-xl px-20 py-7 bg-[#F3F3F3] w-full ">
    <img src={image} alt="Shoes" className="mx-auto h-auto lg:h-44 rounded-xl" />
    </div>
  </figure>
  <div className="px-5 flex gap-3 mt-6">
    {
        // eslint-disable-next-line react/prop-types
        tags.map((tag,index) => <button className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px]" key={index}>{tag}</button>)
    }
  </div>
  <div className="px-5 pb-5">
    <h2 className="card-title my-5 ">{bookName}</h2>
    <p>By : {author}</p>
    
  </div>
</div>
</Link>
    );
};

export default Book;