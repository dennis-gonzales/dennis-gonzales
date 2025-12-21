import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return <h1 className="text-3xl ">Hello, World!!!!1</h1>;
}
