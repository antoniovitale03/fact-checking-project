from flask import Blueprint
from server.controllers import articles_controller
router = Blueprint("articles_router", __name__)

@router.get("/get-articles")
def get_articles():
    return articles_controller.get_articles()

@router.post('/add-articles')
def add_articles():
    return articles_controller.add_article()

@router.delete('/delete-article')
def delete_article():
    return articles_controller.delete_article()