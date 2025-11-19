from flask import Blueprint
from server.controllers import settings_controller
router = Blueprint('settings_router', __name__)

@router.post('/modify-profile')
def modify_profile():
    return settings_controller.modify_profile()

@router.get('/delete-account')
def delete_account():
    return settings_controller.delete_account()