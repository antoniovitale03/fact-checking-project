#punto di ingresso per l'avvio del server (tutta la configurazione si trova in __init__)
from server import create_app

app = create_app()

if __name__ == "__main__":
    app.run(port=5000, debug=True)