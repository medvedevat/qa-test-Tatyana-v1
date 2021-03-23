# QA Engineer Assessment Solution

## Introduction

Name: Tatyana Medvedeva

Email: tatyana.a.medvedeva@gmail.com

Phone: 0631640739

## Remarks 


### I completed assigment on Windows 10 machine. 


### Installation process
- node installs fine: node -v --> v10.24.0
- the application works after executing ng serve, and I could test it (black box)


### The supplied e2e test did not run initially

- I had to fix the path in protractor.conf.js from './e2e/features/*/*.feature'  to './e2e/features/*.feature'
- after installer protractor-cucumber-framework I had to add the missing frameworkPath in protractor.conf.js: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
- I had to comment out strict from the cucumberOpts
- I still end up with the error below

ng e2e
Your global Angular CLI version (11.2.4) is greater than your local version (7.3.10). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
* Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ *

Date: 2021-03-14T16:37:41.280Z
Hash: 68f3572455eea0d9a4be
Time: 6351ms
chunk {main} main.js, main.js.map (main) 28.4 kB [initial] [rendered]

[SNIP]

[17:37:42] I/launcher - Running 1 instances of WebDriver
[17:37:42] I/direct - Using ChromeDriver directly...

DevTools listening on ws://127.0.0.1:55768/devtools/browser/e90e3d92-b627-47b8-98e1-2609636c29d0
[17:37:45] E/launcher - Error: TypeError [ERR_INVALID_ARG_TYPE]: The "from" argument must be of type string. Received type undefined


### I repeated installation process on other machine but used Node v14 and I had no problem.


### Although I would write code differently, I decided to keep it as close to original as possible. 


### I changed .feature file 
- since I use multiple scenarious in the same file and all of them start from the same point, I added 'Background' keyword
- I made a name of person/planet a string variable that can be reused

 
### I changed search-form.po.ts 
- added planetName() to add search by planet name
- added personRadioBtn() and planetRadioBtn() to be able to switch between people and planets on the page 


### Extended app.steps.ts file
- I added switch between 'People' ans 'Planet' radio buttons
- I used variables 'personName' and 'planetName' to avoid hardcoding names


### I noticed that defaultSearchType is 'people'. If I change it to planets then tests still pass. 


###  This is my first expirience with JavaScript and Gherkin, so I spent almost 6 hours on this assessment. I wasn't sure how far I should get with the testing.


### I also didn't work on code improving and refactoring (see previous remark).
