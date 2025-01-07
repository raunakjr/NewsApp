import React, { useEffect, useState } from "react";

export default function NewsItem({ category, country }) {
  const [news, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllNews(data.articles);
        setLoading(false);
      });
  }, [category]);
  return (
    <div className="container mt-4">
      <h1>Top Headlines</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={
                    article.urlToImage ||
                    "data:image/jpeg;base64,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"
                  }
                  className="card-img-top"
                  alt="News Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {article.description || "No description available."}
                  </p>
                  <a
                    href={article.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
