import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

interface ContactTypes {
    iconType: number;
    title: string;
    description: string;
    val: string;
}

const ContactCard: React.FC<ContactTypes> = ({ iconType, title, description, val }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-200">
                {iconType === 1 ? <EmailIcon fontSize="large" /> : <CallIcon fontSize="large" />}
            </div>
            <div>
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-sm text-gray-600">{description}</div>
                <div className="mt-1 text-blue-500">{val}</div>
            </div>
        </div>
    );
};

export default ContactCard;
