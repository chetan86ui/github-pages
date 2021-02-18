import React from 'react'

function ProblemListing(props) {
    const problemsprop = props.problemprops;
    console.log("hello",problemsprop);
    return (
        <div className="grid">
            {
                problemsprop.map((item) => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="ptitle">{ item.title } <span data-level={ item.level } className="pbedge">{ item.level }</span></div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProblemListing
