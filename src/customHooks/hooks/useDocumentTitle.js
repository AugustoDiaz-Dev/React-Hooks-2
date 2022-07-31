import { useEffect } from 'react'
// The function name for a custom hook should start with the word "use".
function useDocumentTitle(count) {
    // useEffect has two arguments: the first argument is the function to run, and the second argument is an array of dependencies.
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count])

}

export default useDocumentTitle