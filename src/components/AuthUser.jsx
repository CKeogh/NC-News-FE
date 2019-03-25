
const AuthUser = ({ user, children }) => {
    if (user) {
        return children[0]
    } else {
        return children[1]
    }
}

export default AuthUser;