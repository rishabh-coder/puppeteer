const puppeteer = require('puppeteer');

let config = {
    launchOptions: {
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized']
    }
};


const loginPage = {
   
    loginButton: "button[data-automation='SecondaryItems_log-in_button']",
    fillEmail  : "input[data-automation='LoginForm_email_input']",
    fillPass   : "input[data-automation='LoginForm_password_input']",
    loginBtn   : "button[data-automation='LoginForm_continue_button']",
    pricing    : ".sstk-icon.icon-circle-chevron-right-blue",
    onDemand   : "input#subscription_product_id-61",
    annual     : "input#subscription_product_id-565",
    annualBuy   : ".o_CoreProductOffering_cardSubscriptions .o_PricingCard_submit.o_sstk1-Button_root.o_bootstrap-custom_btn.o_sstk1-Button_primary",
    buyClick   : ".o_CoreProductOffering_cardFooter.o_PricingCard_footer.o_PrepaidCard_prepaidFooter button[type='submit']",
    Address    : "div[data-automation='PaymentMethodForm_address1Area_input'] input[aria-label='address-line1']",
    address    : "div[data-automation='PaymentMethodForm_cityArea_input'] input[aria-label='address-level2']",
    state      : "div[data-automation='PaymentMethodForm_stateArea_input'] input[aria-label='address-level1']",
    code       : "div[data-automation='PaymentMethodForm_zipArea_input'] input[aria-label='postal-code']",
    cardName   : "input[data-automation='PaymentMethodForm_name_input']",
    cardNumber : "input[data-automation='PaymentMethodForm_creditCard_input']",
    cardMonth  : "div[data-automation='PaymentMethodForm_monthArea_root']",
    monthNumber: "span[data-automation='PaymentMethodForm_monthPicker_10']",
    yearNumber : "input[id='ccyear']",
    yearSelect : "span[data-automation='PaymentMethodForm_yearPicker_2020']",
    cvv        : "div[data-automation='PaymentMethodForm_cvcArea_input'] input[aria-label='credit card cvc']",
    checkoutComp : "button[data-automation='CompleteCheckout_completeCheckout_button']",
// logout selectors
    accountIcon : ".dropdown-toggle.navbar-link.hidden-xs",
    logoutIcon  : ".sstk-icon.icon-arrow-right",


};

const runPuppeteer = async () => {
    const browser = await puppeteer.launch(config.launchOptions);
    const page = await browser.newPage();
    await page.goto('https://www.qa.shutterstock.com');
    await page.waitFor(loginPage.loginButton);
    await page.click(loginPage.loginButton);
    await page.type(loginPage.fillEmail,'testpuppt@sstk.com');
    await page.type(loginPage.fillPass,'plplplpl');
    await page.waitFor(loginPage.loginBtn);
    await page.click(loginPage.loginBtn);
    //pricing
    await page.waitFor(loginPage.pricing);
    await page.click(loginPage.pricing);
    //onDemand
    await page.waitFor(loginPage.onDemand);
    await page.click(loginPage.onDemand);
    //buyClick
    await page.waitFor(loginPage.buyClick);
    await page.click(loginPage.buyClick);
    //Address
    await page.waitFor(loginPage.Address);
    await page.type(loginPage.Address, 'puppeteer');
    //address
    await page.waitFor(loginPage.address);
    await page.type(loginPage.address, 'puppeteer');
    //state
    await page.waitFor(loginPage.state);
    await page.type(loginPage.state, 'puppeteer');
    // code
    await page.waitFor(loginPage.code);
    await page.type(loginPage.code, '10010');
    // cardName
    await page.waitFor(loginPage.cardName);
    await page.type(loginPage.cardName, 'test ab');
    // cardNumber
    await page.waitFor(loginPage.cardNumber);
    await page.type(loginPage.cardNumber, '4111111111111111');
    // cardMonth
    await page.waitFor(loginPage.cardMonth);
    // await page.type(loginPage.cardMonth, 'puppeteer');
    await page.click(loginPage.cardMonth);

    // monthNumber
    await page.waitFor(loginPage.monthNumber);
    // await page.type(loginPage.monthNumber, 'puppeteer');
    await page.click(loginPage.monthNumber);

    // yearNumber
    await page.waitFor(loginPage.yearNumber);
    // await page.type(loginPage.yearNumber, 'puppeteer');
    await page.click(loginPage.yearNumber);

    // yearSelect
    await page.waitFor(loginPage.yearSelect);
    // await page.type(loginPage.state, 'puppeteer');
    await page.click(loginPage.yearSelect);

    // cvv
    await page.waitFor(loginPage.cvv);
    await page.type(loginPage.cvv, '737');

    // checkoutComp
    await page.waitFor(loginPage.checkoutComp);
    // await page.type(loginPage.checkoutComp, 'puppeteer');
    await page.click(loginPage.checkoutComp);


    // await page.waitFor(loginPage.accountIcon,{timeout: 16000});
    // await page.click(loginPage.accountIcon);
    // await page.waitFor(loginPage.logoutIcon)
    // await page.click(loginPage.logoutIcon)
    await browser.close();
};
runPuppeteer();
