import React from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ category, country }) {
  return (
    <div>
      <h2 className="text-center">
        Latest <span>News</span>
      </h2>
      <NewsItem category={category} country={country} />
    </div>
  );
}
