import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


function generateTestData(){

const firstName =faker.person.firstName();
const LastName =faker.person.lastName();
const email = faker.internet.email({firstName:'Auto'});//auto678690@gmail.com
const telephone =faker.phone.number({style:'national'});

return {
firstName, 
LastName,
email,
telephone

};
}

test('Registration of user',async({page})=>{

  const user =generateTestData();


faker.internet.password({length:20,memorable:true,pattern: /[A-Z]/,prefix:'Auto',});

await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

await page.getByRole('textbox',{name:'First Name'}).fill(user.firstName);


//$&&%^I*7o8
});

