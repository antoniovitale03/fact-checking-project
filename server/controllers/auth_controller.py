from flask import jsonify

def login():
    return jsonify("cambio frase di nuovo")

def logout():
    return jsonify("logout")

def registration():
    return jsonify("registration")

def refresh():
    return jsonify("refresh")