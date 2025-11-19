from flask import Blueprint
from server.controllers import favorites_controller

router = Blueprint("favorites_router", __name__)

@router.get('/get-articles')
def get_favorites_articles():
    return favorites_controller.get_favorites_articles()

@router.post('/add-article')
def add_article():
    return favorites_controller.add_article()

@router.delete('/remove-article')
def remove_article():
    return favorites_controller.remove_article()


@router.get('/get-topics')
def get_favorites_topics():
    return favorites_controller.get_favorites_topics()

@router.post('/add-topic')
def add_topic():
    return favorites_controller.add_topic()

@router.delete('/remove-topic')
def remove_topic():
    return favorites_controller.remove_topic()