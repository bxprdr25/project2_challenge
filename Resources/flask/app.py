import numpy as np
from flask import Flask, jsonify, render_template,request
from sqlalchemy import create_engine

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

@app.route("/")
def createhomepage():
    return render_template("project-2-test.html", text="A Historical Examination Throughout the Decades by State")

# @app.route("/map/<year>")
@app.route("/map")
def createmap():
    year = request.args.get('year')
    if(year == None):
        year = 1970

    engine = create_engine('postgresql+psycopg2://alicesartori@localhost/Project_3')
    conn = engine.connect()

    sql_string ='SELECT state, state_minimum_wage,federal_minimum_wage ,year FROM geography WHERE year=\'%s\'' % (year)
    rows = engine.execute(sql_string).fetchall()

    federal_minimum_wage = []
    state_minimum_wage = []
    state_list = []
    for index, row in enumerate(rows):
        state_list.append(row[0].strip())
        federal_minimum_wage.append(row[1])
        state_minimum_wage.append(row[2])

    return render_template("index_alice.html",value=year ,state_trace_y = state_minimum_wage, federal_trace_y = federal_minimum_wage,labels=state_list)

@app.route("/barchart")
def createchart():
    # year = request.args.get('year')
    # print(year)
    # if(year == None):
    #     year = 1970
    return render_template("index_latisha.html")


@app.route("/linechart")
def createlinechart():

    return render_template("index_jack.html")

@app.route("/staticLine")
def staticlinechart():

    return render_template("test.html")


if __name__ == "__main__":
    app.run(debug=True)
