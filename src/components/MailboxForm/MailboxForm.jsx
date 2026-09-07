import { useState } from 'react';
import { useNavigate } from 'react-router';

const MailboxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        boxOwner: '',
        boxSize: 'Small',
    });
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        navigate('/mailboxes');
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner-input">Box Owner</label>
                <input
                    required
                    type="text"
                    name="boxOwner"
                    id="boxOwner-input"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />

                <label htmlFor="boxSize-input">Box Size</label>
                <select
                    name="boxSize"
                    id="boxSize-input"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;