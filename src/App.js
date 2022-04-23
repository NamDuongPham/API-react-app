import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ExampleLayout from "./components/ExampleLayout";
import LearningDataBinding from "./components/LearningDataBinding";
import ExampleShowRoom from "./components/ExampleShowRoom";
import ShoppingCart from "./components/ShoppingCart";
import GlassStore from "./components/GlassStore"
import ShoesStore from"./components/ShoesStore"
import DemoRedux from "./components/DemoRedux/DemoRedux";
import AppXucXac from "./components/AppXucXac";
// JSX : html + js
function App() {
  return (
    // <div className="App">
    //   <Header></Header>
    //   <div className="main">
    //     <Navigation></Navigation>
    //     <section class="content">
    //       <h3>Content Component</h3>
    //     </section>
    //   </div>
    //   <footer class="footer">
    //     <h3>Footer Component</h3>
    //   </footer>
    // </div>
    <div>
      {/* <LearningDataBinding></LearningDataBinding>
      <ExampleLayout></ExampleLayout>
      <ExampleShowRoom />
      <ShoppingCart /> */}
      <GlassStore />
      {/* <ShoesStore></ShoesStore> */}
      {/* <DemoRedux></DemoRedux>
      <AppXucXac></AppXucXac> */}
    </div>
  );
}

export default App;
