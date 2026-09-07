import { useParams } from 'react-router';

const MailboxDetails = ({mailboxes, letters}) => {
    const { mailboxId } = useParams();

    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    const selectedLetters = letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
    );

    if (!selectedBox) {
        return (
            <main>
                <h1>Mailbox Not Found!</h1>
            </main>
        );
    }

    return (
        <main>
            <h1>Box #{selectedBox._id}</h1>
            <p>Owner: {selectedBox.boxOwner}</p>
            <p>Size: {selectedBox.boxSize}</p>

            <h2>Letters</h2>
            {selectedLetters.length === 0 && <p>No letters yet.</p>}
            <ul>
                {selectedLetters.map((letter, idx) => (
                    <li key={idx}>
                        <p>To: {letter.recipient}</p>
                        <p>{letter.message}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default MailboxDetails;