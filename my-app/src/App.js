import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Tytuł filmu</label>
          <input type="text" class="form-control" id="film" />
        </div>
      </form>
      <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="5"></option>
  <option value="1">Komedia</option>
  <option value="2">Obyczajowy</option>
  <option value="3">Sensacyjny</option>
  <option value="4">Horror</option>
</select>
    </div>
  );
}

export default App;
