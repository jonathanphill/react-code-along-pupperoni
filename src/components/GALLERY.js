import { useEffect, useState } from "react";
import Form from "./FORM";
import Pic from "./PIC";
import axios from "axios";

const Gallery = () => {
  // initialize the state which will represt the array of the puppy pic objects coming from the API
  const [puppyPics, setPuppyPics] = useState([]);

  // define a side effect which makes a call to the  Unsplash API
  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/search/photos",
      params: {
        query: "puppies",
        per_page: 30,
        client_id: "Eq6-OewrXVq4oSWxwWtHSxNB7ACWi9YRep362vD9J_A",
        orientation: null,
      },
    }).then((apiData) => {
      console.log(apiData.data.results);
      setPuppyPics(apiData.data.results);
    });
  }, []);

  return (
    <section>
      <Form />
      <ul className="photos">
        {puppyPics.map((puppy) => (
          <Pic key = {puppy.id} src={puppy.links.download} alt={puppy.alt_description} />
        ))}
      </ul>
    </section>
  );
};
export default Gallery;
