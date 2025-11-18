#punto di ingresso per l'avvio del server (tutta la configurazione si trova in __init__)
from flask import Flask
from flask_cors import CORS
from server.routers.auth_router import router as auth_router

from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app,
     resources={r"/api/*": {"origins": os.getenv("CLIENT_URL")}},
     supports_credentials=True)
app.register_blueprint(auth_router, url_prefix="/api/auth")

if __name__ == "__main__":
    app.run(port=os.getenv("PORT"), debug=True)