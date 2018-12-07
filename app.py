from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/hello/')
def bug1(name=None):
    return render_template('bug-1-hello-sentry.html')

@app.route('/count-down/')
def bug2():
    return render_template('bug-2-count-down.html')

@app.route('/count-down-2/')
def bug3():
    return render_template('bug-3-count-down.html')

@app.route('/stars/')
def bug4():
    return render_template('bug-4-stars.html')