from flask import Blueprint, request, jsonify

complaints = Blueprint("complaints", __name__)

@complaints.route("/api/complaints", methods=["GET"])
def get_complaints():
    data = [
        {"id":1, "title":"Pothole", "status":"Pending"},
        {"id":2, "title":"Broken street light", "status":"Resolved"}
    ]

    return jsonify(data)