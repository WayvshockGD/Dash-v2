import Mongoose from "mongoose";
import Dash from "./lib/clients/Dash";
import { database } from "./lib/config.json";
import LevelDash from "./lib/clients/LevelDash";

Mongoose.connect(database.url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log(`Connected to database`);
})
.catch((e) => {
    console.log(e);
})

new Dash();
new LevelDash({ messageLimit: 30 });
console.log("Started Dash and Level Dash");