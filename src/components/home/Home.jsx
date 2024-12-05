import ComponentListItem from "./ComponentListItem";

function Home() {
  const BASE_URL = "/react-components-collection";
  return (
    <div id="home-container">
      <h1>Components</h1>
      <ComponentListItem name="Contact Form" link={`${BASE_URL}/contact-form`}>
        Generic contact form that sends data in POST request on submit.
        Contained in a Modal.
      </ComponentListItem>
      <ComponentListItem name="Holy Grail" link={`${BASE_URL}/holy-grail`}>
        Page layout that consists of a header, footer, and three columns in
        between that utilizes flexbox for styling.
      </ComponentListItem>
      <ComponentListItem name="Todo List" link={`${BASE_URL}/todo-list`}>
        Todo List where tasks can be added and deleted. Utilizes an array in
        UseState. Generates componenents from array using map(). Handles
        pressing Enter key while typing in input text box.
      </ComponentListItem>
      <ComponentListItem
        name="Data Table With Pagination"
        link={`${BASE_URL}/data-table-pagination`}
      >
        Data table that displays user information in a paginated format.
      </ComponentListItem>
    </div>
  );
}

export default Home;
