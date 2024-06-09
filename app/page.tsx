import Background from "./components/Background";
import ColorColumns from "./components/ColorColumns";
import ColorColumnsBlue from "./components/ColorColumnsBlue";
import Intro from "./components/Intro";
import Links from "./components/Links";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center">
      <ColorColumns />
      <Logo />
      <Intro />
      <Links />
      <Background />
      <ColorColumnsBlue />
    </main>
  );
}
