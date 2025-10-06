import React, { Component } from 'react'

export default class ErrorBoundries extends Component {
    
constructor(props){
    super(props);
    this.state={hasError:false};
}

static getDerivedStateFromError(error){
    // update state to next render shows fallback UI
    return{hasError:true}
}

componentDidCatch(error,errorInfo){
    // You can log the error to an error reporting service
    console.error("Error caught", error, errorInfo)
}

    render() {
        if (this.state.hasError) {
            if(this.props.fallBack){
                return this.props.fallBack()
            }
            return <div>This Component has crashed</div>
        }
        return this.props.children
    }
}
