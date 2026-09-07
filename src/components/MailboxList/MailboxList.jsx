import { Link } from 'react-router';

const MailboxList = ({mailboxes}) => {
    return (
        <main>
            <h1>Mailboxes</h1>
            <div className="mailbox-list">
                {mailboxes.map((mailbox) => (
                    <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
                        <div className="mail-box">
                            <p>{mailbox._id}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default MailboxList;