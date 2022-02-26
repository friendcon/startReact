/*
  create-react-app 은 auto-reload를 하는 장점이 있다
 */
import Button from "./Button";
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
    // useState는 value, modifier function 반환
    const[counter, setValue] = useState(0);
    const[keyword, setKeyword] = useState("");
    const onClick = () => {
        setValue((prev) => prev + 1);
    }
    const onChange = (event) => {
        setKeyword(event.target.value);
    }

    console.log('i run all the time');

    useEffect(()=>{
        console.log("i run only one");
    }, []);

    // keyword가 변화할 때 코드를 실행하고 싶다
    useEffect(()=>{
        console.log("i run when keyword changes.");
    }, [keyword]);

    useEffect(()=>{
        console.log("i run when counter changes.");
    }, [counter]);
    useEffect(()=> {
        console.log("i run when keyword & counter change");
    }, [counter, keyword]);
    /*
        Q. state가 변할 때 component는 다시 render된다.
        특정 부분이 한번만 실행되게끔 하려면 어떻게 해결해야할까?
        A. useEffect(한번만 실행하고 싶은 코드, dependency)
     */

    const [showing, setShowing] = useState(false);
    const onClick2 = () => {
        setShowing((prev) => !prev);
    }

    function Hello() {
        useEffect(() => {
            console.log("hi");
            return () => console.log("bye");
        }, []);
        return <h1>Hello</h1>;
    }
  return (
    <div>
        <input value={keyword} type="text" placeholder="Search Here..." onChange={onChange}/>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
        {showing ? <Hello/> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
