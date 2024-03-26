const About = () => {
  return (
    <div className=" my-5 lg:my-10">
      <div className="mb-5 lg:mb-10">
        <div
          className="hero rounded-2xl "
          style={{
            backgroundImage: "url(https://i.ibb.co/17Zc7wB/old-books.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-2xl "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg py-24">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">Welcome to Book Vibe , your premier online destination for literary discovery. As a curated bookshop, we are dedicated to providing you with a carefully selected range of captivating reads spanning genres and authors. From thrilling bestsellers to heartwarming classics and thought-provoking non-fiction, our virtual shelves hold treasures waiting to be unearthed.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mb-5 font-bold text-4xl">OUR PHILOSOPHY</h2>
        <p className="font-medium text-center">
          Some people like to read on a screen. Other people need the variety
          and artistry, the sight, smell, and feel of actual books.They love
          seeing them on their shelves; they love having shelves for them. They
          love taking them along when they leave the house, and stacking them by
          their bedsides. They love finding old letters and bookmarks in them.
          They like remembering where they bought them or who they received them
          from. They want to read in a way that offers a rich experience, more
          than the words only: the full offering of a book. They are particular
          about covers, they want to surround themselves with the poetry of good
          design. They can not pass a bookstore without going in and getting
          something, they keep a library card and use it. They are allergic to
          cheap bestsellers; they delight in the out-of-the-way and the rare,
          the well-made and the hard-to-accomplish. They take care of their
          books; they know a book is only theirs until it passes on to someone
          else. They are good stewards of a timeless object. These are the
          people we are working for.
        </p>
      </div>
    </div>
  );
};

export default About;
