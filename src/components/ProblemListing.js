import React, {useState,useEffect} from 'react'

const dogs = [{ name: "fido", age: 22 }, { name: "will", age: 50 }];


function ProblemListing(props) {

    useEffect(() => {
        console.log("use effact");
    });
    
    
    const [problemsprop, setproblemsprop] = useState(props.problemprops);
    const sortByLevel = () => {
        const sorted = [...problemsprop].sort((a, b) => {
          return a.level - b.level;
        });
        setproblemsprop(sorted);
        //alert(sorted[0].name);
      };
    const sortArray1 = (item) => {
        console.log(item);
    };
    return (
        <>
        <div>
            Sort : <button onClick={ sortByLevel }>Sort</button>
        </div>
        <div className="grid1">
            {
                problemsprop.map((item,index) => {
                    return (
                        <div className="item1" key={item.id}>
                            <div className="item-id">{index+1}</div>
                            <div className="item-title">{ item.title } <button onClick={ () => sortArray1(item) }>Click</button></div>
                            <div className="item-bedge"><span className="pbedge" data-level={ item.levelname }>{ item.levelname }</span></div>
                        </div>
                        
                    )
                })
            }
        </div>
        </>
    )
}

export default ProblemListing
