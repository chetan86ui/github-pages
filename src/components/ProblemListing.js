import React, {useState} from 'react'

const ProblemListing = (props) => {

    
    const [problemsprop, setproblemsprop] = useState(props.problemprops);
    const compare = (a, b) => {
        const bandA = a.level.toUpperCase();
        const bandB = b.level.toUpperCase();
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      };
      //problemsprop.sort(compare);
      const sortArray = () => {
        const newArr = problemsprop.sort(compare);
        console.log("newArr",newArr);
        setproblemsprop(newArr);
        //problemsprop.sort(compare);
        
      };
    //   const sorted = [...problemsprop].sort((a, b) => {
    //     return b.level - a.level;
    //   });
    //   setproblemsprop(sorted);
    // <div>
    //         Sort : <button onClick={ sortArray }>Sort</button>
    //     </div>
    return (
        <>
        <div>
            Sort : <button onClick={ sortArray }>Sort</button>
        </div>
        <div className="grid1">
            {
                problemsprop.map((item,index) => {
                    return (
        
                        <div className="item1" key={item.id}>
                            <div className="item-id">{index+1}</div>
                            <div className="item-title">{ item.title }</div>
                            <div className="item-bedge"><span className="pbedge" data-level={ item.level }>{ item.level }</span></div>
                        </div>
                        
                    )
                })
            }
        </div>
        </>
    )
}

export default ProblemListing
