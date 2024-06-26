import React from 'react';
import ContactCard from './contactCard';
import ContactForm from './contactForm';

interface ContactTypes {
    title: string;
    description: string;
    bottomDescription: string;
}

interface ContactCardType {
    iconType: number;
    title: string;
    description: string;
    val: string;
}

const cardValues: ContactCardType[] = [
    {
        iconType: 1,
        title: "Email Us",
        description: "Send us an email",
        val: "mohityadav0330@gmail.com",
    },
    {
        iconType: 2,
        title: "Call or Text Us",
        description: "Call or text us directly",
        val: "+91 9050214638",
    }
];

const ContactBody: React.FC<ContactTypes> = ({ title, description, bottomDescription }) => {
    return (
       <div className=" mx-auto mt-5 p-6 rounded-lg shadow-md">
          <div className="flex justify-center">
            <div className=" max-w-2xl items-center text-center mb-4">
                <div className="text-5xl font-bold mb-5 ">{title}</div>
                <div className="text-gray-600">{description}</div>
             </div>
             </div>
          <div className='flex flex-row justify-around mt-5'>
            <div className="max-w-xl space-y-4">
                  {cardValues.map((values, index) => (
                     <ContactCard
                           key={index}
                           iconType={values.iconType}
                           title={values.title}
                           description={values.description}
                           val={values.val}
                     />
                  ))}
             </div>
             <div >
               <ContactForm />
             </div>
          </div>
          <div className='flex justify-center mt-8'>
            <div className="text-center px-5 py-2 border rounded-md border-gray-300 w-fit static  text-gray-500">{bottomDescription}</div>
          </div>
        </div>
    );
};

export default ContactBody;
