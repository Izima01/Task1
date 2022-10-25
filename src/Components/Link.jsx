import React from 'react'

const Link = ({ link, id, name }) => {
    return (
        <a href={link} id={id} style={{ width: "100%", cursor: "pointer" }}>
            <button
                style={{ width: "100%", border: "none", paddingBlock: "20px", backgroundColor: "#EAECF0", borderRadius: "8px", color: "#101828", fontWeight: "600", fontSize: "18px", cursor: "pointer" }}
            >
                {name}
            </button>
        </a>
    )
}

export default Link