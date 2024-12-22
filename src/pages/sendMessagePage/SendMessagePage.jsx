import React, {useContext, useState} from 'react';
import Button from '../../components/button/Button.jsx';
import './SendMessagePage.css';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useForm} from "react-hook-form";
import Input from "../../components/input/Input.jsx";

function SendMessagePage() {
    return (
        <>
            <section className="section-message outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="send-message-page">
                        <h1>Send a Message</h1>
                        <p>Hier kan je een fictief bericht sturen naar de klant of sommelier.
                            Deze functionaliteit werkt op dit moment (in de backend) nog niet,
                            in de toekomst wordt dit wel mogelijk.</p>
                        <form>
                            <label htmlFor="Message">Message:
                                <textarea id="message" name="message" required></textarea>
                            </label>
                        </form>
                        <Button>Send Message</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SendMessagePage;

/*
const SendMessagePage = () => {
    const { isAuth, user } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [recipient, setRecipient] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, toggleError] = useState(null);
    const {handleSubmit, register, formState: { errors } }= useForm();

    async function handleSendMessage (data) {
        setLoading(true);
        toggleError(false);
        const token = localStorage.getItem('token');
        console.log(data);

        // Implement the logic to send the message
        console.log(`Message from ${user.username} to ${recipient}: ${message}`);

        try {
            if (type === 'clients') {
                await axios.post(`http://localhost:8080/message/${recipient}`, {
                    message: message,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
            }
        }
    };

    return (
        <>
            <section className="section-message outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="send-message-page">
                        <h1>Send a Message</h1>
                        {user.roles.includes('admin') ? (
                            <div>
                                <h2>Admin Panel</h2>
                                <input
                                    type="text"
                                    placeholder="Recipient Username"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Client Panel</h2>
                                <p>Sending message to sommelier</p>
                                <input
                                    type="text"
                                    placeholder="Sommelier Username"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                />
                            </div>
                        )}
                        <textarea
                            placeholder="Type your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button onClick={handleSendMessage}>Send Message</Button>
                    </div>

                </div>

            </section>

        </>

    );
};
*/

