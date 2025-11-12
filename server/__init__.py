from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from server.routers.auth_router import router as auth_router
import os
#utilizzo blueprint per gestire la logica delle rotte (corrisponde ad agganciare un middleware con use su Node.js)

def create_app():
    load_dotenv()
    app = Flask(__name__)

    CORS(app,
         resources={r"/api/*": {"origins": os.getenv("CLIENT_URL")}},
         supports_credentials=True)

    #accetta richieste da qualsiasi endpoint /api/* ma solo se provengono da CLIENT_URL”

    # Registrazione blueprint
    app.register_blueprint(auth_router, url_prefix="/api/auth")

    return app