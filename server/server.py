from flask import Flask, json
from data import catalog  # Assuming catalog is defined in the data module
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # warning: this disables CORS policy
# Home get
@app.get("/")
def home():
    return "Hello from server"

# Test get
@app.get("/test")
def test():
    return "This is another page"

# API endpoint to get products
@app.get('/api/products')
def get_products():
    return json.dumps(catalog)

# Run the Flask application if this script is executed
if __name__ == "__main__":
    app.run(debug=True)
