import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const data = useLoaderData();

    const {id} = useParams();
    const idInt = parseInt(id);

    const details = data.find(d => d.id === idInt);
    console.log(details);


    return (
        <div className="my-12">
            <div className="card lg:card-side bg-base-100 ">
  <figure>
    <div className="p-16 bg-[#1313130D] rounded-2xl">
    <img className="max-h-[500px]" src={details.image} alt="Album"/>
    </div>
  </figure>
  <div className="ml-12 relative">
    <h2 className="font-bold text-4xl">{details.bookName}</h2>
    <p className="my-6">By : {details.author}</p>
    <p>{details.category}</p>
    <p><span>Review :</span> <span>{details.review}</span></p>
    <div className="flex gap-3 items-center mt-9">
        <p>Tags : </p>
    {
        // eslint-disable-next-line react/prop-types
        details.tags.map((tag,index) => <button className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-[30px]" key={index}>{tag}</button>)
    }
    </div>
    <p><span>Number of Pages :</span> <span>{details.totalPages}</span></p>
    <p><span>Publisher : </span> <span>{details.publisher}</span></p>
    <p><span>Year of Publishing:</span> <span>{details.yearOfPublishing}</span></p>
    <p><span>Rating:</span> <span>{details.rating}</span></p>
    <div className="card-actions absolute bottom-0">
      <button className="btn btn-outline border-[#1313134D]">Read</button>
      <button className="btn  bg-[#50B1C9] text-white">Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;