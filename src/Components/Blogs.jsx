const Blogs = () => {
  const blogs = [
    {
      title: "Top 5 Street Foods You Must Try",
      excerpt: "A curated list of local street foods loved by our community.",
    },
    {
      title: "How to Write a Helpful Food Review",
      excerpt: "Tips to make your food reviews more valuable to others.",
    },
    {
      title: "Hidden Restaurants Worth Exploring",
      excerpt: "Discover underrated food spots around your city.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          From Our Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border hover:shadow"
            >
              <h3 className="text-xl font-medium mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="text-orange-500 font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
