import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
 /* const [name, setName] = useState("midudev");*/
  return (
    <section className="App">
      <TwitterFollowCard userName="RedBurnRoger" initialIsFollowing={true}>
        Róger Sancho
      </TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        MiguelÁngel Durán
      </TwitterFollowCard>

      <TwitterFollowCard userName="EvilAFM">Alexelcapo</TwitterFollowCard>

      <TwitterFollowCard></TwitterFollowCard>
    </section>
  );
}
