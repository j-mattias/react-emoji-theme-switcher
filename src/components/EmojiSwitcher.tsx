import { ReactElement } from "react";
import { useThemeContext } from "../contexts";
import { TEmoji } from "../types";
import { validEmojis } from "../data";

export function EmojiSwitcher(): ReactElement {
  const {setEmojiTheme} = useThemeContext();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    const emoji = target.textContent as TEmoji;

    // If target isn't a button early return
    if (target.tagName !== "BUTTON") {
      return;
    }

    // Ensure that it's a valid emoji
    if (validEmojis.includes(emoji)) {
      setEmojiTheme(emoji);
      console.log(emoji);
    }

  };

  return (
    <section className="emoji-switcher">
      <h2>Switch Emoji Theme</h2>
      <div className="emoji-wrapper" onClick={handleClick}>
        {
          validEmojis.map((emoji) => (
            <button key={emoji}>{emoji}</button>
          ))
        }
      </div>
    </section>
  );
}
