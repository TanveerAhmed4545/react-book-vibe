const Contact = () => {
  return (
    <div className=" my-5 lg:my-9">
      {/* <h2>Contact</h2> */}

      <div className="text-center py-8 border-dashed border border-x-0">
        <h2 className="text-neutral-900 text-2xl lg:text-4xl font-extrabold">
          Get In Touch
        </h2>
        <p className="text-neutral-900 pt-6 w-full mx-auto lg:w-9/12">
          Welcome to the heart of our Book community!{" "}
        </p>
      </div>

      <div className="mt-6 lg:mt-12 flex gap-6 flex-col lg:flex-row">
        <div className="rounded-2xl border border-neutral-900 border-opacity-10 lg:p-12 p-5 lg:basis-2/5 basis-full">
          <div className="p-6 bg-lime-300 bg-opacity-10 rounded-2xl">
            <p className="pt-6">Phone Number :</p>
            <h3 className="font-bold pt-3">(+62) 123-821-543</h3>
          </div>

          <div className="p-6 bg-amber-300 bg-opacity-10 rounded-2xl my-6">
            <p className="pt-6">Email :</p>
            <h3 className="font-bold pt-3">book@support.com</h3>
          </div>

          <div className="p-6 bg-blue-400 bg-opacity-10 rounded-2xl">
            <p className="pt-6">Location :</p>
            <h3 className="font-bold pt-3">1230 Uttara , Dhaka</h3>
          </div>
        </div>

        <form className="lg:basis-3/5 basis-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Your Name
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#F8F8F8]"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </label>

            {/* input-2 */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Your Email
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#F8F8F8]"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>

            {/* input-3  */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Subject
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#F8F8F8]"
                type="text"
                placeholder="Enter your subject"
                required
              />
            </label>

            {/* input-4  */}

            <label>
              <span className="text-neutral-900 text-xl font-bold">
                Phone Number
              </span>{" "}
              <br />
              <input
                className="mt-4 w-full p-5 rounded-xl border-0 outline-0 bg-[#F8F8F8]"
                type="number"
                placeholder="Enter your phone number"
                required
              />
            </label>
          </div>

          {/* input 5  */}
          <label>
            <span className="text-neutral-900 text-xl font-bold ">Message</span>{" "}
            <br />
            <textarea className="mt-4 w-full p-5 pb-36 lg:pb-64 rounded-xl border-0 outline-0 bg-[#F8F8F8] text-[#9CA3AF] resize-none">
              Write your message
            </textarea>
          </label>

          <button className="btn text-white text-xl font-bold bg-red-500 w-full mt-6">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
