import React from "react";


class Header extends React.Component{

    constructor() {
        super();

        this.state = {
            name: "Rakesh Kumar Parida",
            age: 23,
            counter : 0
        };
    };
 
    updateCounter()
    {
        this.setState(
            {
                name: "Bikash Kumar Parida",
                age: 20,
                counter: this.state.counter+1
                
            }
        )
    }


    render()
    {
        return (
          <div>
            <h2> Name : {this.state.name} </h2>
                <h2> Age:{this.state.age}</h2>
                <h2>Counter { this.state.counter}</h2>
            
                <button onClick={()=>{this.updateCounter()}}>
                    Update
                </button>
                
            </div>
            

        );

    };
};

export default Header;