import "../styles/Pagination.css";

export default function Pagination({ pages, setPages }) {
  return (
    <div className="pagination-container">
      <ul className="pagination-buttons">
        <li>First</li>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>Last</li>
      </ul>
    </div>
  );
}
