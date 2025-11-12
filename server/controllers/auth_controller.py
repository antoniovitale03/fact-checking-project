from flask import jsonify

def login():
    return jsonify("cambio frase")

def logout():
    return jsonify("logout")

def registration():
    return jsonify("registration")