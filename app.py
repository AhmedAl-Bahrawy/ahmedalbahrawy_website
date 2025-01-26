from flask import Flask, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = '62913a7dac3933f87a84626fcdeaaf3e2653f0a000843efd9bf2b31ba4767502'

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)