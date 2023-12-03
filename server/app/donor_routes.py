from flask import request, jsonify
from . import app, mysql

@app.route('/api/donor/add', methods=['POST'])
def add_donor():
    try:
        data = request.get_json()
        name = data.get('name')
        phone = data.get('phone')
        blood_group = data.get('bloodGroup')

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO donor (name, phone, blood_group) VALUES (%s, %s, %s)", (name, phone, blood_group))
        mysql.connection.commit()
        cur.close()

        return jsonify({'message': 'Donor added successfully'}), 200
    except Exception as e:
        print(f"Error adding donor: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500