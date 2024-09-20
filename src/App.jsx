import { useState } from "react";
import "./App.css";
import UseAsyncHook from "./UseAsyncHook";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [result, loading] = UseAsyncHook(query);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          type="text"
          placeholder="Enter your book name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>

      {/* <h1>My book result is : {query}</h1> */}

      {loading === "false" ? (
        <h1>Search For Books</h1>
      ) : loading === "null" ? (
        <h1>No Book Found</h1>
      ) : (
        result.map((item) => {
          return <p>Book Title : {item}</p>;
        })
      )}
    </div>
  );
}

export default App;
