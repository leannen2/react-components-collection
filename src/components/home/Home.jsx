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
      <ComponentListItem name="Tabs" link={`${BASE_URL}/tabs`}>
        Tabs component that displays one panel of content at a time depending on
        the active tab element.
      </ComponentListItem>
      <ComponentListItem name="Job Board" link={`${BASE_URL}/job-board`}>
        Job board that uses Hacker News API to fetch job postings and displays
        the data in their own componenets. Loads 10 jobs at a time at a click of
        a button.
      </ComponentListItem>
      <ComponentListItem name="Connect Four" link={`${BASE_URL}/connect-four`}>
        Two player game of Connect Four with win detection.
      </ComponentListItem>
    </div>
  );
}

export default Home;
