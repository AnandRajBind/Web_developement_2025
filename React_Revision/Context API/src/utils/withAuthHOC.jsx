
//  Higher Order Component(HOC) 

export const withAuthHOC = (WrappedComponent) => {
    return (props) => {
        const isLogin = true;
        // const isLogin = false;
        const user = { name: "Anand" }

        if (isLogin) {
            return <WrappedComponent {...props} {...user} />
        }
        return <div>please Login First</div>
    }
}
