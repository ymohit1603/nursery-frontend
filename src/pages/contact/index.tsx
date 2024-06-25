import ContactBody  from "../../components/Contact/ContactBody"
import { NavBar } from "../../components/NavBar/NavBar"


const contactVal =
    {
    title: `We are here for you,
        contact us anytime`,
        description: "Have any questions about our services or just want to talk with us?Please reach out.",
        bottomDescription:"We'll get back to you as soon as possible.We are available 8am-6pm on weekdays."
    }


export const ContactUs = () => {
    return <div>
        <NavBar/>
        <ContactBody title={contactVal.title} description={contactVal.description} bottomDescription={contactVal.bottomDescription}/>
    </div>
    
        
}