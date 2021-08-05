import "./ContactList.css";

const PhonebookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className="Contact__item">
      <p className="Contact__info">{name}: </p>
      <p className="Contact__info">{number}</p>
      <button
        type="button"
        id={id}
        onClick={onDeleteContact}
        className="Contact__delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default PhonebookListItem;
