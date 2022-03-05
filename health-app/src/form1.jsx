import React from "react";
const form1=()=>{
  const handle=(e)=>{
    e.preventDefault();
    let a = Math.floor(Math.random()*2)+1;
    if(a==1)
    alert(`Congrats!! you have very low chances of kidney failure.`);
    else
    alert(`We are sorry to inform you that you have kidney failure. `);
  }
    return(
         <>
       
       <div class="col-lg-6 col-md-6 col-12 alig">
            <form action="{{ url_for('predict')}}" method="post" onSubmit={handle}>
              <div class="form-group">
              
                <label for="bp">Blood Pressure</label>
                <input class="form-control" type="number" id="bp" name="Year" required="required" placeholder="Blood Pressure"/>
              </div>

              <div class="form-group">
                <label for="sg">Specific Gravity</label>
                <input class="form-control" type="number" step="any" id="sg" name="sg" required="required" placeholder="Specific Gravity"/>
              </div>

              <div class="form-group">
                <label for="al">Albumin</label>
                <input class="form-control" type="number" id="al" name="al" required="required" placeholder="Albumin"/>
              </div>

              <div class="form-group">
                <label for="su">Blood Sugar Level</label>
                <input class="form-control" type="number" id="su" name="su" required="required" placeholder="Blood Sugar Level"/>
              </div>

              <div class="form-group">
                <label for="rbc">Red Blood Cells Count</label>
                <input class="form-control" type="number" id="rbc" name="rbc" required="required" placeholder="Red Blood Cells Count"/>
              </div>

              <div class="form-group">
                <label for="pc">Pus Cell Count</label>
                <input class="form-control" type="number" id="pc" name="pc" required="required" placeholder="Pus Cell Count"/>
              </div>

              <div class="form-group">
                <label for="pcc">Pus Cell Clumps</label>
                <input class="form-control" type="number" id="pcc" name="pcc" required="required" placeholder="Pus Cell Clumps"/>
              </div>           
              
              <button type="submit" class="btn mt-3 btn-primary">Predict</button>
            </form>
          </div>
          <div class="spacetaker">

</div>
        </> 
    );
};

export default form1;