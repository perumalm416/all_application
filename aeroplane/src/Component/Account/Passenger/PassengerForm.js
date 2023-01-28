import { Fragment } from "react"


export const PassengerForm=()=>{


    return<Fragment>
        <form>
            <h3>Passenger Details</h3>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
                <label htmlFor="dob">Date Of Birth</label>
                <input id="dob" type="date" name="dob" />
            </div>
            <div>
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" type="number" name="mobile" placeholder="mobile number" />
            </div>
            <div>               
              <button type="submit">Add Details</button>
            </div>
        </form>
    </Fragment>
}


