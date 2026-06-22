from datetime import datetime, timedelta
from chatbot import generate_health_recommendation

def calculate_bmi(weight, height):
    height_m = height / 100
    return round(weight / (height_m * height_m), 1)


def bmi_status(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Healthy"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"


def calculate_bmr(weight, height, age, gender):
    gender = gender.lower()

    if gender == "male":
        return round((10 * weight) + (6.25 * height) - (5 * age) + 5)

    return round((10 * weight) + (6.25 * height) - (5 * age) - 161)


def calculate_tdee(bmr):
    return round(bmr * 1.4)


def calculate_water(weight):
    return round(weight * 0.035, 1)


def calculate_protein(weight):
    return round(weight * 1.2, 1)


def calculate_health_score(bmi, sleep, water):

    score = 100
    recommendations = []

    if sleep < 7:
        score -= 10
        recommendations.append(
            "😴 Try sleeping 7-8 hours every night."
        )

    if water < 2:
        score -= 10
        recommendations.append(
            "💧 Increase your daily water intake."
        )

    if bmi < 18.5:
        score -= 10
        recommendations.append(
            "🥗 Increase healthy protein intake."
        )

    elif bmi > 25:
        score -= 10
        recommendations.append(
            "🏃 Exercise at least 30 minutes daily."
        )

    return score, recommendations


def predict_period(last_period, cycle_length):

    if last_period == "":
        return "Not Applicable"

    try:

        next_date = (
            datetime.strptime(last_period, "%Y-%m-%d")
            + timedelta(days=cycle_length)
        )

        return next_date.strftime("%d %b %Y")

    except:
        return "Invalid Date"


def analyze_health(data):

    bmi = calculate_bmi(
        data.weight,
        data.height
    )

    status = bmi_status(bmi)

    bmr = calculate_bmr(
        data.weight,
        data.height,
        data.age,
        data.gender
    )

    tdee = calculate_tdee(bmr)

    protein = calculate_protein(data.weight)

    water_goal = calculate_water(data.weight)

    score, recommendations = calculate_health_score(
        bmi,
        data.sleep,
        data.water
    )

    if (
        data.gender.lower() == "female"
        and data.lastPeriod != ""
    ):

        next_period = predict_period(
            data.lastPeriod,
            data.cycleLength
        )

    else:

        next_period = "Not Applicable"
    ai_recommendation = generate_health_recommendation(
    bmi=bmi,
    health_score=score,
    calories=tdee,
    protein=protein,
    water_goal=water_goal,
    sleep=data.sleep,
    next_period=next_period
)

    return {

        "health_score": score,

        "bmi": bmi,

        "bmi_status": status,

        "bmr": bmr,

        "daily_calories": tdee,

        "protein_goal": protein,

        "water_goal": water_goal,

        "sleep": data.sleep,

        "water": data.water,

        "next_period": next_period,
        "ai_recommendation": ai_recommendation,

        "recommendations": recommendations

    }