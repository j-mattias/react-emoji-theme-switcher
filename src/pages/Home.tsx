import { ReactElement } from "react";
import { EmojiSwitcher } from "../components";
import { useThemeContext } from "../contexts";

export function Home(): ReactElement {
  const { emojiTheme } = useThemeContext();

  return (
    <section className="home">
      <h1>Home</h1>
      <p>Current theme: {emojiTheme}</p>
      <EmojiSwitcher />
    </section>
  )
}
