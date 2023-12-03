from flask import request, jsonify
from flask_cors import CORS
from . import app, mysql

CORS(app)  # Enable CORS

@app.route('/api/hospital/login', methods=['POST'])
def hospital_login():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        print(f"Login attempt: Email - {email}, Password - {password}")

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM hospital WHERE email = %s AND password = %s", (email, password))
        hospital = cur.fetchone()
        cur.close()

        if hospital:
            print("Login successful")
            return jsonify({'success': True, 'message': 'Login successful', 'hospital': hospital}), 200
        else:
            print("Invalid credentials")
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

    except Exception as e:
        print(f"Error during hospital login: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500
