from flask import request, jsonify
from . import app, mysql

@app.route('/api/hospital/signup', methods=['POST'])
def hospital_signup():
    try:
        data = request.get_json()
        hospital_name = data.get('hospitalName')
        email = data.get('email')
        password = data.get('password')

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO hospital (hospital_name, email, password) VALUES (%s, %s, %s)", (hospital_name, email, password))
        mysql.connection.commit()
        cur.close()

        return jsonify({'message': 'Hospital signed up successfully'}), 200
    except Exception as e:
        print(f"Error signing up hospital: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500
