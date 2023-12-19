import React from "react";

const Cards = (props) =>{
    return (
        <div className= "container d-flex p-0  ">
            <div className= "card justify-content-center m-3" >
                <img src={props.image} className="card-img-top"></img> 
                <div className="card-body">
                    <h5 className="card-title">{props.cardName}</h5> 
                    <p className="card-text">{props.text}</p> 
                    <hr className="my-4"></hr>
                    <a href="#" className="btn btn-primary">Find our more!</a> 
                </div>
            </div> 
        </div>
    )
}
export default Cards;

