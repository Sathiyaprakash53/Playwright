const {test, expect}= require('@playwright/test');


test('first Test', async({browser,page})=>
{
//    let context= await browser.newContext();
//   let page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
//  await expect(page).toHaveTitle("Google");
console.log(await page.title());
await page.locator('#username').fill("sathiya");
await page.locator('#password').fill("Sthya");
await page.locator("[id='terms']").check();
await page.locator("input[value='Sign In']").click(); // or actual submit button
  const errMsg = await page.locator('[style*="block"]').textContent();

  console.log(errMsg);
  await expect(page.locator('[style*="block"]')).toContainText("Incorrect");
});