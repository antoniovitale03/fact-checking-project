from flask import Blueprint
from server.controllers import topics_controller
router = Blueprint("topics_router", __name__)

@router.get('/get-topics')
def get_topics():
    return topics_controller.get_topics()

@router.post('/add-topic')
def add_topic():
    return topics_controller.add_topic()

@router.delete('/delete-topic')
def delete_topic():
    return topics_controller.delete_topic()

@router.get('/get-topic/<topic_id>')
def get_topic(topic_id):
    return topics_controller.get_topic(topic_id)