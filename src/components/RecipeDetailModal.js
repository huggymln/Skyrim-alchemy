import { db } from "../FirebaseConfig";
import { useState, useEffect } from "react";
import { BiArrowBack } from 'react-icons/bi'
import '../components/Modal.css';
import { ImSad, ImFileText2, ImPointRight, ImPointLeft } from "react-icons/im";

export default function Detail({props, test}){
    const sliced = test.Details.slice(0,5); 
    const [det, setDet] = useState(false);

    const viewMore= () =>{
        setDet(!det);
    }

    if(test.Details.length === 0){
        return(
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalBody">
                        <h2>Currently nothin written here. <ImSad /></h2>    
                    </div>
                    <div className="modalFooter">
                        <button className="modalBckbtn" onClick={()=>{props(!props)}}><BiArrowBack /> <div>Back</div></button>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modalBody">
                    <h2><ImFileText2 /> Details</h2>
                </div>
                <div className="elements">
                    <div className="part1" style={{display: det ? 'none':'block'}}>
                        <h1 style={{color: test.Type === "Potion" ? 'darkgreen':'maroon'}}>{test.Name}</h1>
                        <h3>Ingredients (combine 2) : </h3>
                        <div className="list">
                            {
                                sliced.map((e)=>{
                                    return(
                                        <label>- {e}</label>
                                    );
                                })
                            }
                        </div>
                        <button onClick={viewMore} style={{visibility: test.Details.length <=5 ? 'hidden':'visible'}} className="modalBckbtn">More Ingredients <div><ImPointRight /></div></button>
                    </div>
                    <div className="part1" style={{display: det ? 'block':'none'}}>
                        <h3>Complete Ingredients : </h3>
                        <div className="list">
                            {
                                test.Details.map((e)=>{
                                    return(
                                        <label>- {e}</label>
                                    );
                                })
                            }
                        </div>
                        <button onClick={viewMore} style={{visibility: test.Details.length <=5 ? 'hidden':'visible'}} className="modalBckbtn2"><div><ImPointLeft /></div> Back to Details</button>
                    </div>
                </div>
                <div className="modalFooter">
                    <button className="modalBckbtn" onClick={()=>{props(!props)}}><BiArrowBack /> <div>Close</div></button>
                </div>
            </div>
        </div>
    );
}