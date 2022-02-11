import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { useLocation } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import { useResultContext } from "../../context/ResultsContext";

export const Results = () => {
  const { results, isLoading, getResults, searchText } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchText !== "") {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchText} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchText}&num=40`);
      }
    }
  }, [searchText, location.pathname]);

  if (isLoading) {
    console.log(isLoading);
    return <Loader />;
  }

  if (location.pathname == "/search") {
    return (
      <div>
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {console.log(results)}
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (location.pathname == "/images") {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {results?.map(({ image, link: { href, title } }, index) => (
          <a href={href} target="_blank" key={index} className="sm:p-3 p-5">
            <img src={image?.src} alt={title} loading="lazy" />
            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
          </a>
        ))}
      </div>
    );
  } else if (location.pathname == "/news") {
    return (
      <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
        {results?.map(({ id, links, source, title }) => (
          <div key={id} className="md:w-2/5 w-full ">
            <a
              href={links?.[0].href}
              target="_blank"
              className="hover:underline "
            >
              <p className="text-lg dark:text-blue-300 text-blue-700">
                {title}
              </p>
            </a>
            <div className="flex gap-4">
              <a
                href={source?.href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:text-blue-300"
              >
                {" "}
                {source?.href}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (location.pathname == "/videos") {
    return (
      <div className="flex flex-wrap ">
        {results?.map((video, index) => (
          <div key={index} className="p-2">
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="355px"
                height="200px"
              />
            )}
          </div>
        ))}
      </div>
    );
  }
};
