from flask import Flask, jsonify
import json
import pandas as pd
from flask_cors import CORS 
from sqlalchemy import create_engine
connection_string = "postgres:1Ax2by3cz$@localhost:5432/project-2-final"
engine = create_engine(f'postgresql://{connection_string}')

df = pd.read_csv("./resources/master.csv")

app = Flask(__name__)
CORS(app)


@app.route("/api/suicide_2015")
def suicide_2015():
    data2015 = engine.execute("select country, year, sum(suicide_per_100k_popn) as suicide_2015 from suicide_data where year='2015' group by country, year")
    country_list = []
    # print(data2015)
    for row in data2015:
        try:
            country_list.append({
                "country":row[0],
                "year":row[1],
                "suicide_no":str(row[2])
            })
        except TypeError:
            pass
    # print(country_list)
    return jsonify(list = country_list)
    
    
@app.route("/api/suicide_data")
def suicide_data():
    data = engine.execute("select country, year, sex, sum(suicide_per_100k_popn) as total_suicide from suicide_data group by country, year, sex")
    country_list = []
    # print(data2015)
    for row in data:
        try:
            country_list.append({
                "country":row[0],
                "year":row[1],
                "sex":row[2],
                "suicide_no":str(row[3])
            })
        except TypeError:
            pass
    # print(country_list)
    return jsonify(list = country_list)


@app.route("/api/suicide_2010")
def suicide_2010():
    data2010 = engine.execute("select country, year, sum(suicide_per_100k_popn) as suicide_2010 from suicide_data where year='2010' group by country, year")
    country_list = []
    # print(data2010)
    for row in data2010:
        try:
            country_list.append({
                "country":row[0],
                "year":row[1],
                "suicide_no":str(row[2])
            })
        except TypeError:
            pass
    # print(country_list)
    return jsonify(list = country_list)

@app.route("/api/suicide_gdp")
def suicide_gdp():
    datagdp = engine.execute("select country, sum(suicide_per_100k_popn) as suicide_no, max(gdp_per_capita_usd) as GDP from suicide_data group by country")
    country_list = []
    for row in datagdp:
        try:
            country_list.append({
                "country":row[0],
                "suicide_no":str(row[1]),
                "GDP":str(row[2])
            })
        except TypeError:
            pass
    # print(country_list)
    return jsonify(list = country_list)



if __name__ == '__main__':
    app.run()   
    
    
    
    
    
    
    
    # return "test"
    # suicide_2015_list = []

    # for country, suicide_2015 in data.fetchall(): 
    #     country_list.append(str(country))
    #     suicide_2015_list.append(int(suicide_2015))
    # print(country_list)
    # print(suicide_2015_list)
    # return jsonify([{
    #     "x": country_list,
    #     "y":suicide_2015_list,
    #     "type": "bar"
    # }])


# @app.route("/api/suicide_2010")
# def suicide_2010():
    # data2010 = engine.execute("select country, year, sum(suicide_per_100k_popn) as suicide_2010 from suicide_data where year='2010' group by country, year")
    # print(data2010)
    # return "test"


# @app.route("/api/suicide_us")
# def suicide_us():
#     dataus = engine.execute("select country, sex, sum(suicide_per_100k_popn) as total_suicide, max(gdp_per_capita_usd) as gdp_per_capita from suicide_data where country='United States' group by country, sex;")
#     print(dataus)
#     return "test"
  



# @app.route("/api/acquistions")
# def fang():
#     vc = df["ParentCompany"].value_counts()

#     print(vc)

#     y = []
#     for i in list(df["ParentCompany"].value_counts().values):
#         y.append(int(i))
#     data = [{
#         "x": list(vc.index),
#         "y": y,
#         "type": "bar"
#     }]

# print(data)
    
# return jsonify(data)


