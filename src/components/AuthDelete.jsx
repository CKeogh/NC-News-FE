
const AuthDelete = ({ author, user, children }) => {
    if (user === author) {
        return children
    } else {
        return null;
    }
}

export default AuthDelete;