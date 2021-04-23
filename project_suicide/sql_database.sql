CREATE TABLE suicide_data (
country VARCHAR,
year INT,
sex VARCHAR,
suicide_per_100k_popn DEC,
gdp_per_capita_usd INT	


select * from suicide_data


select country, year, sum(suicide_per_100k_popn) as suicide_2015 
from suicide_data 
where year='2015' 
group by country, year;

select country, year, sum(suicide_per_100k_popn) as suicide_2015 
from suicide_data 
where year='2010' 
group by country, year;

select country, year, sex, sum(suicide_per_100k_popn) as total_suicide 
from suicide_data 
group by country, year, sex;

select country, year, sum(suicide_per_100k_popn) as total_suicide, max(gdp_per_capita_usd) as GDP
from suicide_data
group by country, year;
