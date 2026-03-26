from flask import Blueprint, request, jsonify
from app import mysql, bcrypt

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'citizen')

    phone = data.get('phone')
    city = data.get('city')
    address = data.get('address')

    if not name or not email or not password:
        return jsonify({"error": "All fields required"}), 400

    cursor = mysql.connection.cursor()

    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    if cursor.fetchone():
        return jsonify({"error": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cursor.execute(
        "INSERT INTO users (name, email, password, role, phone, city, address) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        (name, email, hashed_password, role, phone, city, address)
    )

    mysql.connection.commit()

    return jsonify({"message": f"{role} registered successfully"})