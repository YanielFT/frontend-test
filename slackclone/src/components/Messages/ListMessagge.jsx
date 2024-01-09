import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};

const ListMessagge = () => {

    const items = useSelector((state) => state.messages.items);
    console.log(items);
    return <ul>
        {items.map(item => <li key={item.id}><MessageItem items={item} /> </li>)
        }<AlwaysScrollToBottom />
    </ul>
}

export default ListMessagge;
