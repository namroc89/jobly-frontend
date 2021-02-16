import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function SearchBar({ searchFunc }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchFunc(query.trim() || undefined);
    setQuery(query.trim());
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          value={query}
          placeholder="Enter search"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
