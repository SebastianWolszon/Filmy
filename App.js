import React, {useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [tytuł, setTytuł] = useState("");
  const [rodzaj, setRodzaj] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tytuł: ${tytuł}, Rodzaj: ${rodzaj}`);
  };
  return (
    <div className="App">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Tytul filmu
          </label>
          <input type="text" class="form-control" id="film" />
        </div>
      </form>
      <select class="form-select" aria-label="Default select example">
        <option selected>Otwórz menu</option>
        <option value="5"></option>
        <option value="1">Komedia</option>
        <option value="2">Obyczajowy</option>
        <option value="3">Sensacyjny</option>
        <option value="4">Horror</option>
      </select>
      <button type="submit">Dodaj</button>
    </div>
  );
}

export default App;
