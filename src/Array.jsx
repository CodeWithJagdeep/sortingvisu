import React from "react";

class Array extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.array()
    }

    array() {
        let array = []
        for (let i = 0; i < 50; i++) {
            let random = this.getRandomInt(160, 400)
            array.push(random)
        }
        this.setState({ array: array })

    }
    bubblesort() {
        const sorted=[1,4,2,5,2]
        let newarray = []
        let i=0
        let j=0
        setTimeout(()=>{

        },)
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    render() {
        const value = this.state.array
        return (
            <div className="array"
                style={{
                    display: "flex",
                    width: "100vw",
                    height: "80vh",
                    justifyContent: "center",
                    alignItems: "flex-end"
                }}>
                {value.map(value => (
                    <div className="arraycontainer"
                        style={{
                            height: `${value}px`,
                            width: "20px",
                            border: "1px solid white",

                            margin: "10px 1px"
                        }}>
                    </div>
                ))}


                <button onClick={this.bubblesort}>hello</button>

            </div>
        );
    }
}

export default Array;