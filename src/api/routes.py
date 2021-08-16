"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,  Plant, PlantType, Indicator
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/planttype', methods=['GET'])
def get_planttype():
    query_planttype = Planttype.query.all()
    query_planttype = list(map(lambda x: x.serialize(), query_planttype))
    print(query_planttype)
    response_body = {
        "msg": "Hello, this is your GET /planttype response ",
        "planttype": query_planttype
    }

    return jsonify(response_body), 200

@api.route('/planttype', methods=['POST'])
def post_planttype():
    body = request.get_json()
    print(body)
    planttype = PlantType(name=body['name'])
    db.session.add(planttype)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your POST /planttype response "
    }

    return jsonify(response_body), 200

@api.route('/planttype/<int:id>', methods=['DELETE'])
def delete_planttype(id):
    planttype_delete = Planttype.query.get(id)
    if not planttype_delete:
        response_body = {
            "msg": "Hello, this is your DELETE /planttype response ",
            "planttype": "Este planttype no existe, no puede ser eliminado"
        }
        return jsonify(response_body), 200        
    db.session.delete(planttype_delete)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your DELETE /planttype response ",
        "planttype": "planttype eliminado"
    }
    return jsonify(response_body), 200      

@api.route('/user', methods=['GET'])
def get_user():
    query_user = User.query.all()
    query_user = list(map(lambda x: x.serialize(), query_user))
    response_body = {
        "msg": "Hello, this is your GET /user response ",
        "user":query_user
    }

    return jsonify(response_body), 200




