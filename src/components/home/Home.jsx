import { Link } from "react-router-dom";
import ComponentListItem from "./ComponentListItem";

function Home() {
  return (
    <div id="home-container">
      <h1>Components</h1>
      <ComponentListItem name="Contact Form" link="/contact-form">
        Generic contact form that sends data in POST request on submit
      </ComponentListItem>
      <ComponentListItem name="Holy Grail" link="/holy-grail">
        Page layout that consists of a header, footer, and three columns in
        between that utilizes flexbox for styling
      </ComponentListItem>
    </div>
  );
}

export default Home;
