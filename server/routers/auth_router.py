from flask import Blueprint
from server.controllers import auth_controller

router = Blueprint("auth_router", __name__) #corrisponde ad express.Router()

@router.get("/login")
def login_route():
    return auth_controller.login()

@router.get("/logout")
def logout_route():
    return auth_controller.logout()

@router.post("registration")
def registration_route():
    return auth_controller.registration()