import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "RedBurnRoger",
    name: "Roger Sancho",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "EvilAFM",
    name: "Alexelcapo",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {
      users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
