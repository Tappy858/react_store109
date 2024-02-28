from flask import Flask, jsonify
from data import catalog  # Assuming catalog is defined in the data module

app = Flask(__name__)

# Home route
@app.route("/")
def home():
    return "Hello from server"

# Test route
@app.route("/test")
def test():
    return "This is another page"

# API endpoint to get products
@app.route('/api/products')
def get_products():
    return jsonify(catalog)

# Run the Flask application if this script is executed
if __name__ == "__main__":
    app.run(debug=True)
