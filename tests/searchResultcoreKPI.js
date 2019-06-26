const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const runPuppeteer = async () => {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto('https://www.shutterstock.com/search/india');
   await page.waitForFunction('dataLayer && dataLayer.find(o => o.event === "searchResults")', { timeout: 50000 });
   const SearchResultCoreKPI = await page.evaluate(() => {
   const datalayerEvent = dataLayer.find(o => o.event === 'searchResults');
   return datalayerEvent;
    });
   console.log(SearchResultCoreKPI.event);
   expect(SearchResultCoreKPI.event).to.equal('searchResults');

   await page.close();
   await browser.close();

};

runPuppeteer();