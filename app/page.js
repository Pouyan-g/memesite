"use client";
import FetchMeme from "@/components/FetchMeme";
import NavBar from "@/components/NavBar";
import "@/components/Fetch.css";

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
