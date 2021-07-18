import { Fragment, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/Searchbar";
import Photos from "./components/Photos/Photos";
import Spinner from "./components/Spinner/Spinner";
import { checkValidity } from "./utils/checkValidity";

const App = () => {
  const [textMessage, setTextMessage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    value: "",
    validation: {
      required: true,
      isNumber: true,
    },
    valid: false,
    touched: false,
  });

  const inputChangedHandler = (e) => {
    const updatedUserInput = {
      ...userInput,
      value: e.target.value,
      valid: checkValidity(e.target.value, userInput.validation),
      touched: true,
    };

    setUserInput(updatedUserInput);
  };

  const handleClick = async () => {
    const albumId = userInput.value;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
      );

	  if(response.data.length === 0) setTextMessage("No Photos Found for this Album Id");

      setPhotos(response.data);
      setIsLoading(false);
    } catch (err) {
      setTextMessage(
        "Oops Something Wrong happened! check Your Internet connection."
      );
      setIsLoading(false);
    }
  };

  return (
    <Fragment>

      <Navbar />

      <div className="container">
        <SearchBar
          value={userInput.value}
          inputValid={userInput.valid}
          onchange={inputChangedHandler}
          onclick={handleClick}
        />
        {isLoading ? <Spinner /> : <Photos photos={photos} />}
        {!isLoading && !photos.length > 0 && textMessage && <h2 className="text-center">{textMessage}</h2>}
      </div>
	  
    </Fragment>
  );
};

export default App;
