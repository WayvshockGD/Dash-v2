import Dash from "./lib/clients/Dash";
import LevelDash from "./lib/clients/LevelDash";

new Dash();
new LevelDash({ messageLimit: 30 });