from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Plant(db.Model):
    __tablename__ = 'plant'
    id = db.Column(db.Integer, primary_key=True)
    fantasy_name = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    family_name = db.Column(db.String(120), unique=True, nullable=False)
    idPlanttype = db.Column(db.Integer, db.ForeignKey('planttype.id'), nullable=False)
    avatar = db.Column(db.String(120), unique=True, nullable=False)
    idIndicator = db.Column(db.Integer, db.ForeignKey('indicator.id'), nullable=False)
    water = db.Column(db.String(120), unique=True, nullable=False)
    temperature_range = db.Column(db.String(120), unique=True, nullable=False)
    idUser = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user_photos = db.relationship('PlantPhotos', backref="plant", lazy=True)

    def __repr__(self):
        return '<Plant %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "fantasy_name": self.fantasy_name,
            "name": self.name,
            "family_name": self.family_name,
            "avatar": self.avatar,
            "user_photos": self.user_photos,
            "water": self.water,
            "temperature_range": self.temperature_range
        }

class PlantPhotos(db.Model):
    __tablename__ = 'plantphotos'
    id = db.Column(db.Integer, primary_key=True)
    user_photos = db.Column(db.String(250), unique=True, nullable=False)
    idPlant = db.Column(db.Integer, db.ForeignKey('plant.id'), nullable=False)

    def __repr__(self):
        return '<PlantPhotos %r>' % self.user_photos

    def serialize(self):
        return {
            "id": self.id,
            "user_photos": self.user_photos
        }

class Indicator(db.Model):
    __tablename__ = 'indicator'
    id = db.Column(db.Integer, primary_key=True)
    humidity = db.Column(db.String(120), unique=True, nullable=False)
    irrigation = db.Column(db.String(120), unique=True, nullable=False)
    plant = db.relationship('Plant', backref="indicator", lazy=True)

    def __repr__(self):
        return '<Indicator %r>' % self.humidity

    def serialize(self):
        return {
            "id": self.id,
            "humidity": self.humidity,
            "irrigation": self.irrigation
        }

class PlantType(db.Model):
    __tablename__ = 'planttype'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    plant = db.relationship('Plant', backref="planttype", lazy=True)

    def __repr__(self):
        return '<PlantType %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(80), unique=False, nullable=False)
    avatar = db.Column(db.String(250), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    credential = db.Column(db.String(80), unique=False, nullable=False)
    """ idPlant = db.Column(db.Integer, db.ForeignKey('plant.id'), nullable=False) """    
    rol = db.Column(db.Boolean(), unique=False, nullable=False)
    plant_relationship = db.relationship('Plant', backref="user", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.nickname

    def serialize(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            "avatar": self.avatar,
            "email": self.email,
            "credential": self.credential,
            "rol": self.rol
            # do not serialize the password, its a security breach
        }