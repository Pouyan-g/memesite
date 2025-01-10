"use client";
import { useEffect, useState } from "react";
import "./Fetch.css";
import styled from "styled-components";

const ImgContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const FetchMeme = () => {
  const [CHover, SetCHover] = useState();
  const [result, SetResult] = useState([]);
  let nextId = 0;
  const makeApiRequest = async () => {
    const _URL = [];
    for (let index = 0; index < 5; ) {
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
        <div
          key={data.id}
          className="relative"
          onMouseEnter={() => SetCHover(data.id)}
          onMouseLeave={() => SetCHover(null)}
        >
          <img src={data.url} className="img" />

          {CHover === data.id ? (
            <ImgContainer>
              <h1 className="font-bold m-2 text-white">{data.title}</h1>
              <h4 className="justify-items-end text-white">{data.sub}</h4>
            </ImgContainer>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FetchMeme;
