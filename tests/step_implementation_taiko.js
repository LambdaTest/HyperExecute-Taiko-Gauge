/* globals gauge*/
"use strict";
const path = require('path');
const { goto, screenshot, deleteCookies, openBrowser, closeBrowser, setConfig } = require('taiko');

setConfig({waitForNavigation: false})

const caps = {

  'LT:Options': {
    'platform': process.env.HYPEREXECUTE_PLATFORM,
    'build': 'HyperExecute Taiko Build',
    'name': 'Taiko HyperExecute Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    "console" : true,
    'video':true
  },
  'browserName': 'chrome',
  'browserVersion': 'latest'
};

beforeSuite(async() => {
// beforeScenario(async() => {
    console.log("====BROWSER CONNECTING====");
    await openBrowser({
          target: "wss://stage-cdp.lambdatest.com/taiko"
        },
        caps,
    );
});

afterSuite(async () => {
// afterScenario(async () => {
  console.log('=====>AFTERSUITE');
  await closeBrowser();
});
