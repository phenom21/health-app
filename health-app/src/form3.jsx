import React from "react";
const form3=()=>{
    return(
        <>
        <div class="col-lg-6 col-md-6 col-12 alig">
            <form action="{{ url_for('predict')}}" method="post">
              <div class="form-group">
                <label for="cp">Chest Pain Type</label>
                <select class="form-control" id="cp" name = "cp" required="required" placeholder="Chest Pain Type">
                  <option value="1">Typical Angina</option>
                  <option value="2">Atypical Angina</option>
                  <option value="3">Non-Anginal Pain</option>
                  <option value="4">Asymptomatic</option>
                </select>
              </div>

              <div class="form-group">
                
                <label for="trestbps">Resting Blood Pressure (in mm Hg)</label>
                <input class="form-control" type="number" id="trestbps" name="trestbps" required="required" placeholder="Resting Blood Pressure"/>
              </div>

              <div class="form-group">
                <label for="chol">Serum Cholestoral in mg/dl</label>
                <input class="form-control" type="number" step="any" id="chol" name="chol" required="required" placeholder="Serum Cholestoral"/>
              </div>

              <div class="form-group">
                <label for="fbs">Fasting Blood Sugar</label>
                <select class="form-control" id="fbs" name = "fbs" required="required" placeholder="Fasting Blood Sugar">
                  <option value="0">Fasting Blood Sugar less than 120 mg/dl</option>
                  <option value="1">Fasting Blood Sugar greater than 120 mg/dl</option>
                </select>
              </div>

              <div class="form-group">
                <label for="restecg">Resting Electro-cardiographic Result</label>
                <select class="form-control" type="number" id="restecg" name="restecg" required="required" placeholder="Resting Electro-cardiographic Result">
                <option value="0">Normal</option>
                <option value="1">having ST-T wave abnormality</option>
                <option value="2">showing probable or definite left ventricular hypertrophy</option>
            	</select>
              </div>
              
              <div class="form-group">
                <label for="thalach">Maximum Heart Rate Achieved</label>
                <input class="form-control" id="thalach" name = "thalach" required="required" />
              </div>

              <div class="form-group">
                <label for="exang">Exercise Induced Angina</label>
                <select class="form-control" id="exang" name = "exang" required="required" >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary mt-3">Predict</button>
            </form>
          </div>
          <div class="spacetaker">

</div>
        </>
    );
};

export default form3;