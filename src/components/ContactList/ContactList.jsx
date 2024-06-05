import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"


function ContactList({ filteredData = [], searchStr, handleDelete }) {

    if (!filteredData.length && searchStr) {
        return <h2 className={s.header}>Contact you searching doesn`t exist</h2>
    } else if (!filteredData.length) {
        return <h2 className={s.header}>No available contacts...</h2>
    }
    return (
        <>
            <h2 className={s.header}>Phonebook</h2>
            <ul>
                {filteredData.map(contact => (
                    <Contact key={contact.id} contact={contact} handleDelete={handleDelete} />
                ))}
            </ul>
        </>
    )
}

export default ContactList