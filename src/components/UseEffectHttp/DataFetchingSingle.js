import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetchingSingle() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonclick, setIdFromButtonclick] = useState(1);


    const handleClick = ()=> {
        setIdFromButtonclick(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                setPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        // return () => {
        //     cleanup
        // }
    }, [idFromButtonclick]);
    


return (
        <div>
            <input type="number" value={id}
            onChange={e=> setId(e.target.value) } />
            <button type="button" onClick={handleClick}> Fetch Post</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}
 
export default DataFetchingSingle
