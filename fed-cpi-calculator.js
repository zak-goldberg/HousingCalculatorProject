// Update with new year CPI by adding new array value at the end of cpitable function below (eg. this[x] = value ) - number of array values must match number of years generated in dropdown
var my_cpitable;

function InitCPI()
{
  my_cpitable = new cpitable();
}

// populate both year dropdown select boxes
$(document).ready(function(){
	var currentYear = new Date().getFullYear();
	var select_year1 = document.getElementById("year1");
	var select_year2 = document.getElementById("year2");
	createCPITable = new cpitable();
    cpiTableLength = Object.keys(createCPITable).length - 1;

	for (var i = 0; i <= cpiTableLength; i++)
	{
		select_year1.options[select_year1.options.length] = new Option(i + 1913, i + 1913);
	}
	for (var j = cpiTableLength; j >= 0; j--)
	{
		select_year2.options[select_year2.options.length] = new Option(j + 1913, j + 1913);
	}
});

function roundToPennies(n)
{
  if (n == '')
  {
    return ''; // invalid year selected
  }

  pennies = n * 100;
  pennies = Math.round(pennies);
  if (pennies >= 10) 
        {strPennies = " " + pennies}
  else 
        {strPennies = "0" + pennies};
  len = strPennies.length;
  return strPennies.substring(0, len - 2) + "." + strPennies.substring(len - 2, len);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function cpitable ()
{ 
this[0]=9.883; //1913
this[1]=10.017; //1914
this[2]=10.108; //1915
this[3]=10.883; //1916
this[4]=12.825; //1917
this[5]=15.042; //1918
this[6]=17.333; //1919
this[7]=20.042; //1920
this[8]=17.85; //1921
this[9]=16.75; //1922
this[10]=17.05; //1923
this[11]=17.125; //1924
this[12]=17.542; //1925
this[13]=17.7; //1926
this[14]=17.358; //1927
this[15]=17.158; //1928
this[16]=17.158; //1929
this[17]=16.7; //1930
this[18]=15.208; //1931
this[19]=13.642; //1932
this[20]=12.933; //1933
this[21]=13.383; //1934
this[22]=13.725; //1935
this[23]=13.867; //1936
this[24]=14.383; //1937
this[25]=14.092; //1938
this[26]=13.908; //1939
this[27]=14.008; //1940
this[28]=14.725; //1941
this[29]=16.333; //1942
this[30]=17.308; //1943
this[31]=17.592; //1944
this[32]=17.992; //1945
this[33]=19.517; //1946
this[34]=22.325; //1947
this[35]=24.042; //1948
this[36]=23.808; //1949
this[37]=24.067; //1950
this[38]=25.958; //1951
this[39]=26.55; //1952
this[40]=26.767; //1953
this[41]=26.85; //1954
this[42]=26.775; //1955
this[43]=27.183; //1956
this[44]=28.092; //1957
this[45]=28.858; //1958
this[46]=29.15; //1959
this[47]=29.575; //1960
this[48]=29.892; //1961
this[49]=30.25; //1962
this[50]=30.625; //1963
this[51]=31.017; //1964
this[52]=31.508; //1965
this[53]=32.458; //1966
this[54]=33.358; //1967
this[55]=34.783; //1968
this[56]=36.683; //1969
this[57]=38.825; //1970
this[58]=40.492; //1971
this[59]=41.817; //1972
this[60]=44.4; //1973
this[61]=49.308; //1974
this[62]=53.817; //1975
this[63]=56.908; //1976
this[64]=60.608; //1977
this[65]=65.233; //1978
this[66]=72.575; //1979
this[67]=82.408; //1980
this[68]=90.925; //1981
this[69]=96.5; //1982
this[70]=99.6; //1983
this[71]=103.883; //1984
this[72]=107.567; //1985
this[73]=109.608; //1986
this[74]=113.625; //1987
this[75]=118.258; //1988
this[76]=123.967; //1989
this[77]=130.658; //1990
this[78]=136.192; //1991
this[79]=140.317; //1992
this[80]=144.458; //1993
this[81]=148.225; //1994
this[82]=152.383; //1995
this[83]=156.85; //1996
this[84]=160.517; //1997
this[85]=163.008; //1998
this[86]=166.575; //1999
this[87]=172.2; //2000
this[88]=177.067; //2001
this[89]=179.875; //2002
this[90]=183.958; //2003
this[91]=188.883; //2004
this[92]=195.292; //2005
this[93]=201.592; //2006
this[94]=207.342; //2007
this[95]=215.303; //2008
this[96]=214.537; //2009
this[97]=218.056; //2010
this[98]=224.939; //2011
this[99]=229.594; //2012
this[100]=232.957; //2013
this[101]=236.736; //2014
this[102]=237.017; //2015
this[103]=240.007; //2016
this[104]=245.12; //2017
this[105]=251.107; //2018
this[106]=255.657; //2019
this[107]=258.811; //2020
this[108]=270.97; //2021
this[109]=292.655; //2022
this[110]=304.702; //2023
}

function cpilookup(year4)
{
    return my_cpitable[year4-1913];
}

function calculate(form)
{
    if ((document.CPIform.dollarAmount.value.length != 0) &&
       (document.CPIform.year.value.length != 0) && 
       (document.CPIform.yearto.value.length !=0))
    {  
        dollarCurrent = parseFloat(document.CPIform.dollarAmount.value);
        if (!isNumber(dollarCurrent))
        {
            alert("Please enter a numeric value to use the DollarWorth calculator.");
            return;
        }
        yearfromnum =  parseInt(document.CPIform.year.value);
        yeartonum = parseInt(document.CPIform.yearto.value);
        var d = new Date();
        currentYear = d.getFullYear();
        if (yearfromnum > currentYear || yearfromnum < 1913 )
		{
            alert("Please select a year between 1913 and ", currentYear,  ".");
		    document.CPIform.year.focus();
            document.CPIform.year.select();
        }
        else
        {
            if (yeartonum > currentYear || yeartonum < 1913)
            {
                alert ("Please select a year between 1913 and ", currentYear,  ".");
                document.CPIform.yearto.focus();
                document.CPIform.yearto.select();
            }
            else 
            {  
                document.CPIform.result.value = roundToPennies(cpicalculation(dollarCurrent, yearfromnum, yeartonum))
            }
        }
    }
    else
    {
        alert("Please input a dollar amount in the first field.");
    }
}
 
function cpicalculation(dollarCurrent2, yearfrom, yearto)
   { cpifrom = cpilookup(yearfrom);
          cpito = cpilookup(yearto);
          // check whether number of elements in cpilookup matches number of years, if not assume current year data not available.
          var d = new Date();
          currentYear = d.getFullYear();
          createCPITable = new cpitable();
          lastCPIInTable = Object.keys(createCPITable).length;
          tableLength = lastCPIInTable-1;
          // if number of array elements in cpilookup doesn't match number of years, and lookup involves current year, indicate the data not available 
          if (tableLength!==(currentYear-1913) && ((yearfrom==currentYear) || (yearto==currentYear)))
          {
              alert (" Current year's multiplier not yet available.");
              return '';
          }
          else {
              dollarPast=dollarCurrent2 * (cpito/cpifrom);
              return dollarPast
          }
}

$(document).ready(function () {
    InitCPI();
});
 
        function isEmpty(value) {
            return typeof value == 'string' && value.trim().length === 0 || typeof value == 'undefined' || value === null;
        }

        $(document).ready(function () {
            var twitter_title = "Check out the @MinneapolisFed's DollarWorth calculator.";
            $("#share_tw").click(function () {
                var value_start = $('#val_start').val();
                var value_result = $('#val_result').val();
                var year_start = $('#year1').val();
                var year_result = $('#year2').val();
                if (isNumber(value_start) && !isEmpty(value_result)) {
                    twitter_title = "I just used the @MinneapolisFed's DollarWorth calculator to find out that $" + value_start.trim() + " in " + year_start + " is worth $" + value_result.trim() + " in " + year_result + ".";
                }
                var twitter_url = "https://twitter.com/share?url=https%3A%2F%2Fwww.minneapolisfed.org%2F%3Fsc_camp=CB9090703EC64AE88F5FA2C0A0F2DD5C%23dw&text=" + twitter_title;
                window.open(twitter_url,'tweetwin','scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=400');
            });
        });
