# Housing Calculator Project
## Goals
- Create a program that can be used to understand the maximum house that a user could afford in year y given the savings and income that they had in year x. Defitely not bitter about the cost of housing in the Bay Area in 2024.
- Practice building out HTML, CSS, and JavaScript from scratch.
- Practice using git to track changes.
## Requirements
- As a user, I can enter my savings and income, and specify a base year (e.g. 1980) and target year (e.g. 2023), so I can understand how much my savings and income in the base year are worth in the target year.
- As a user, I can see the maximum price of a house I could afford in the target year (e.g. 2023), so I can better understand what my purchasing power would be in the target year.
## UI Mocks
[Figma Link](https://www.figma.com/design/oCDi01Q8QKt1vWMQDbZEkV/HousingCalculatorProject?node-id=0-1&t=3kPk5hvCeegQ70yR-1)
## Open Questions
1. [CLOSED] How do you convert money from a base year to a target year given known inflation statistics?
  - **ref:** https://www.minneapolisfed.org/about-us/monetary-policy/inflation-calculator
  - The Federal Reserve Bank of Minneapolis has JS functions on the above page that I can export to convert dollars in a base year to dollars in a target year:
2. [CLOSED] How do you calculate the maximum price of a house that someone can afford given savings and income?
``` JavaScript
// function to calculate max mortgage payment given dti
// dti should be a fraction, not a percentage
function maxAffordableMortagePayment (income, debtToIncomeRatio) {
  return  (income * debtToIncomeRatio) / 12;
}

// function to calculate max house price given max mortage payment
// Loan Payment = Principal / Discount Factor
// Discount Factor = [(1+i)^n - 1] / [i*(1+i)^n]
// i = annual int rate / periods per year (e.g. 12 for monthly)
// n = periods per load (e.g. 360 for 30 year, monthly loan)
function maxAffordableHousePrice (income, savings, debtToIncomeRatio, interestRate) {
  let onePlusPeriodicToN = Math.pow(1 + interestRate, 360);
  let discountFactor = (interestRate * onePlusPeriodicToN) / (onePlusPeriodicToN - 1);
// Assuming downPayment = 100% of savings
  return (maxAffordableMortagePayment(income, debtToIncomeRatio) / discountFactor) + savings;
}
```
3. [CLOSED] How to best trigger updates to Sections 2 & 3?
	1. Used event listeners.
## To-Do
- Add error handling