import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import "./Searchbar.scss";

const SearchBar = ({ value, onchange, onclick, inputValid }) => {
  return (
    <div className="search-bar">
      <Input
        type="text"
        placeholder="Enter album id to view Photos"
        value={value}
        onchange={onchange}
      />

      <Button
        iconClass="lnr lnr-magnifier"
        onclick={onclick}
        disabled={!inputValid}
      />
    </div>
  );
};

export default SearchBar;
