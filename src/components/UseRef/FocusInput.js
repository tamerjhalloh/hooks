import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
