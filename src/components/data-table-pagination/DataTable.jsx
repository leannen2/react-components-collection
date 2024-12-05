import "./styles.css";
import users from "./users.json";
import { useState } from "react";

export default function DataTable() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  return (
    <div className="data-table-pagination-container">
      <h1>Data Table</h1>

      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users
            .slice((page - 1) * size, (page - 1) * size + size)
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <hr />
      <div className="pagination">
        <select
          onChange={(e) => {
            setSize(Number(e.target.value));
            setPage(1);
          }}
        >
          {[5, 10, 20].map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>

        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <p>
          Page {page} of {Math.ceil(users.length / size)}
        </p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * size >= users.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
