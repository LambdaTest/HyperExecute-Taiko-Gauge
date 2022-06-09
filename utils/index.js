const { goto, screenshot } = require('taiko');
const path = require("path");

const getScreenshot = async () => {
  // const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
  // return screenshot({ path: screenshotFilePath });
  return true;

}

module.exports = {
  getScreenshot
}
