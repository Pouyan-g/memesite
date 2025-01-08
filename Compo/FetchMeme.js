"use client";
import { useEffect, useState } from "react";
import "./Fetch.css";

const FetchMeme = () => {
  const [result, SetResult] = useState([]);
  let nextId = 0;
  const makeApiRequest = async () => {
    const _URL = [];
    for (let index = 0; index < 20; ) {
      try {
        const response = await fetch("https://meme-api.com/gimme", {
          method: "GET",
        });
        const data = await response.json();

        // _URL[index] = data.url;
        if (_URL.includes(data.url)) {
          console.log("same value next please");
        } else {
          _URL.push(data.url);
          SetResult((result) => [
            ...result,
            {
              id: nextId++,
              url: data.url,
              title: data.title,
              sub: data.subreddit,
            },
          ]);
          index++;
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    makeApiRequest();
  }, []);

  return (
    <div className="grid">
      {result.map((data) => (
        <img src={data.url} key={data.id} className="img" />
      ))}
    </div>
  );
};

export default FetchMeme;
