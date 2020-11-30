import { Record } from "./Types.js";
import { useState, createElement } from "react";

export class CounterProps extends Record {
    constructor(initialCount) {
        super();
        this.initialCount = (initialCount | 0);
    }
}

export function Counter(props) {
    const [count, setCount] = useState(props.initialCount);
    return createElement("div", {
        style: {
            padding: 10,
        },
        children: [createElement("h1", {
            children: [count],
        }), createElement("button", {
            children: "Increment",
            onClick: () => {
                setCount(count + 1);
            },
        })],
    });
}

export function App() {
    return createElement("div", null,
        createElement(Counter, new CounterProps(0)),
        createElement(Counter, new CounterProps(10))
    );
}