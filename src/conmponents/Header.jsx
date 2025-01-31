import logo from "/logo-name.svg";

const time = new Date();

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt={"Logo"} />
      </div>
      <span>Время: {time.toLocaleTimeString()}</span>
    </header>
  );
}
