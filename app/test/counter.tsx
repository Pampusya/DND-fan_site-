import { useState } from "react"

export function CounterPage() {
    const [count, setCount]=useState(0)
    return (
    <main className="flex items-center justify-center pt-16 pb-4">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count+1)}>+1</button>
        <h1>GOOD LUCK</h1>
    </main>
    );
}