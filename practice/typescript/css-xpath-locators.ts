// CSS and XPath locator reference for interview explanation.
// This file is meant for learning and discussion.

/*
CSS LOCATORS
------------
1. By id
   CSS:    #username

2. By class
   CSS:    .form-control

3. By tag name
   CSS:    input

4. By attribute
   CSS:    input[name="email"]

5. By multiple attributes
   CSS:    input[type="text"][name="email"]

6. Tag with class
   CSS:    button.submit-btn

7. Parent to child
   CSS:    form .login-btn

8. Direct child
   CSS:    ul > li

9. nth element
   CSS:    ul li:nth-child(2)

10. Partial attribute match
    CSS:   input[name*="mail"]
    CSS:   a[href*="login"]

11. Starts with
    CSS:   input[id^="user"]

12. Ends with
    CSS:   input[id$="name"]
*/

/*
XPATH LOCATORS
--------------
1. By attribute
   XPath:  //input[@id='username']

2. By text
   XPath:  //button[text()='Login']

3. By partial text
   XPath:  //button[contains(text(),'Log')]

4. By partial attribute
   XPath:  //input[contains(@name,'mail')]

5. Starts with attribute
   XPath:  //input[starts-with(@id,'user')]

6. Multiple attributes
   XPath:  //input[@type='text' and @name='email']

7. Parent to child
   XPath:  //form//button

8. Direct child
   XPath:  //ul/li

9. nth element
   XPath:  (//ul/li)[2]

10. From parent to specific child
    XPath:  //div[@class='login-form']//input[@name='password']

11. Using visible text on link
    XPath:  //a[text()='Forgot Password']

12. Relative navigation
    XPath:  //label[text()='Email']/following-sibling::input
    XPath:  //input[@id='email']/parent::div
*/

/*
PLAYWRIGHT USAGE EXAMPLES
-------------------------
*/

import { test, expect } from '@playwright/test';

test('css and xpath locator examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // CSS locators
  await page.locator('#username').fill('tomsmith');
  await page.locator('input[type="password"]').fill('SuperSecretPassword!');
  await page.locator('button[type="submit"]').click();

  // XPath locators
  await expect(page.locator(`//div[@id='flash']`)).toBeVisible();
  await expect(page.locator(`//h2[text()=' Secure Area']`)).toBeVisible();
});

/*
INTERVIEW EXPLANATION NOTES
---------------------------
1. CSS is usually faster and simpler to read.
2. XPath is useful when:
   - text-based matching is needed
   - moving from child to parent is needed
   - complex relative navigation is needed
3. Prefer stable locators:
   - id
   - name
   - data-testid / data-test
4. Avoid very long brittle locators.
5. In Playwright, role-based locators are often better than raw CSS/XPath:
   page.getByRole('button', { name: 'Login' })
*/
