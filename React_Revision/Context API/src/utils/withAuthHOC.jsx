
//  Higher Order Component(HOC) 

export const WithAuthHOC = (WrappedComponent) => {
    return (props) => {
        const isLogin = true;
        const user = { name: "Anand" }

        if (isLogin) {
            return <WrappedComponent {...props} {...user} />
        }
        return <div>please Login First</div>
    }
}
