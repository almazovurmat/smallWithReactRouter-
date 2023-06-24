import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import MessengerForm from "../../components/Messenger/MessengerForm";
import MessengerCard from "../../components/Messenger/MessengerCard";
import {IGetMessage, ISendMessage} from "../../types/types";

const getMessagesUrl: string = 'http://146.185.154.90:8000/messages';

const Messenger = () => {
    const [messages, setMessages] = useState<IGetMessage[]>([]);
    const [formData, setFormData] = useState<ISendMessage>();

    useEffect(() => {
        fetchData(getMessagesUrl).catch(e => console.error(e));
    }, []);

    useEffect(() => {

        let interval = setInterval(async () => {
            if (messages.length > 0) {

                const lastDate = messages[messages.length - 1].datetime;
                try {
                    const response = await fetch(`${getMessagesUrl}?datetime=${lastDate}`);

                    if (response.ok) {
                        const newMessage = await response.json();

                        if (newMessage.length > 0) {
                            setMessages(prevState => [...prevState, ...newMessage]);
                        }
                    } else {
                        console.log('Ошибка при получении новых сообщений');
                    }
                } catch (error) {
                    console.log(error);
                }

            }
        }, 5000);
        return () => clearInterval(interval);
    }, [messages]);

    useEffect(() => {
        if (formData) {
            sendMessage(getMessagesUrl, formData.username, formData.message);
        }
    }, [formData]);

    const sendMessage = async (url: string, author: string, message: string) => {
        const data = new URLSearchParams();
        data.set('author', author);
        data.set('message', message);
        await fetch(url, {
            method: 'post',
            body: data,
        });
    };

    const fetchData = async (getMessagesUrl: string) => {
        try {
            const response = await fetch(getMessagesUrl);
            if (response.ok) {
                const responseData: IGetMessage[] = await response.json();
                setMessages(responseData);
            } else {
                console.log('Ошибка при получении данных');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getDataFromForm = (username: string, msg: string) => {
        setFormData({
            username: username,
            message: msg
        });
    };

    return (
        <>
            {
                messages?.map(message => (
                    <MessengerCard key={nanoid()} author={message.author} msg={message.message}
                                   date={message.datetime} />
                ))
            }
            <MessengerForm sendMessage={getDataFromForm} />
        </>
    );
};

export default Messenger;