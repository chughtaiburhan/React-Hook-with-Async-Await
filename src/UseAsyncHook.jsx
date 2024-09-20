import React, { useEffect, useState } from 'react'

function UseAsyncHook(searchBook) {
    const [result,setResult]=useState([]);
    const [loading,setLoading]=useState("false");

    useEffect(()=>{
        async function fetchBookList(){
            try {
                setLoading("true")
                const response=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`);
                const json=await response.json();

                setResult(
                    json.items.map(item =>{
                        return(
                            item.volumeInfo.title
                        )
                    })
                );

            } catch (error) {
                
            }
        }
        if(searchBook!==""){
            fetchBookList();
        }
 },[searchBook]);

  return  [result,loading]

}

export default UseAsyncHook
