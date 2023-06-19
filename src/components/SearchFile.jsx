import React, {useState} from 'react';

const SearchFile = (props) => {
    
    const [keyword, setKeyword] = React.useState("");

    const onchangeHandler = (event) => {
        const data = event.target.value;
        setKeyword(String(data).trim().replace(/\s/g, '+'));
    }

    const SearchGetImage = () => {
        // console.log(props);
        props.fun(keyword);
    }

    return (
        <>
            <center>
                <input type="text" id="search" onBlur={onchangeHandler} />
                &nbsp;
                <button onClick={SearchGetImage}>Search</button>
            </center>
        </>
    );
};

export default SearchFile;
