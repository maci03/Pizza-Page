import TopNav from "./Components/TopNav";
import Featured from "./Components/Featured";
import Delivery from "./Components/Delivery";
import TopPicks from "./Components/TopPicks";
import Meal from "./Components/Meal";
import Categories from "./Components/Categories";
import NewsLetter from "./Components/NewsLetter";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
    </div>
  );
}

export default App;
