from flask import Blueprint
from server.controllers import analyze_controller
router = Blueprint("analyze_router", __name__)

@router.post("/article")
def analyze_article():
    return analyze_controller.analyze_article()

@router.post("/topic")
def analyze_topic():
    return analyze_controller.analyze_topic()