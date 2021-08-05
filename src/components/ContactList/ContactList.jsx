import PhonebookListItem from "./ContactListItem";
import "./ContactList.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="Contact__list">
      {contacts.map(({ name, number, id }) => {
        return (
          <PhonebookListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
