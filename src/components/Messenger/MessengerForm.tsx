import React, {FormEvent} from 'react';


interface IProps {
    sendMessage: (author: string, msg:string) => void;
}

const MessengerForm: React.FC<IProps> = ({sendMessage}) => {
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const authorInput = form.elements.namedItem("author") as HTMLInputElement;
        const messageInput = form.elements.namedItem("msg") as HTMLTextAreaElement;

        if (authorInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Fill all fields, please');
            return;
        }

        if (authorInput && messageInput) {
            sendMessage(authorInput.value, messageInput.value);
        }

        form.reset();
    };

    return (
        <form id="form" className="w-75 mx-auto pt-5" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="author">Enter author name</label>
                <input className="form-control" id="author" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="msg">Enter your message</label>
                <textarea className="form-control" id="msg" name="message"></textarea>
            </div>
            <div className="w-25 mt-3 mb-5 mx-auto text-center">
                <button type="submit" id="submit" className="btn btn-success" name="message">Send</button>
            </div>
        </form>
    );
};

export default MessengerForm;