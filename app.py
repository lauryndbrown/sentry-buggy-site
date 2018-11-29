from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/hello/')
@app.route('/hello/<name>')
def bug1(name=None):
    return render_template('bug-1-hello-sentry.html', name=name)

@app.route('/name-and-number/')
def bug2():
    return render_template('bug-2-name-and-number.html')

@app.route('/count-down/')
def bug3():
    return render_template('bug-3-count-down.html')

