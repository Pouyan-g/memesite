"use client";
import FetchMeme from "@/Compo/FetchMeme";
import NavBar from "@/Compo/NavBar";
import "../Compo/Fetch.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <FetchMeme />
      </div>
    </div>
  );
}
