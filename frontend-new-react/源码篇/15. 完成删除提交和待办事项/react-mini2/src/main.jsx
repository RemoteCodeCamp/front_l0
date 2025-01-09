// 引入 React 原生库
// import ReactDOM from "react-dom/client";

// 引入我们自己的库
import ReactDOM from "./lib/react-dom/ReactDOM";

// import App from "./App.jsx";
import TodoList from "./TodoList.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App id="testId" />);
root.render(<TodoList />);

// function test() {}

// root.render(
//   <div id="oDiv" className="test" onChange={test}>
//     <ul>
//       <li>苹果</li>
//       <li>香蕉</li>
//       <li>西瓜</li>
//     </ul>
//     <p>哈哈哈哈</p>
//     {/* 1111 */}
//   </div>
// );

// root.render(1111);

