"use client";
import { useState } from "react";
import VideoChat from "@/components/VideoChat";
import Lobby from "@/components/Lobby";

const Call = () => {
  return (
    <div className="app">
      <main>
        <VideoChat />
      </main>

      {/* <header>
        <h1>Video Chat with Hooks</h1>
      </header> */}
      {/* <div style={{display: "flex", width: "100%", height: "100vh"}}>
      </div> */}
      {/* <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛️
          </span>{" "}
          by <a href="https://twitter.com/philnash">philnash</a>
        </p>
      </footer> */}
    </div>
  );
};

export default Call;
