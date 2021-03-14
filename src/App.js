import "./styles.css";
import Card from "./components/card";

import emojis from "./components/details";
import Header from "./components/header";
export default function App() {
  return (
    <div>
      <Header />
      <div className="emojis">
        {emojis.map((emoji) => (
          <Card face={emoji.face} title={emoji.title} about={emoji.about} />
        ))}
      </div>
    </div>
  );
}
