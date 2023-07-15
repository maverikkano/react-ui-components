import { useState } from "react";
import "../App.css";

export default function Checklist() {

    const [items, setItems] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const input = form.item;
        setItems([...items, input.value]);
        form.reset();
    }

    const onRemoveItem = (itemToRemove) => {
        const newItems = items.filter((item) => {
            return item !== itemToRemove;
        })

        setItems(newItems);
    }

    return (
        <>
            <div className="checklist">
                <form onSubmit={onSubmit}>
                    <h2>Checklist</h2>
                    <input
                        type="text"
                        name="item"
                        placeholder="Add a new item"
                        required
                    />
                    <button>Add </button>
                </form>

                <ul>
                    {items.map((item, index) => (
                        <Item
                            item={item}
                            onRemoveItem={onRemoveItem}
                            key={item}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

function Item({ item, onRemoveItem }) {
    return (
        <li>
            {item}
            <button
                className="delete"
                onClick={() => onRemoveItem(item)}
            >
                &times;
            </button>
        </li>
    );
}