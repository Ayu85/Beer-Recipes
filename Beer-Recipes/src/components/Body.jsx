import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
function Body() {
  const [searchText, setsearchText] = useState();
  let [beerData, setbeerData] = useState([]);
  let [filteredData, setfilteredData] = useState(["temp"]);
//   if (filteredData.length == 0) return <Shimmer />;
  // console.log(beerData);
  console.log(filteredData);
  function getFdata(searchText) {
    let d = beerData.filter((items) => {
      return items.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return d;
  }
  useEffect(() => {
    getBeers();
  }, []);
  const getBeers = async () => {
    const raw = await fetch("https://api.punkapi.com/v2/beers");
    const jsonBeer = await raw.json();
    setbeerData(jsonBeer);
    setfilteredData(jsonBeer);
  };

  return (
    <div>
      <div className="search-area">
        <input
          type="text"
          placeholder="Search your authentic taste"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const fd = getFdata(searchText);
            setfilteredData(fd);
          }}
        >
          Find
        </button>
      </div>
      <div className="body">
        {filteredData.map((items) => {
          return <Card {...items} />;
        })}
      </div>
    </div>
  );
}
export default Body;
