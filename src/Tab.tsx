import React from "react";


interface IProps  {
    id : string
}

class Tab extends React.Component {
    params : string = "None";

    constructor(props : IProps) {
        super(props);

        this.params = props.id;
    }
    render(): React.ReactNode {
        return <div>
            <h1>My Tab</h1>
            <p>{this.params}</p>
        </div>
    }
}

export default Tab;