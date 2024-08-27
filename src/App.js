import HeaderComponent from "./FunctionComponents/ImportExportEg";
import PropsInFunction from "./FunctionComponents/UsingProps";
import SampleClassComponent from "./ClassComponents/SampleClassComponent";
import example from "./ClassComponents/example";
import  Counter from "./ClassComponents/Counter";
import SimpleClass from "./ClassComponents/SimpleClass";
import SimpleState from "./ClassComponents/SimpleState";
import RootComponent from "./ClassComponents/RootComponent";
import LifeCycleMethods from "./ClassComponents/LifeCycleMethods";
import TodoComponent from "./ClassComponents/Todo/TodoComponent";
import RootComponent1 from "./ClassComponents/SignInPage/RootComponent/RootComponent1";
import LifeCycleMethods1 from "./ClassComponents/LifeCycleMethods1";
import ComponentA from "./ClassComponents/Timer/ComponentA";
import ComponentB from "./ClassComponents/Timer/ComponentB";
import FormComponent from "./ClassComponents/FormComponent";
import data from "./ClassComponents/Todo1/data";
import TodoComponent1 from "./ClassComponents/Todo1/TodoComponent1";
import FilterClothingProduct from "./ClassComponents/WOHOC/FilterClothingProduct";
import clothing from "./ClassComponents/WOHOC/clothing";
import PureComponentEg from "./ClassComponents/PureComponentEg";
import FilterElectronicsProduct from "./ClassComponents/WOHOC/FilterElectronicsProduct";
import productDetails from "./ClassComponents/WOHOC/electronics";
import FilterClothingProduct1 from "./ClassComponents/WHOC/FilterClothingProduct1";
import FilterElectronicProduct1 from "./ClassComponents/WHOC/FilterElectronicProduct1";
import StylingComponent from "./ClassComponents/StylingComponent";
import NormalComponent from "./ClassComponents/WHOCStyling/NormalComponent";
import SimpleAPICall from "./ClassComponents/APICalls/SimpleAPICall";
import LCMAPICall from "./ClassComponents/APICalls/LCMAPICalls";
import PlainComponent from "./ClassComponents/WHOCAPICalls/PlainComponent.js";
import ContactManager from "./ClassComponents/ContactManager/ContactManager.js";
import ContactManager1 from "./ClassComponents/ContactManager/ContactManager1.js";
// import clothing from "./ClassComponents/WOHOC/clothing";
// const data=[
//   {
//     name:"bharath",
//     id:1,
//     age:24,
//     role:"engineer",
//     status:false,
//     active:true
//   },
//   {
//     name:"Yasin",
//     id:2,
//     age:25,
//     role:"engineer",
//     status:true,
//     active:true
//   },
//   {
//     name:"datta",
//     id:3,
//     age:24,
//     role:"engineer",
//     status:false,
//     active:true
//   }
// ]
function App(){
  
  return(
    <>
    {/* <HeaderComponent></HeaderComponent>
   
    <PropsInFunction name="bharath"></PropsInFunction>
    <SampleClassComponent name="yasin" age="25" ></SampleClassComponent> */}
    {/* <example></example> */}
    {/* <Counter></Counter> */}
    {/* <SimpleClass></SimpleClass> */}
    {/* <SimpleState></SimpleState> */}
    {/* <RootComponent></RootComponent> */}
    {/* <LifeCycleMethods msg="sdfghjkxcvbnm sdfghj"></LifeCycleMethods> */}
    {/* <TodoComponent></TodoComponent> */}
    {/* <RootComponent1></RootComponent1> */}
    {/* <LifeCycleMethods1 massage="hello"></LifeCycleMethods1> */}
    {/* <ComponentA></ComponentA> */}
    {/* <ComponentB></ComponentB> */}
    {/* <FormComponent></FormComponent> */}
    {/* <TodoComponent1 data={data}></TodoComponent1> */}
    {/* <FilterClothingProduct data={clothing}></FilterClothingProduct> */}
   {/* <PureComponentEg></PureComponentEg> */}
  {/* <FilterElectronicsProduct data={productDetails}></FilterElectronicsProduct> */}
  {/* <FilterClothingProduct1 data={clothing}></FilterClothingProduct1> */}
  {/* <FilterElectronicProduct1 data={productDetails}></FilterElectronicProduct1> */}
  {/* <StylingComponent></StylingComponent> */}
  {/* <NormalComponent fname="bharath" tech={["react","nodejs"]}></NormalComponent> */}
  {/* <SimpleAPICall></SimpleAPICall> */}
  {/* <LCMAPICall></LCMAPICall> */}
  {/* <PlainComponent endpoint="http://jsonplaceholder.typicode.com/users"></PlainComponent> */}
  {/* <ContactManager></ContactManager> */}
  <ContactManager1></ContactManager1>
    </>
  )
}
export default App;