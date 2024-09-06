### Uppgift: Skapa en Emoji Theme Switcher med `useContext` och `React Router`

#### Målet:
Du ska skapa en liten React-applikation där användaren kan växla mellan olika emoji-teman (som 😎, 😴, 🎉) och navigera mellan olika sidor med React Router. När man byter tema, så uppdateras temat på alla sidor.

#### Steg 1: Setup
1. Skapa ett nytt React-projekt om du inte redan har ett:
   ```bash
   npm create vite@latest emoji-theme-switcher
   cd emoji-theme-switcher
   ```
2. Installera `react-router-dom`:
   ```bash
   npm install react-router-dom
   ```

#### Steg 2: Skapa ThemeContext
Skapa en fil som heter `ThemeContext.js` i din `src`-mapp.

#### Steg 3: Skapa Huvudkomponent
I din `App.js`:

#### Steg 4: Skapa sidor
Skapa två komponenter: `Home.js` och `About.js`.

#### Steg 5: Testa din app
Nu kan du testa din applikation! Navigera till olika sidor med hjälp av React Router, och byt emoji-tema genom att trycka på knapparna. Du ska se att temat uppdateras globalt i hela applikationen när du byter det.

### Extra utmaning:
Lägg till fler sidor eller funktionalitet! Kanske en "Emoji Gallery" där användaren kan välja bland ännu fler emojis att sätta som tema. 

Happy coding! 😄🎉
