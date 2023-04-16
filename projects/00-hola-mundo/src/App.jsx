import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="RedBurnRoger">
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
