import React, { Component } from 'react';
import './index.css';
// components
import Marital from '../Marital';
import AidAttend from '../AidAttend';
import Results from '../Results';
import Footer from '../Footer';
// controllers
import rate from '../../controllers/rate_lookup';

// need to make this a stateful component so responses get saved.
class Inputs extends Component {

  state = {
    effectiveDate: 0,
    maritalStatus: 0,
    spAidandAttendance: 0,
    depParents: 0,
    depChildren18: 0,
    depChildrenSchool: 0,
    compEval: 0,
    monthlyRate: 0
  };

  componentDidMount() {
    this.setState({
      effectiveDate: "20181201",
      maritalStatus: "single",
      spAidandAttendance: "no",
      depParents: "0",
      depChildren18: "0",
      depChildrenSchool: "0",
      compEval: 0,
      monthlyRate: "0.00"
    });
  };

  handleChange = event => {
    this.setState(
      { [event.target.name]: event.target.value },
      () => {
        this.updateRate()
      }
    );
  };

  // this function handles the marital toggle
  handleMaritalButton = () => {
    let currentMx = this.state.maritalStatus;
    if (currentMx === "single") {
      this.setState(
        { maritalStatus: "married" },
        () => {
          this.updateRate()
        }
      )
    } else if (currentMx === "married") {
      this.setState(
        { maritalStatus: "single" },
        () => {
          this.updateRate()
        }
      )
    } else console.log("something went wrong");
  }
  updateRate = () => {
    this.setState(
      {
        monthlyRate: rate.lookUp(this.state.effectiveDate, this.state.compEval, this.state.maritalStatus, this.state.depParents, this.state.depChildren18, this.state.depChildrenSchool,
          this.state.spAidandAttendance)
      }
    )
  }

  // this function handles the spouse aid and attendance toggle
  handleSpAAButton = () => {
    let currentAA = this.state.spAidandAttendance;
    if (currentAA === "no") {
      this.setState(
        { spAidandAttendance: "yes" },
        () => {
          this.updateRate()
        }
      )
    } else if (currentAA === "yes") {
      this.setState(
        { spAidandAttendance: "no" },
        () => {
          this.updateRate()
        }
      )
    } else console.log("something went wrong");
  }



  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6 offset-md-3  input-box">
            <div className="container">
              {/* Effective Date Selector */}
              <div className="row inputs-section">
                <div className="col-md-12 text-center">
                <p>Effective Date</p>
                  <div className="form-group">
                    <select className="form-control" id="effective-date"
                      name="effectiveDate"
                      onChange={this.handleChange}
                    >
                      <option value="20181201">12/01/2018</option>
                      <option value="20171201">12/01/2017</option>
                      <option value="20161201">12/01/2016</option>
                      <option value="20141201">12/01/2015</option>
                      <option value="20141201">12/01/2014</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Two toggle switches */}
              <div className="row inputs-section">
                <div className="col-md-6 text-center">
                  <Marital maritalStatus = {this.state.maritalStatus} />
                  <p className="spacer">&nbsp;</p>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="maritalStatus"
                      name="maritalStatus"
                      onChange={this.handleMaritalButton}
                    />
                    <label className="custom-control-label" for="maritalStatus"></label>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <p>Spouse Aid and Attendance</p>
                  <AidAttend aidAttend = {this.state.spAidandAttendance}/>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="spAA"
                      name="spAidandAttendance"
                      onChange={this.handleSpAAButton}
                    />
                    <label className="custom-control-label" for="spAA"></label>
                  </div>
                </div>
              </div>
              {/* Radio buttons for dependent parents */}
              <div className="row inputs-section">
                <div className="col-md-12 text-center">
                  <p>Dependent Parents</p>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="depParents" id="inlineRadio1" value="0" onChange={this.handleChange} defaultChecked="true"/>
                    <label className="form-check-label" htmlFor="inlineRadio1">None</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="depParents" id="inlineRadio2" value="1" onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">One</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="depParents" id="inlineRadio3" value="2" onChange={this.handleChange} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Two</label>
                  </div>
                </div>
              </div>
              {/* Scroll selectors for children */}
              <div className="row inputs-section">
                <div className="col-md-6 text-center">
                  <p>Minor Children</p>
                  <form>
                    <div className="col-auto my-1">
                      <label className="mr-sm-2 sr-only" htmlFor="depChildren18">Dependent Children Under 18</label>
                      <select className="custom-select mr-sm-2" id="depChildren18"
                        name="depChildren18"
                        onChange={this.handleChange}
                      >
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 text-center">
                  <p>School Children</p>
                  <form>
                    <div className="col-auto my-1">
                      <label className="mr-sm-2 sr-only" for="depChildrenSchool">Dependent Children Under 18</label>
                      <select className="custom-select mr-sm-2" id="depChildrenSchool"
                        name="depChildrenSchool"
                        onChange={this.handleChange}
                      >
                        <option selected value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              {/* Slider for combined evaluation for compensation percentage */}
              <div className="row inputs-section">
                <div className="col-md-12">
                  <label for="compRating">Combined Evaluation for Compensation: <b>{this.state.compEval}%</b></label>
                  <input type="range" className="custom-range" min="0" max="100" step="10" defaultValue="0" id="compRating"
                    name="compEval"
                    onChange={this.handleChange}></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Results
          result={this.state.monthlyRate}>
        </Results>
        <Footer 
          text = "Disclaimer: The VA Disability Compensation Estimator is not affiliated with the U.S. Department of Veterans Affairs, and is intended for educational purposes only. Any estimate displayed is unofficial and should not be construed as a promise of monetary benefits.">
        </Footer>
      </div>
    )
  }
}

export default Inputs;
