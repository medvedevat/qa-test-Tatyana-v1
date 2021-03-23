import { element, by, $ } from 'protractor';

module.exports = {
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    },
    get planetName() {
        return element(by.css('app-planet'));
    },
    get personRadioBtn(){
        return element(by.css('#people'));
    },
    get planetRadioBtn(){    
        return element(by.css('#planets'));
    },
    get objectNotFound(){
        return ["Not Found"];
    },
};

