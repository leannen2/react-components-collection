import "./styles.css";
export default function Modal({ children, open }) {
  if (!open) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>
  );
}
