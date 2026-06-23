from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil
import os

from health_engine import analyze_health
from chatbot import ask_health_ai
from skin_analysis import analyze_skin

app = FastAPI(
    title="HealthTwin AI API",
    version="2.0"
)

# ---------------- CORS ---------------- #

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
      "http://localhost:5173",
        "https://healthtwin-ai-2.onrender.com",
        "https://health-twin-ai-lime.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Models ---------------- #

class UserData(BaseModel):
    name: str
    age: int
    gender: str
    height: float
    weight: float
    sleep: float
    water: float
    lastPeriod: str = ""
    cycleLength: int = 28


class ChatRequest(BaseModel):
    message: str


# ---------------- Home ---------------- #

@app.get("/")
def home():
    return {
        "status": "running",
        "project": "HealthTwin AI",
        "version": "2.0"
    }


# ---------------- Health Analysis ---------------- #

@app.post("/analyze")
def analyze(data: UserData):

    return analyze_health(data)


# ---------------- AI Chat ---------------- #

@app.post("/chat")
def chat(request: ChatRequest):

    reply = ask_health_ai(request.message)

    return {
        "reply": reply
    }


# ---------------- Skin Analysis ---------------- #

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.post("/skin-analysis")
async def skin(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = analyze_skin(file_path)

    return {
        "analysis": result
    }
