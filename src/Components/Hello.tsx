import React from "react";

export default class Hello
    extends React.Component {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div className="center">
                <h1>Hello World</h1 >
            </div>
        );
    }
}
