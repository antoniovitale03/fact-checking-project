from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from routers import authRouter

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CLIENT_URL")],
    allow_credentials=True
)

app.include_router(authRouter.router)