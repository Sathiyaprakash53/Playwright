const {test, expect}= require('@playwright/test');


test.only('fetch first product', async({browser,page})=>
    {

    const url=await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill("akhilasathyama@gmail.com");
  await page.locator('#userPassword').fill("Sathya@53");
  await page.locator("#login").click();

  console.log(await page.title());
// await page.waitForLoadState('networkidle');
await page.locator("[style*='text-transform'] b").first().waitFor();
  const productName = await page.locator("[style*='text-transform'] b").allTextContents();
  console.log(productName);

}
);