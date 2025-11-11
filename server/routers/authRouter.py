from fastapi import APIRouter
router = APIRouter(prefix="/api/auth", tags=["Autenticazione"])

@router.get("/login")
def login():
    return "funzione di login"