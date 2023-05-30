import pickle
from flask import Flask, request
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
with open('cat.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route("/", methods=['POST'])
def predict():
    Age = request.form.get('Age')
    Sex = request.form.get('Sex')
    if Sex=='Male':
        Sex=1
    else:
        Sex=0
    ChestPainType = request.form.get('ChestPainType')
    if ChestPainType=='TA':
        ChestPainType=3
    elif ChestPainType=='NAP':
        ChestPainType=2
    elif ChestPainType=='ATA':
        ChestPainType=1
    else:
        ChestPainType=0;
    Cholesterol = request.form.get('Cholesterol')
    FastingBS = request.form.get('FastingBS')
    MaxHR = request.form.get('MaxHR')
    ExerciseAngina = request.form.get('ExerciseAngina')
    if ExerciseAngina=='Yes':
        ExerciseAngina=1
    else:
        ExerciseAngina=0
    OldPeak = request.form.get('OldPeak')
    ST_Slope = request.form.get('ST_Slope')
    if ST_Slope=='Flat':
        ST_Slope=1
    elif ST_Slope=='Up':
        ST_Slope=2
    else:
        ST_Slope=0

    # Convert the input values to a numpy array
    input_data = [[Age, Sex, ChestPainType, Cholesterol, FastingBS, MaxHR, ExerciseAngina, OldPeak, ST_Slope]]
    input_data = np.array(input_data, dtype=float)
    print(input_data)
    # Make the prediction using the loaded model
    prediction = model.predict_proba(input_data)
    
    prediction_str = str(round(prediction[0][1]*100,2))
    
    return prediction_str

if __name__ == '__main__':
    app.run(debug=True)
