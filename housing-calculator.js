// TO-DO: make this a module to break up this script
  // import CPITable class, this includes the CPI values for each year from 1913 to 2023
  // import {CPITable} from "./my-cpi-calculator.js";

// Create CPI Table class with data from Minn Fed Bank. The value for each year is the CPI value.
// Methods to get the value for a specific year or the ratio of values between 2 years.

class CPITable {
    constructor() {
        this._cpiTimeSeries = {
            1913: 9.883,
            1914: 10.017,
            1915: 10.108,
            1916: 10.883,
            1917: 12.825,
            1918: 15.042,
            1919: 17.333,
            1920: 20.042,
            1921: 17.85,
            1922: 16.75,
            1923: 17.05,
            1924: 17.125,
            1925: 17.542,
            1926: 17.7,
            1927: 17.358,
            1928: 17.158,
            1929: 17.158,
            1930: 16.7,
            1931: 15.208,
            1932: 13.642,
            1933: 12.933,
            1934: 13.383,
            1935: 13.725,
            1936: 13.867,
            1937: 14.383,
            1938: 14.092,
            1939: 13.908,
            1940: 14.008,
            1941: 14.725,
            1942: 16.333,
            1943: 17.308,
            1944: 17.592,
            1945: 17.992,
            1946: 19.517,
            1947: 22.325,
            1948: 24.042,
            1949: 23.808,
            1950: 24.067,
            1951: 25.958,
            1952: 26.55,
            1953: 26.767,
            1954: 26.85,
            1955: 26.775,
            1956: 27.183,
            1957: 28.092,
            1958: 28.858,
            1959: 29.15,
            1960: 29.575,
            1961: 29.892,
            1962: 30.25,
            1963: 30.625,
            1964: 31.017,
            1965: 31.508,
            1966: 32.458,
            1967: 33.358,
            1968: 34.783,
            1969: 36.683,
            1970: 38.825,
            1971: 40.492,
            1972: 41.817,
            1973: 44.4,
            1974: 49.308,
            1975: 53.817,
            1976: 56.908,
            1977: 60.608,
            1978: 65.233,
            1979: 72.575,
            1980: 82.408,
            1981: 90.925,
            1982: 96.5,
            1983: 99.6,
            1984: 103.883,
            1985: 107.567,
            1986: 109.608,
            1987: 113.625,
            1988: 118.258,
            1989: 123.967,
            1990: 130.658,
            1991: 136.192,
            1992: 140.317,
            1993: 144.458,
            1994: 148.225,
            1995: 152.383,
            1996: 156.85,
            1997: 160.517,
            1998: 163.008,
            1999: 166.575,
            2000: 172.2,
            2001: 177.067,
            2002: 179.875,
            2003: 183.958,
            2004: 188.883,
            2005: 195.292,
            2006: 201.592,
            2007: 207.342,
            2008: 215.303,
            2009: 214.537,
            2010: 218.056,
            2011: 224.939,
            2012: 229.594,
            2013: 232.957,
            2014: 236.736,
            2015: 237.017,
            2016: 240.007,
            2017: 245.12,
            2018: 251.107,
            2019: 255.657,
            2020: 258.811,
            2021: 270.97,
            2022: 292.655,
            2023: 304.702
        };
    }

getValue(year) {
    return this._cpiTimeSeries[year] || null;
}

getCPIRatio(year1, year2) {
    let cpiYear1 = this.getValue(year1);
    let cpiYear2 = this.getValue(year2);
    return cpiYear2 / cpiYear1;
}
}

// Populate the drop-downs with all years from 1913 to 2023
const inputYearDropDowns = document.getElementsByClassName("year-dropdown");

// loop over the 2 different input year drop downs
for (let dropDown of inputYearDropDowns) {
// loop over all years from 1913 to 2023 and add each year as an option in the drop down
  for (let year = 1913; year <= 2023; year++) {
    // Create option element
    let newOption = document.createElement("option");
    // Set the option text and value to the year
    newOption.text = year;
    newOption.value = year;
    // Update .selected to true for the year 1980 so this is the default value when the page is loaded
    if (year === 1980) newOption.selected = true;
    // Add the new option to the select element
    dropDown.add(newOption);
  }
}

// create a new instance of the CPITable that can be used in this script
const newCPITable = new CPITable;

// TO-DO: generalize this so it could be used for an indeterminate number of values
// function to convert income and savings values to 2023 dollars
function convertToPresentUSD (baseYearValue, baseYear) {
  const cpiRatio = newCPITable.getCPIRatio(baseYear, 2023);
  let presentYearValue = baseYearValue * cpiRatio;
  return presentYearValue;
}

