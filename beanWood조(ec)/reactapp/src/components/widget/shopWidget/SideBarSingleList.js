import React , {useState} from 'react';

function SideBarSingleList({item, checkLists, setCheckLists}) {

    const [check, setCheck] = useState(false)

    const handleCheck = (e) => {
        
        setCheck(!check)
        if(check === false){
            console.log(e.target.id)
            setCheckLists([...checkLists,e.target.id])
        } else {
            console.log("-",e.target.id)
            setCheckLists(checkLists.filter(item => item !== e.target.id))
        }
    }

    return(
        <li key={item.id}>
            <label className="checkbox-default" for="men">
                <input onChange={handleCheck} type="checkbox" id={item.name} checked={check}/>
                <span>{item.name}</span>
            </label>
        </li>
    );
}

export default SideBarSingleList;