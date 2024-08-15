import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonStyles } from './utils/styles'
import './utils/styles.css'
import styles from './components/ButtonComponent.module.css'
//CSS modules



function MyButton() {
  
  return (
    <button style ={ButtonStyles}>
      I'm a button
    </button>
  );
}
function MyButton2() {
  const [changeColor,setChangeColor] = useState(false)
  const handleChangeColor = ()=>{
    setChangeColor(true)
  }
  return (
    <button className={changeColor ? styles.boton2 : styles.boton3} onClick={handleChangeColor}>
      I'm a button2
    </button>
  );
}
function AboutPage() {
  return (
    <>
      <h1 className='texto1'>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
export default function MyApp() {
  const [count, setCount2] = useState(0);

  function handleClick2() {
    setCount2(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage/>
      <MyButton2 />
      <Profile/>
      <h1>Counters that update separately</h1>
      <MyButton4 />
      <MyButton4 />
      <h1>Counters that update together</h1>
      <MyButton5 count={count} onClick={handleClick2} />
      <MyButton5 count={count} onClick={handleClick2} />
    </div>
    
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

 function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
function MyButton4() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function MyButton5({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}