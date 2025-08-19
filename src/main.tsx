import "@telegram-apps/telegram-ui/dist/styles.css";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";
import "./styles/index.css";
import "./mockEnv.ts";
import { BrowserRouter } from "react-router-dom";
import { AppRoot } from "@telegram-apps/telegram-ui";
import App from "./App.tsx";
import { init } from "./init.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const startApp = async () => {
  try {
    const launchParams = retrieveLaunchParams();

    const { tgWebAppPlatform: platform } = launchParams;
    const debug =
      (launchParams.tgWebAppStartParam || "").includes("platformer_debug") ||
      import.meta.env.DEV;

    await init({
      debug,
      eruda: debug && ["ios", "android"].includes(platform),
      mockForMacOS: platform === "macos",
    });

    root.render(
      <StrictMode>
        <BrowserRouter basename="/one_of_two_2">
          <AppRoot>
            <App />
          </AppRoot>
        </BrowserRouter>
      </StrictMode>
    );
  } catch (e) {
    console.error("Error during initialization:", e);
    root.render(<div>Error during initialization</div>);
  }
};

startApp();