
const AuthUser = ({ user, children }) => {
    console.log(user)
    if (user) {
        return children[0]
    } else {
        return children[1]
    }
}

export default AuthUser;