const {test, expect}= require('@playwright/test');


test('first Test', async({browser,page})=>
{
//    let context= await browser.newContext();
//   let page= await context.newPage();
  await page.goto("https://www.google.com/");
 await expect(page).toHaveTitle("Google");
console.log(await page.title());
});