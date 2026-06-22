import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)


def ask_health_ai(message):

    completion = client.chat.completions.create(

       model="openai/gpt-oss-20b:free",

        messages=[
            {
                "role": "system",
                "content": """
You are HealthTwin AI.

You are an intelligent AI Health Assistant.

You help users with:

- BMI
- Weight
- Diet
- Exercise
- Sleep
- Water Intake
- Women's Health
- Healthy Lifestyle

Rules:

1. Never diagnose diseases.
2. Keep answers short.
3. Give practical advice.
4. Suggest healthy habits.
5. Be friendly.
"""
            },

            {
                "role": "user",
                "content": message
            }

        ]

    )

    return completion.choices[0].message.content
def generate_health_recommendation(
    bmi,
    health_score,
    calories,
    protein,
    water_goal,
    sleep,
    next_period
):

    prompt = f"""
You are an expert AI Health Coach.

Analyze this health report and give personalized recommendations.

Health Report:
- Health Score: {health_score}/100
- BMI: {bmi}
- Daily Calories: {calories} kcal
- Protein Goal: {protein} g
- Water Goal: {water_goal} L
- Sleep: {sleep} hours
- Next Period: {next_period}

Rules:
- Give 5 short bullet points.
- Be motivating and practical.
- Never diagnose diseases.
- Mention BMI, protein, water and sleep.
- End with one positive sentence.
"""

    completion = client.chat.completions.create(

        model="openai/gpt-oss-20b:free",

        messages=[
            {
                "role": "system",
                "content": "You are HealthTwin AI Health Coach."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]

    )

    return completion.choices[0].message.content