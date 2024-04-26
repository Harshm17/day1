// const First = () => {
//     return(<h1>heloo</h1>);
// }

// ReactDOM.render(<First />, document.querySelector('#root'));

const Title =() =>{
    return (
        <h1>Learn web development </h1>
    );
};


const Para =() =>{
    return (
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit, enim earum exercitationem aliquam cumque facere et quisquam cupiditate quasi excepturi accusantium atque, voluptatibus non quam, ducimus reiciendis! Quidem, reprehenderit? dhsuhdis ubdusah8dhs ubduabdu ubduabd udbaubdua ubduabdu
        </p>
    )
}


const Apara =() =>{
    return (
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit, enim earum exercitationem aliquam cumque facere et quisquam <a href="////">HeLooooo</a> cupiditate quasi excepturi accusantium atque, voluptatibus non quam, ducimus reiciendis! Quidem, reprehenderit? dhsuhdis ubdusah8dhs ubduabdu ubduabd udbaubdua ubduabdu
        </p>
    )
}

const Main = () =>{
    return (
        <div id="main" >
            <Title/>
            <Para/>
            <br></br>
            <Apara/>
            <br></br>
            <Para/>
        </div>
    );
};
ReactDOM.render(<Main />, document.querySelector('#root'));