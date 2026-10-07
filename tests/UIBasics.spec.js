const {test, expect}= require('@playwright/test');


test('first Test', async({browser,page})=>
{
//    let context= await browser.newContext();
//   let page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
//  await expect(page).toHaveTitle("Google");
console.log(await page.title());
await page.locator('#username').fill("rahulshettyacademy1");
await page.locator('#password').fill("Learning@830$3mK2");
await page.locator("[id='terms']").check();
await page.locator("input[value='Sign In']").click(); // or actual submit button
  const errMsg = await page.locator('[style*="block"]').textContent();

  console.log(errMsg);
  await expect(page.locator('[style*="block"]')).toContainText("Incorrect");
  await page.locator('#username').fill("rahulshettyacademy");
  await page.locator("input[value='Sign In']").click(); 
  console.log(await page.locator('.card-title a').nth(0).textContent());
});

test.only('fetch first product', async({browser,page})=>
    {

    const url=await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill("akhilasathyama@gmail.com");
  await page.locator('#userPassword').fill("Sathya@53");
  await page.locator("#login").click();

  console.log(await page.title());

  const productName = await page.locator("[style*='text-transform'] b").first().textContent();
  console.log(productName);

}
);