//File containes steps for both characters and planets
// Please comment/uncomment required section


const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

// //Search by charachter 
// When('I search for {string}', { timeout: 60 * 1000 }, async (personName) => {
//     await searchFormPO.personRadioBtn.click();
//     await searchFormPO.input.sendKeys(personName);
//     await searchFormPO.searchBtn.click();
//     await browser.sleep(2000);
// });

// //Results for search for chracter
// Then('I see details for {string}', { timeout: 60 * 1000 }, async (personName) => {
//     await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
//         .to.eventually.contain(personName);
// });


//Search by planet 
 When('I search for {string}', { timeout: 60 * 1000 }, async (planetName) => {
    await searchFormPO.planetRadioBtn.click();
    await searchFormPO.input.sendKeys(planetName);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

//Results for search for planet
Then('I see details for {string}', { timeout: 60 * 1000 }, async (planetName) => {
    await chai.expect(searchFormPO.planetName.getAttribute('innerText'))
        .to.eventually.contain(planetName);
});


//Results for invalid input
Then('I see Not found page', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.objectNotFound);
});