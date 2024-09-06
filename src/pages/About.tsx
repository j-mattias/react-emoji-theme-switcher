import { ReactElement } from "react";
import { useThemeContext } from "../contexts";
import { EmojiSwitcher } from "../components";

export function About(): ReactElement {
  const { emojiTheme } = useThemeContext();

  return (
    <section className="about">
      <h1>About</h1>
      <p>Current theme: {emojiTheme}</p>
      <EmojiSwitcher />
    </section>
  )
}
