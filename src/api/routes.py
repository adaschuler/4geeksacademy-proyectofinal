"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,  Plant, PlantPhotos, PlantType, Indicator
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/plant', methods=['GET'])
def get_plant():
    query_plant = Plant.query.all()
    query_plant = list(map(lambda x: x.serialize(), query_plant))
    print(query_plant)
    response_body = {
        "msg": "Hello, this is your GET /plant response ",
        "plant": query_plant
    }

    return jsonify(response_body), 200

@api.route('/plant', methods=['POST'])
def post_plant():
    body = request.get_json()
    print(body)

    plant = Plant(
    avatar=body['avatar'],
    family_name=body['family_name'],
    fantasy_name=body['fantasy_name'],
    idPlanttype=body['idPlanttype'],
    idIndicator=body['idIndicator'],
    idUser=body['idUser'],
    name=body['name'],
    temperature_range=body['temperature_range'],
    user_photos=body['user_photos'],
    water=body['water']
    )

    db.session.add(plant)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your POST /plant response "
    }

    return jsonify(response_body), 200

@api.route('/plant/<int:id>', methods=['DELETE'])
def delete_plant(id):
    plant_delete = Plant.query.get(id)
    if not plant_delete: 
        response_body = {
            "msg": "Hello, this is your DELETE /plant response ",
            "plant": "Este plant no existe, no puede ser eliminado"
        }
        return jsonify(response_body), 200        
    db.session.delete(plant_delete)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your DELETE /plant response ",
        "plant": "plant eliminado"
    }
    return jsonify(response_body), 200      

@api.route('/plantphotos', methods=['GET'])
def get_plantphotos():
    query_plantphotos = Plantphotos.query.all()
    query_plantphotos = list(map(lambda x: x.serialize(), query_plantphotos))
    print(query_plantphotos)
    response_body = {
        "msg": "Hello, this is your GET /plantphotos response ",
        "plant": query_plantphotos
    }

    return jsonify(response_body), 200

@api.route('/plantphotos', methods=['POST'])
def post_plantphotos():
    body = request.get_json()
    print(body)
    plantphotos = Plantphotos(user_photos=body['user_photos'],idPlant=body['idPlant'])
    db.session.add(plantphotos)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your POST /plantphotos response "
    }

    return jsonify(response_body), 200

@api.route('/plantphotos/<int:id>', methods=['DELETE'])
def delete_plantphotos(id):
    plantphotos_delete = Plantphotos.query.get(id)
    if not plantphotos_delete: 
        response_body = {
            "msg": "Hello, this is your DELETE /plantphotos response ",
            "plantphotos": "Esta photo no existe, no puede ser eliminado"
        }
        return jsonify(response_body), 200        
    db.session.delete(plantphotos_delete)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your DELETE /plantphotos response ",
        "plant": "photo eliminado"
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

@api.route('/indicator', methods=['GET'])
def get_indicator():
    query_indicator = Indicator.query.all()
    query_indicator = list(map(lambda x: x.serialize(), query_indicator))
    print(query_indicator)
    response_body = {
        "msg": "Hello, this is your GET /indicator response ",
        "indicator": query_indicator
    }

    return jsonify(response_body), 200

@api.route('/indicator', methods=['POST'])
def post_indicator():
    body = request.get_json()
    print(body)
    indicator = Indicator(name=body['name'])
    db.session.add(indicator)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your POST /indicator response "
    }

    return jsonify(response_body), 200

@api.route('/indicator/<int:id>', methods=['DELETE'])
def delete_indicator(id):
    indicator_delete = Indicator.query.get(id)
    if not indicator_delete:
        response_body = {
            "msg": "Hello, this is your DELETE /indicator response ",
            "indicator": "Este indicator no existe, no puede ser eliminado"
        }
        return jsonify(response_body), 200        
    db.session.delete(indicator_delete)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your DELETE /indicator response ",
        "indicator": "indicator eliminado"
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

@api.route('/user', methods=['POST'])
def post_user():
    body = request.get_json()
    print(body)
    user = User(nickname=body['nickname'],avatar=body['avatar'],password=body['password'],email=body['email'],credential=body['credential'],rol=body['rol'])
    db.session.add(user)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your POST /user response "
    }

    return jsonify(response_body), 200

@api.route('/user/<int:id>', methods=['PUT'])
def put_userupgrade(id):
    user = User.filter_by(id=id)
    request = request.body

    user.nickname = request.nickname
    user.email = request.email

    db.session.commit()

    response_body = {
        "msg": "Hello, this is your PUT /user password response "
    }

    return jsonify(response_body), 200

@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_delete = User.query.get(id)
    if not user_delete:
        response_body = {
            "msg": "Hello, this is your DELETE /user response ",
            "user": "Este user no existe, no puede ser eliminado"
        }
        return jsonify(response_body), 200        
    db.session.delete(user_delete)
    db.session.commit()
    response_body = {
        "msg": "Hello, this is your DELETE /user response ",
        "user": "user eliminado"
    }
    return jsonify(response_body), 200      



