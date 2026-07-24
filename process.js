import update from "./update.js";

const updateInterval = 1000 * 60 * 30; // Every 30 minutes

function runUpdate() {
  console.log("Updating the IP");
  update().catch(console.error);
}

runUpdate();
setInterval(runUpdate, updateInterval);
