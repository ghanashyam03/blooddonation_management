from flask import request, jsonify
from flask_cors import CORS
from . import app, mysql

CORS(app)

def row_to_dict(cursor, row):
    return {cursor.description[i][0]: value for i, value in enumerate(row)}

@app.route('/api/donors/bloodgroup', methods=['POST'])
def get_donors_by_blood_group():
    try:
        data = request.get_json()
        blood_group = data.get('blood_group')
        print('Received blood group:', blood_group)

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM donor WHERE blood_group = %s", (blood_group,))
        donors = [row_to_dict(cur, row) for row in cur.fetchall()]
        cur.close()

        print('Returning donors:', donors)

        return jsonify(donors), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Error fetching donors: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500