// Create objects for input year savings and income form inputs
const inputYearElement = document.getElementById("input-year-dropdown");
const inputSavingsElement = document.getElementById("savings-input");
const inputIncomeElement = document.getElementById("income-input");

// Create objects for target year savings and income form inputs
const targetSavingsElement = document.getElementById("savings-output");
const targetIncomeElement = document.getElementById("income-output");

// Function for formatting numbers to $XX
function formatAsUSD(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
}

// Get debt to income ratio
const debtToIncomeElement = document.getElementById('dti-ratio');


// Get interest rate
const interestRateElement = document.getElementById('int-rate');
// Convert to a number and divide by 100 to make the percentage a fraction
let interestRateValue = Number(interestRateElement.value) / 100
// Hard coding a periodic interest rate assuming interestRateValue is yearly and payments are monthly
// TO-DO: generalize this for other numbers of payments (assumes 12 monthly payments)
let periodicInterestRate = interestRateValue / 12;

// Create object for max house price
const maxHousePriceElement = document.getElementById('max-house-price');

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

// Get the objects in the context container so they can be used be the updateOutputs function.
const sfBadNews = document.getElementById('sf-bad-news');
const sjBadNews = document.getElementById('sj-bad-news');
const secretMessage = document.getElementById('secret-message');
const contextIntro = document.getElementById('context-intro');

// Function to update target values
const updateOutputs = () => {
  // Save savings, income, and year inputs as variable and convert to numbers
  let inputSavingsValue = Number(inputSavingsElement.value);
  let inputIncomeValue = Number(inputIncomeElement.value);
  let inputYearValue = Number(inputYearElement.value);
  // Convert the savings and income input to present US dollars using base year
  let targetSavingsValue = convertToPresentUSD(inputSavingsValue, inputYearValue);    
  let targetIncomeValue = convertToPresentUSD(inputIncomeValue, inputYearValue);
  // Assign the target savings and income values to these values. Convert to a string with $XXXX format.
  targetSavingsElement.value = formatAsUSD(targetSavingsValue);
  targetIncomeElement.value = formatAsUSD(targetIncomeValue);
  // Assign debt to income input to a variable, convert to a number and into a decimal from percentage.
  let debtToIncomeValue = Number(debtToIncomeElement.value) / 100
  // Calculate the max affordable house price based on the inputs, assuming no other taxes, expenses, etc.
  let maxHousePriceValue = maxAffordableHousePrice(targetIncomeValue, targetSavingsValue, debtToIncomeValue, periodicInterestRate);
  // Assign to the max house price element value.
  maxHousePriceElement.value = formatAsUSD(maxHousePriceValue);
  // Hardcoding the median house price value in April 2024. Subtracting the max house price calculated above.
  let sjDif = 1527333 - maxHousePriceValue;
  let sfDif = 1143333 - maxHousePriceValue;
  // Checking if they can afford a house in SJ (only SJ because SF is cheaper)
  if (sjDif < 0) {
    // Updating HTML values in the context section based on inputs
    secretMessage.innerHTML = 'Wow! You\'re rich! You could afford the median house in both the SF and SJ metro areas.';
    sfBadNews.innerHTML = '';
    sjBadNews.innerHTML = '';
    contextIntro.innerHTML = '';
  // if they can't afford SJ but can afford SF
  } else if (sfDif < 0) {
    // Updating HTML values in the context section based on inputs
    secretMessage.innerHTML = '';
    contextIntro.innerHTML = 'Based on your inputs, you would be ';
    sfBadNews.innerHTML = 'able to afford the median house in the SF Metro area,';
    sjBadNews.innerHTML = ` but would be <strong>${formatAsUSD(sjDif)}</strong> short of being able to afford the median house in the SJ Metro area.`;
  // if they are unfortunate and can't afford either
  } else {
    // Updating HTML values in the context section based on inputs
    secretMessage.innerHTML = '';
    contextIntro.innerHTML = 'Based on your inputs, you would be ';
    sfBadNews.innerHTML = `would be <strong>${formatAsUSD(sfDif)}</strong> short of being able to afford the median house in the SF Metro area and`;
    sjBadNews.innerHTML = ` <strong>${formatAsUSD(sjDif)}</strong> short of being able to afford the median house in the SJ Metro area. I guess you have to work harder! Or maybe sell your children?`;
  }
}
// Add event listeners on changes to base year, inputSavings, inputIncome, debtToIncome, interestRate
inputYearElement.addEventListener("change", updateOutputs);
inputSavingsElement.addEventListener("change", updateOutputs);
inputIncomeElement.addEventListener("change", updateOutputs);
debtToIncomeElement.addEventListener("change", updateOutputs);
interestRateElement.addEventListener("change",updateOutputs);