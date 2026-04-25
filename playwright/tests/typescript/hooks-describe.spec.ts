import { test, expect } from '@playwright/test';


test.describe('logins features',()=>{

test.beforeAll(async()=>{

    console.log('beforeall--Execute');

})

test.beforeEach(async()=>{

    console.log('beforeEach--Execute');

})
test.beforeEach(async()=>{

    console.log('beforeEach2--Execute');

})
test('login test',async()=>{

    console.log('login--Execute');

})
test('logout test',async()=>{

    console.log('logout--Execute');

})
test.afterEach(async()=>{

    console.log('afterEach--Execute');

})

test.afterAll(async()=>{

    console.log('afterAll--Execute');

})

});