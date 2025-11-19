from flask import Blueprint
from server.controllers import auth_controller

router = Blueprint("auth_router", __name__) #corrisponde ad express.Router()

@router.get("/login")
def login():
    return auth_controller.login()

@router.get("/logout")
def logout():
    return auth_controller.logout()

@router.post("/registration")
def registration():
    return auth_controller.registration()

@router.get("/refresh")
def refresh():
    return auth_controller.refresh()