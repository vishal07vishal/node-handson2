// Que-1.What is UseRef Hook ?(Implementation)
// Ans-- The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//  const [inputValue, setInputValue] = useState("");
//  const count = useRef(0);

//  useEffect(() => {
//    count.current = count.current + 1;
//  });

//  return (
//    <>
//      <input
//        type="text"
//        value={inputValue}
//        onChange={(e) => setInputValue(e.target.value)}
//      />
//      <h1>Render Count: {count.current}</h1>
//    </>
//  );
// }


// Que-2.What is UseMemo Hook ?(Implementation)
// Ans-- The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.

// import { useState, useMemo } from "react";
// // Usage
// function App() {
//   // State for our counter
//   const [count, setCount] = useState(0);
//   // State to keep track of current word in array we want to show
//   const [wordIndex, setWordIndex] = useState(0);
//   // Words we can flip through and view letter count
//   const words = ["hey", "this", "is", "cool"];
//   const word = words[wordIndex];
//   // Returns number of letters in a word
//   // We make it slow by including a large and completely unnecessary loop
//   const computeLetterCount = (word) => {
//     let i = 0;
//     while (i < 1000000000) i++;
//     return word.length;
//   };
//   // Memoize computeLetterCount so it uses cached return value if input array ...
//   // ... values are the same as last time the function was run.
//   const letterCount = useMemo(() => computeLetterCount(word), [word]);
//   // This would result in lag when incrementing the counter because ...
//   // ... we'd have to wait for expensive function when re-rendering.
//   //const letterCount = computeLetterCount(word);
//   return (
//     <div style={{ padding: "15px" }}>
//       <h2>Compute number of letters (slow 🐌)</h2>
//       <p>
//         "{word}" has {letterCount} letters
//       </p>
//       <button
//         onClick={() => {
//           const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
//           setWordIndex(next);
//         }}
//       >
//         Next word
//       </button>
//       <h2>Increment a counter (fast ⚡️)</h2>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }


// Que-3.What is Context api
// Ans-- The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. (or) Context provides a way to pass data through the component tree without having to pass props down manually at every level.



// Que-4.What are React Life cycles Explain each one with Example
// Ans-- 1.Initialization: In this phase, the developer has to define the props and initial state of the component this is generally done in the constructor of the component. The following code snippet describes the initialization process.

// 2.Mounting: Mounting is the phase of the component lifecycle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time on the webpage. Now React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. The mounting phase consists of two such predefined functions as described below.

// i.componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.

// ii.componentDidMount() Function: Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time

// 3.React is a JS library that helps create Active web pages easily. Now active web pages are specific pages that behave according to their user. For example, let’s take the GeeksforGeeks {IDE} webpage, the webpage acts differently with each user. User A might write some code in C in the Light Theme while another User may write a Python code in the Dark Theme all at the same time. This dynamic behavior that partially depends upon the user itself makes the webpage an Active webpage. Now how can this be related to Updation? Updation is the phase where the states and props of a component are updated followed by some user events such as clicking, pressing a key on the keyboard, etc. The following are the descriptions of functions that are invoked at different points of Updation phase.

// i.componentWillReceiveProps() Function: This is a Props exclusive Function and is independent of States. This function is invoked before a mounted component gets its props reassigned. The function is passed the new set of Props which may or may not be identical to the original Props. Thus checking is a mandatory step in this regard. The following code snippet shows a sample use-case.

// ii.setState() Function: This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the state of a component. You may refer to this article for detailed information.

// iii.shouldComponentUpdate() Function: By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in the case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

// iv.componentWillUpdate() Function: As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

// v.componentDidUpdate() Function: Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.

// 4. Unmounting: This is the final phase of the lifecycle of the component that is the phase of unmounting the component              from the DOM. The following function is the sole member of this phase.

// i.componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle


// Que-5.What is Props Drilling Concept ?What is State Uplifting ?
// Ans-- Props Drilling-- It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.

//     State Uplifting-- When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.



// Que-6.Difference between useEffect and useContext ?
// Ans-- useEffect--
// It allows us to implement all of the lifecycle hooks from within a single function API. // this will run when the component mounts and anytime the stateful data changes React.useEffect(() => { alert('Hey, Nads here!'); });

// // this will run, when the component is first initialized React.useEffect(() => { alert('Hey, Nads here!'); }, []);

// // this will run only when count state changes React.useEffect(() => { fetch('nads').then(() => setLoaded(true)); }, [count]);

// // this will run when the component is destroyed or before the component is removed from UI. React.useEffect(() => { alert('Hey, Nads here'); return () => alert('Goodbye Component'); });

// useContext-- This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props. It basically removes prop-drilling const ans = { right: '✅', wrong: '❌' }

// const AnsContext = createContext(ans);



// Que-7.Difference between callback and useCallback Hook ?
// Ans-- callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.

// The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action. Note: It is recommended to use lifecycle method rather than this callback function.

// setState({ name: 'John' }, 
// () => 
// console.log('The name has updated and component re-rendered'))
