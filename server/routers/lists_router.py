from flask import Blueprint
from server.controllers import lists_controller
router = Blueprint('lists_router', __name__)

@router.get('/get-lists')
def get_lists():
    return lists_controller.get_lists()

@router.post('/add-list')
def add_list():
    return lists_controller.add_list()

@router.delete('/delete-list')
def delete_list():
    return lists_controller.remove_list()