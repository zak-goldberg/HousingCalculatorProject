# Housing Calculator Project
## Goals
- Create a program that can be used to understand the maximum house that a user could afford in year y given the savings and income that they had in year x.
- Practice building out HTML, CSS, and JavaScript from scratch.
- Practice using git to track changes.
## Requirements
- As a user, I can enter my savings and income, and specify a base year (e.g. 1980) and target year (e.g. 2023), so I can understand how much my savings and income in the base year are worth in the target year.
- As a user, I can see the maximum price of a house I could afford in the target year, so I can better understand what my purchasing power would be in the target year.
## High Level Design
1. Import ~~inflation calculator~~ and mortgage calculator.
  - The inflation calculator is very specific to the HTML of the so I will use the data from the calculator to create a new CPI table class and write my own code for the calculator.
2. Create an object to keep everything organized. Set initial values to defaults.
``` JavaScript
class housingData {
  constructor(){
    this._baseYear = 1980;
    this._baseIncome = 15000;
    this._baseSavings = 30000; 
    this._targetYear = 2023;
    this._targetYearIncome = 40000;
    this._targetYearSavings = 80000;
    this._maxHousePrice = 1000000;
  }
  get...
  set...
  otherMethods()...
}
```
3. Front end form updates associated property in the object.
4. Next section is updated when user completes the previous section:
	1. Section 2 updated when year, income, and savings are updated.
	2. Section 3 updated when target year chosen.
	3. User shouldn't have to hit a submit button on the form, should update automatically.
	4. Event listener? (Open question 3).
## UI Mocks
[Figma Link](https://www.figma.com/design/oCDi01Q8QKt1vWMQDbZEkV/HousingCalculatorProject?node-id=0-1&t=3kPk5hvCeegQ70yR-1)
## Open Questions
1. [CLOSED] How do you convert money from a base year to a target year given known inflation statistics?
  - **ref:** https://www.minneapolisfed.org/about-us/monetary-policy/inflation-calculator
  - The Federal Reserve Bank of Minneapolis has JS functions on the above page that I can export to convert dollars in a base year to dollars in a target year:
2. How do you calculate the maximum price of a house that someone can afford given savings and income?
3. [CLOSED] How to best trigger updates to the next section?
	1. Used event listeners.
## To-Do
- ~~Understand how the CPI calculator script from the Fed Works~~
- ~~See if you can change the default year in Step 1 to 1980~~
- See if you can format the input boxes in Step 1
	- Couldn't find an easy way to do this, leave this as a TO-DO
- ~~Update formatting in the input boxes in Step 2~~
- Add error handling
## Appendix
TBD
