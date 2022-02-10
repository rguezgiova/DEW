import '../App.css';
import {useState} from "react";

function App() {
  const [card, setCard] = useState("");
  const [nameFilter, setNameFilter] = useState("all");
  return (
      <div className="App">
        <Header renderUnfilteredList={renderUnfilteredList} />
        <main>
          <Switch>
            <Route exact path="/">
              <Filter handleFilter={handleFilter} />
              <CharacterList filteredChars={filteredChars} />
            </Route>
            <Route exact path="/char/:id" render={renderCharDetail} />
          </Switch>
        </main>
      </div>
  );
}

export default App;
