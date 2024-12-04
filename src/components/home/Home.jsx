import ComponentListItem from "./ComponentListItem";

function Home() {
  const BASE_URL = "/react-components-collection";
  return (
    <div id="home-container">
      <h1>Components</h1>
      <ComponentListItem name="Contact Form" link={`${BASE_URL}/contact-form`}>
        Generic contact form that sends data in POST request on submit
      </ComponentListItem>
      <ComponentListItem name="Holy Grail" link={`${BASE_URL}/holy-grail`}>
        Page layout that consists of a header, footer, and three columns in
        between that utilizes flexbox for styling
      </ComponentListItem>
    </div>
  );
}

export default Home;
