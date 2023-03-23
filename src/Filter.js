function Filter({ showDone, setShowDone }){
    return(
        <>
            <input onChange={() => {setShowDone(!showDone)}} type={'checkbox'}></input>hide completed
        </>
    );
}

export default Filter;