import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image={
          "https://ipfs.thirdweb.com/ipfs/QmWNsgfxfqtQDArEwWxa4C71ip77PFNy9rtdUqoqiyxVw3/0.jpg"
        }
      />
    </div>
  );
}

export default App;
