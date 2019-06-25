const puppeteer = require('puppeteer');

const runPuppeteer = async () => {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto('https://www.shutterstock.com/search/india');
   page.waitForFunction('dataLayer && dataLayer.find(o => o.event === "searchResults")', { timeout: 30000 });
   const SearchResultCoreKPI = await page.evaluate(() => {
      const datalayerEvent = dataLayer.find(o => o.event === 'searchResults');
      return datalayerEvent;
    });
    console.log(SearchResultCoreKPI);
};

runPuppeteer();