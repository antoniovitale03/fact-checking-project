from flask import Blueprint
from server.controllers import user_controller

from server.routers.lists_router import router as lists_router
from server.routers.articles_router import router as articles_router
from server.routers.topics_router import router as topics_router
from server.routers.favorites_router import router as favorites_router

router = Blueprint("user_router", __name__)

@router.get('/profile')
def profile():
    return user_controller.profile()

#gestione liste
router.register_blueprint(lists_router, url_prefix="/lists")

#gestione articoli
router.register_blueprint(articles_router, url_prefix="/articles")

#gestione topics
router.register_blueprint(topics_router, url_prefix="/topics")

#gestione preferiti
router.register_blueprint(favorites_router, url_prefix="/favorites")


@router.get('/activities')
def activities():
    return user_controller.activities()


