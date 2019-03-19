import React from 'react';

const SideBar = (props) => {
    return (
        <div className="sideBar">
            <button>Post Article</button>
            <select>
                <option>date</option>
                <option>votes</option>
                <option>comments</option>
            </select>
        </div>)
}

export default SideBar;