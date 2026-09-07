import { useState } from 'react';
import { useNavigate } from 'react-router';

const LetterForm = ({mailboxes, addLetter}) => {
    const [formData, setFormData] = useState({
        mailboxId: '',
        recipient: '',
        message: '',
    });
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newLetter = {
            ...formData,
            mailboxId: Number(formData.mailboxId),
        };
        addLetter(newLetter);
        navigate(`/mailboxes/${newLetter.mailboxId}`);
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId-input">Send to Box #</label>
                <select
                    required
                    name="mailboxId"
                    id="mailboxId-input"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select a mailbox</option>
                    {mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>
                            {mailbox._id}
                        </option>
                    ))}
                </select>

                <label htmlFor="recipient-input">Recipient</label>
                <input
                    required
                    type="text"
                    name="recipient"
                    id="recipient-input"
                    value={formData.recipient}
                    onChange={handleChange}
                />

                <label htmlFor="message-input">Message</label>
                <textarea
                    required
                    name="message"
                    id="message-input"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button type="submit">Send Letter</button>
            </form>
        </main>
    );
};

export default LetterForm;