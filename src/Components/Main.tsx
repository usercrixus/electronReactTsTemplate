import React from "react";

export default class Main
    extends React.Component<any, { version: String; }> {

    constructor(props: any) {
        super(props);
        this.state = {
            version: 'Click to get version'
        };
    }

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    test(text: String) {
        this.setState({ version: text });
        console.log("passed");
        window.consoleOut.main();
    }
    render() {
        return (
            <div className="center">
                <h1 onClick={() => this.test(window.versions.node())}>{this.state.version}</h1 >
            </div>
        );
    }
}
