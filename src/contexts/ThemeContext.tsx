import { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { TEmoji } from "../types";

interface IThemeContext {
  emojiTheme: TEmoji;
  setEmojiTheme: React.Dispatch<React.SetStateAction<TEmoji>>;
}

interface IThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeContextProvider({ children }: IThemeContextProviderProps): ReactElement {
  const [emojiTheme, setEmojiTheme] = useState<TEmoji>("😎");

  return (
    <ThemeContext.Provider value={{ emojiTheme, setEmojiTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }

  return context;
}
