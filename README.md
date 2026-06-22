# 🩺 HealthTwin AI

HealthTwin AI is an AI-powered personal health assistant that helps users monitor their health, receive personalized recommendations, analyze skin health, and interact with an intelligent health chatbot.

## 🚀 Features

- 📊 BMI Calculator
- ❤️ Health Score
- 🔥 Daily Calorie Requirement
- 💧 Water Intake Tracker
- 🥩 Protein Goal Calculator
- 😴 Sleep Analysis
- 🩸 Menstrual Cycle Prediction
- 🤖 AI Health Recommendations
- 💬 Gemini AI Chatbot
- 📷 AI Skin Analysis
- 📈 Health Progress Dashboard
- 📉 Weekly & Monthly Charts
- 🎯 Health Simulator

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Chart.js

### Backend
- FastAPI
- Python
- Google Gemini API
- OpenCV
- MediaPipe

---

## 📂 Project Structure

```
HealthTwin AI
│
├── backend
│   ├── main.py
│   ├── health_engine.py
│   ├── chatbot.py
│   ├── skin_analysis.py
│   ├── requirements.txt
│   └── .env
│
├── src
│   ├── pages
│   ├── components
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 📷 AI Modules

### Health Analysis
- BMI
- Health Score
- Calories
- Water Goal
- Protein Goal
- Period Prediction

### AI Chatbot
- Health Guidance
- Fitness Advice
- Nutrition Suggestions
- Lifestyle Recommendations

### Skin Analysis
- Acne Detection
- Pigmentation Detection
- Dark Circle Analysis
- Skin Tone Detection
- Personalized Skincare Suggestions

---

## 📈 Future Improvements

- User Authentication
- Cloud Database
- Daily Health History
- Smart Notifications
- Wearable Device Integration
- AI Disease Risk Prediction

---

## 👩‍💻 Developed By

**Anushka Jaiswal**

HealthTwin AI – An intelligent AI-powered healthcare assistant built using React, FastAPI, and Google Gemini AI.
