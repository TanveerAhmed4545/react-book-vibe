import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=" mt-5 lg:mt-12 mb-5 lg:mb-16">
            <div className="hero  bg-[#1313130D] rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse py-20">
    <img src='../../../public/images/banner.png' className="w-auto   " />
    <div>
      <h1 className="text-5xl font-bold mb-11">Books to freshen <br /> up your bookshelf</h1>
     
      <Link to={'/listed'}><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;