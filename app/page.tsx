import React from "react";
import { categories } from "../constant";
import { fetchNews } from "../utils";

type Props = {};

const HomePage = async (props: Props) => {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div className="text-red-400 font-bold">Home Page</div>;
};

export default HomePage;
