import type { Route } from "./+types/home";
import { CounterPage } from "../test/counter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Counter" },
    { name: "description", content: "couter of your problems" },
  ];
}

export default function Counter() {
  return <CounterPage />;
}