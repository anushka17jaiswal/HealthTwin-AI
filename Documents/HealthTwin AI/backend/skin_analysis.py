import os
import base64
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)


def analyze_skin(image_path):

    with open(image_path, "rb") as image:
        base64_image = base64.b64encode(image.read()).decode("utf-8")

    completion = client.chat.completions.create(

        model="google/gemini-2.5-flash",

        max_tokens=300,

        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": """
You are HealthTwin AI Skin Analyzer.

Analyze only visible skin features from the uploaded face image.

Do NOT diagnose any disease.

Return your answer in this exact format:

Skin Score: __/100

Acne:
Pigmentation:
Dark Circles:
Oiliness:
Hydration:

Recommendations:
• Recommendation 1
• Recommendation 2
• Recommendation 3
• Recommendation 4
"""
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            }
        ]
    )

    return completion.choices[0].message.content