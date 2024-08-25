import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className="flex">
      <Menu />
      <div className="flex-1 p-4">
        <h2>Welcome to the Control Panel</h2>
        <p>Use the menu to navigate.</p>
      </div>
    </main>
  );
}
