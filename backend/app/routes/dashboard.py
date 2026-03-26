from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
import mysql.connector

dashboard_bp = Blueprint('dashboard', __name__)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="0000",
        database="citicare"
    )

@dashboard_bp.route('/dashboard', methods=['GET'])
@jwt_required()
def get_dashboard():
    user_id = get_jwt_identity()

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    # Get user info
    cursor.execute("SELECT name, email FROM users WHERE id=%s", (user_id,))
    user = cursor.fetchone()

    # Get complaints count
    cursor.execute("SELECT COUNT(*) as total FROM complaints WHERE user_id=%s", (user_id,))
    total_complaints = cursor.fetchone()['total']

    # Get recent complaints
    cursor.execute("""
        SELECT id, title, status, created_at 
        FROM complaints 
        WHERE user_id=%s 
        ORDER BY created_at DESC 
        LIMIT 5
    """, (user_id,))
    complaints = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({
        "user": user,
        "total_complaints": total_complaints,
        "recent_complaints": complaints
    })