select * from suicide_data

select country, sum(suicide_per_100k_popn) as suicide_no, max(gdp_per_capita_usd) as GDP
from suicide_data
group by country;
