function Demo(){

    let myName = 'Aniket'
    let fullName = ()=>{
        return 'Aniket pathak'
    }
    return (
        <>
        <button><a href="https://www.google.com/">Click here</a></button>
        <p>Hello my name is {myName} And my full name is {fullName()}</p>
        </>
    )
}
export default Demo

//we can write javascript code in {} this bracaket