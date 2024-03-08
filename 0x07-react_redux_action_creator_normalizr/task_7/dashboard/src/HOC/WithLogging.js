import React from "react";

const withLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {

        getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || "Component";

        componentDidMount() {
            console.log(`Component ${this.getDisplayName(WrappedComponent)} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${this.getDisplayName(WrappedComponent)} is going to unmount`)
        }
        render(){
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    return WithLogging
}

export default withLogging
