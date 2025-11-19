#punto di ingresso per l'avvio del server (tutta la configurazione si trova in __init__)
from flask import Flask
from flask_cors import CORS
from server.routers.auth_router import router as auth_router
from server.routers.analyze_router import router as analyze_router
from server.routers.user_router import router as user_router
from server.routers.settings_router import router as settings_router

from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app,
     resources={r"/api/*": {"origins": os.getenv("CLIENT_URL")}},
     supports_credentials=True)


#registro tutti i router (in Flask si chiamano BluePrint)
app.register_blueprint(auth_router, url_prefix="/api/auth")
app.register_blueprint(user_router, url_prefix="/api/user")
app.register_blueprint(analyze_router, url_prefix="/api/analyze")
app.register_blueprint(settings_router, url_prefix="/api/settings")

if __name__ == "__main__":
    app.run(port=os.getenv("PORT"), debug=True)