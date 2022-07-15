from flask import Flask, render_template,session,request,redirect
import requests, json

app = Flask(__name__)

@app.route('/')
def route_index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='localhost',
            debug=True,
            port=5010)
