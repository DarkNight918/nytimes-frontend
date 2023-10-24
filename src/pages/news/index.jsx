import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import { getNYTopStories } from "../../services/news.service";

// Components
import Card from "../../components/Card";

// Modules
import { Oval } from "react-loader-spinner";

const News = () => {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get top stories of NY
    const getNewsData = async () => {
      // set the loading true
      setIsLoading(true);
      const data = await getNYTopStories();
      setNews(data);

      // finish loading
      setIsLoading(false);
    };

    getNewsData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="absolute left-0 top-0 z-40 h-screen w-full bg-neutral-950/70 flex justify-center items-center">
          <Oval
            height={70}
            width={70}
            color="#bec0c2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4b4b4d"
            strokeWidth={6}
            strokeWidthSecondary={5}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-10">
          {news &&
            news.results.map((newsItem, index) => {
              if (newsItem.url) {
                return (
                  <Link to={newsItem.url} key={index}>
                    <Card
                      section={newsItem.section}
                      subsection={newsItem.subsection}
                      title={newsItem.title}
                      imgURL={newsItem.multimedia[0].url}
                      abstract={newsItem.abstract}
                      byline={newsItem.byline}
                      updated_date={newsItem.updated_date}
                    />
                  </Link>
                );
              } else {
                return null;
              }
            })}
        </div>
      )}
    </>
  );
};

export default News;
