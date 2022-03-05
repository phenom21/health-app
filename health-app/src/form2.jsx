import React from "react";
const form2=()=>{
  const handle=(e)=>{
    e.preventDefault();
    let a = Math.floor(Math.random()*2)+1;
    if(a==1)
    alert(`Congrats!! you have very low chances of having cancer.`);
    else
    alert(`We are sorry to inform you that you have breast cancer. `);
  }
    return(
        <>
             <div class="col-lg-6 col-md-6 col-12 alig">
            <form action="{{ url_for('predict')}}" method="POST" onSubmit={handle}>
              <div class="form-group">
                <label for="concave points_mean">Mean of the Concave Points</label>
                <input class="form-control" type="number" id="concave points_mean" name="concave points_mean" required="required" placeholder="Mean of the Concave Points"/>
              </div>
              <div class="form-group">
                <label for="area_mean">Mean of the Area</label>
                <input class="form-control" type="number" step="any" id="area_mean" name="area_mean" required="required" placeholder="Mean of the Area"/>
              </div>
              <div class="form-group">
                <label for="radius_mean">Mean of the Radius</label>
                <input class="form-control" type="number" id="radius_mean" name="radius_mean" required="required" placeholder="Mean of the radius"/>
              </div>
              <div class="form-group">
                <label for="perimeter_mean">Mean of the Perimeters</label>
                <input class="form-control" type="number" id="perimeter_mean" name="perimeter_mean" required="required" placeholder="Mean of the Parameter"/>
              </div>
              <div class="form-group">
                <label for="concavity_mean">Mean of the Concavity</label>
                <input class="form-control" type="number" id="concavity_mean" name="concavity_mean" required="required" placeholder="Mean of the concavity"/>
              </div>
              <button type="submit" class="btn mt-3 btn-primary">Predict</button>
            </form>
          </div>
          <div class="spacetaker">

</div>
        </>
    );
};

export default form2;