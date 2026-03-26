from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# 🔗 MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="0000",   # change if needed
    database="citicare"
)

# ✅ Use dictionary cursor (important)
cursor = db.cursor(dictionary=True)


# 🏠 Test Route
@app.route('/')
def home():
    return "Flask server running ✅"


# =========================
# 🧾 REGISTER API
# =========================
@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json

        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        phone = data.get('phone')
        city = data.get('city')
        address = data.get('address')

        # 🔍 Check if user exists
        cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({
                "status": "error",
                "message": "Email already registered"
            }), 400

        # 🧠 Insert user
        query = """
        INSERT INTO users (name, email, password, phone, city, address)
        VALUES (%s, %s, %s, %s, %s, %s)
        """

        values = (name, email, password, phone, city, address)

        cursor.execute(query, values)
        db.commit()

        return jsonify({
            "status": "success",
            "message": "User registered successfully"
        }), 201

    except Exception as e:
        print("Error:", e)
        return jsonify({
            "status": "error",
            "message": "Something went wrong"
        }), 500


# =========================
# 🔐 LOGIN API
# =========================
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json

        email = data.get('email')
        password = data.get('password')

        query = "SELECT * FROM users WHERE email=%s AND password=%s"
        cursor.execute(query, (email, password))

        user = cursor.fetchone()

        if user:
            return jsonify({
                "status": "success",
                "message": "Login successful",
                "user": {
                    "id": user["id"],
                    "name": user["name"],
                    "email": user["email"]
                }
            }), 200
        else:
            return jsonify({
                "status": "error",
                "message": "Invalid email or password"
            }), 401

    except Exception as e:
        print("Error:", e)
        return jsonify({
            "status": "error",
            "message": "Something went wrong"
        }), 500


# =========================
# 👥 GET ALL USERS
# =========================
@app.route('/users', methods=['GET'])
def get_users():
    try:
        cursor.execute("SELECT id, name, email, phone, city, address FROM users")
        users = cursor.fetchall()

        return jsonify(users), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({
            "status": "error",
            "message": "Something went wrong"
        }), 500


# =========================
# ▶ RUN SERVER
# =========================
if __name__ == '__main__':
    app.run(debug=True)