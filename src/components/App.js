import Navbar from "./Navbar";
import Card from "./Card";
import data from "../data";

function App() {
  var cards = data.map((x) => {
    return <Card {...x} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
