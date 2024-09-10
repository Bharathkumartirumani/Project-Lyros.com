import { useContext, useReducer } from "react";
import contactReducer from "./conatctReducer";
import ContactConsumer from "./ContactConsumer";
import DisplayContacts from "./DisplayContacts";

function ContactProvider(){
    const [contacts,dispatch]=useReducer(contactReducer,
        [
            {
                id:0,
                cname:"bharath",
                cemail:"bharath@gmail.com"
            }
        ])
        return(
            <>
            <ContactProvider value={{contacts,dispatch}}>
                 <ContactConsumer>
                 </ContactConsumer>
                 <DisplayContacts></DisplayContacts>
            </ContactProvider>
            </>
        )
}
export default ContactProvider