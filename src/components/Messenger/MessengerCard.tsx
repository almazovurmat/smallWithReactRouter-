import React from 'react';

interface IProps {
    author: string;
    msg: string;
    date: string;
}

const MessengerCard:React.FC <IProps> = ({author, msg, date}) => {
    const getPrettyDateFormat = (datetime: string):string => {
        const date = new Date(datetime);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        const monthName = monthNames[monthIndex];

        return`${day} ${monthName} ${year} | ${hour}:${minute}:${seconds}`;
    };

    return (
        <>
            <div className="card w-50 mx-auto mb-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <p className="text-left"><b className="card-title">From:</b> {author}</p>
                        </div>
                        <div className="col">
                            <p className="text-right">{getPrettyDateFormat(date)}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{msg}</p>
                </div>
            </div>
        </>
    );
};

export default MessengerCard;