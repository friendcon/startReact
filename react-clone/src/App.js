/*
  create-react-app 은 auto-reload를 하는 장점이 있다
 */
import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!!</h1>
        <Button text={"Continue"}/>
    </div>
  );
}

export default App;
