import HeaderComponent from "./FunctionComponents/ImportExportEg";
import PropsInFunction from "./FunctionComponents/UsingProps";
import SampleClassComponent from "./ClassComponents/SampleClassComponent";
import example from "./ClassComponents/example";
import  Counter from "./ClassComponents/Counter";
import SimpleClass from "./ClassComponents/SimpleClass";
import SimpleState from "./ClassComponents/SimpleState";
import RootComponent from "./ClassComponents/RootComponent";
import LifeCycleMethods from "./ClassComponents/LifeCycleMethods";
// import TodoComponent from "./ClassComponents/Todo/TodoComponent";
import TodoComponent from "./FunctionComponents/TodoApplication/TodoComponent.js";
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
// import ContactManager from "./ClassComponents/ContactManager/ContactManager.js";
import ContactManager1 from "./ClassComponents/ContactManager/ContactManager1.js";
import FormElements from "./ClassComponents/FormExamples/FormElements.js";
import LoginForm from "./ClassComponents/FormExamples/LoginForm.js";
import LeaderBoard from "./ClassComponents/ScoreBoard/LeaderBoard.js";
import Rank from "./ClassComponents/ScoreBoard/Rank.js";
import Age from "./ClassComponents/ScoreBoard/Age.js";
import Points from "./ClassComponents/ScoreBoard/Points.js";
import Name from "./ClassComponents/ScoreBoard/Name.js";
import NavBarComponent from "./ClassComponents/ScoreBoard/NavBarComponent.js";
import LoginPage from "./ClassComponents/NestedRoutes/LoginPage.js";
import UserPage from "./ClassComponents/NestedRoutes/UserPage.js";
import PageNotFound from "./ClassComponents/NestedRoutes/PageNotFound.js";
//import LoginPageFunction from "./ClassComponents/RouterHooks/LoginPage Function.js";
import DashBoardHooks from "./ClassComponents/RouterHooks/DashBoardHooks.js";
import PageNotFound1 from "./ClassComponents/RouterHooks/PageNotFound1.js";
import AdminDashboard from "./ClassComponents/TicketRaisingApplication/AdminDashBoard.js";
//import ParentComponent from "./FunctionComponents/ParentComponent.js";
import ToggleComponent from "./FunctionComponents/ToggleComponent.js";
import UseCaseOne from "./FunctionComponents/LCMWithHooks/UseCaseOne.js";
import DiscriptionPage from "./ClassComponents/TicketRaisingApplication/TicketsPageClass.js";
import TicketsPage from "./ClassComponents/TicketRaisingApplication/TicketsPageClass.js";
import UseCaseTwo from "./FunctionComponents/LCMWithHooks/UseCaseTwo.js";
import SignInPage from "./ClassComponents/TicketRaisingApplication/SignInPage.js";
import AdminDashBoardInOrder from "./ClassComponents/TicketRaisingApplication/AdminDashBoardInOrder.js";
import UseCaseThree from "./FunctionComponents/LCMWithHooks/UseCaseThree.js";
import ContactManager from "./FunctionComponents/ContactManagerApplication/ContactManager.js";
import HookConsumer from "./FunctionComponents/ConsumerComponent.js/HookConsumer.js";
import PageRoot from "./FunctionComponents/PageRoot.js";
import JsonComponent from "./FunctionComponents/ConsumerComponent.js/JsonComponent.js";
import ArrayConsumer from "./FunctionComponents/ConsumerComponent.js/ArrayConsumer.js";
import AlgoliaComponent from "./FunctionComponents/ConsumerComponent.js/AlgoliaComponent.js";
import ParentComponent from "./FunctionComponents/Optimization-memo/ParentComponent.js";
import CounterApp from "./FunctionComponents/CounterApp.js";
import ContextProvider from "./FunctionComponents/SimpleContext/ContextProvider.js";
import AuthProvider from "./FunctionComponents/AuthContext/AuthProvider.js";
import ContactProvider from "./FunctionComponents/ContactContext/ContactProvider.js";
import {BrowserRouter,Link,NavLink,Route,Routes} from 'react-router-dom';
import AdminLoginPageFunction from "./ClassComponents/TicketRaisingApplication/AdminLoginPageFunction.js";
import { useState } from "react";
import TicketsFunction from "./ClassComponents/TicketRaisingApplication/TicketsFunction.js";
import SignInPageFunction from "./ClassComponents/TicketRaisingApplication/SignInPageFunction.js";
import LoginPageFunction from "./ClassComponents/TicketRaisingApplication/LoginPageFunction.js";
import UserSignInPageFunction from "./ClassComponents/TicketRaisingApplication/UserSignInPageFunction.js";
import UserLoginPageFunction from "./ClassComponents/TicketRaisingApplication/UserLoginPageFunction.js";
import UserTicketFunction from "./ClassComponents/TicketRaisingApplication/UserTicketFunction.js";
import ViewTickets from "./ClassComponents/TicketRaisingApplication/ViewTickets.js";
import AuthContext from "./ClassComponents/TicketRaisingApplication/AuthContext.js";
import AdminDashBoardFunction from "./ClassComponents/TicketRaisingApplication/AdminDashBoardFunction.js";
import RiseTicket from "./ClassComponents/TicketRaisingApplication/RiseTicket.js";
import AdminDashBoardInOrderFunction from "./ClassComponents/TicketRaisingApplication/AdminDashBoardInOrderFunction.js";
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
  const [globalUsername,setUsername]=useState("")
  return(
    <>
    {/* <h1>Home Page</h1> */}
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
  {/* <ContactManager1></ContactManager1> */}
  {/* <FormElements></FormElements> */}
    {/* <BrowserRouter>
    <Link to="todoapp">todoapp</Link>
    <Routes>
      <Route path="todoapp" element={<LoginForm></LoginForm>}></Route>
      </Routes>
      // </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<LeaderBoard></LeaderBoard>}></Route>
      <Route path="/rank" element={<Rank></Rank>}></Route>
      <Route path="/age" element={<Age></Age>}></Route>
      <Route path="/points" element={<Points></Points>}></Route>
      <Route path="/name" element={<Name></Name>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Link to="/user"></Link>
      <Link to="/login"></Link>
      <Routes>
        <Route path="user" element={<UserPage></UserPage>}>
        <Route path="login" element={<LoginPage></LoginPage>}>
        </Route></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Link to="/"></Link>
      <Link to="dashboard/:username/:role"></Link>
      <Link to="/pagenotfound"></Link>
      <Routes>
        <Route path="/" element={<LoginPageFunction></LoginPageFunction>}></Route>
        <Route path="dashboard/:username/:role" element={<DashBoardHooks></DashBoardHooks>}></Route>
        <Route path="/pagenotfound" element={<PageNotFound1></PageNotFound1>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <NavLink to="/"></NavLink>
      <NavLink to="/rank">
      {
        ({isActive})=>
        (
          <button className={isActive?'activeStatus':'inActiveStatus'}>Rank</button>
        )
      }</NavLink>
      <NavLink to="/points">
      {
        ({isActive})=>
        (
          <button className={isActive?'activeStatus':'inActiveStatus'}>Points</button>
        )
      }</NavLink>
      <NavLink to="/age">
      {
        ({isActive})=>
        (
          <button className={isActive?'activeStatus':'inActiveStatus'}>Age</button>
        )
      }</NavLink>
      <NavLink to="/name">
      {
        ({isActive})=>
        (
          <button className={isActive?'activeStatus':'inActiveStatus'}>Points</button>
        )
      }</NavLink>
      <Routes>
        <Route path="/" element={<LeaderBoard></LeaderBoard>}></Route>
        <Route path="/rank" element={<Rank></Rank>}></Route>
      <Route path="/age" element={<Age></Age>}></Route>
      <Route path="/points" element={<Points></Points>}></Route>
      <Route path="/name" element={<Name></Name>}></Route>

      </Routes>
      </BrowserRouter>
       */}
       <BrowserRouter>
       <AuthContext.Provider value={{globalUsername:globalUsername,setUsername:setUsername}}>
       {/* <Link to="/"></Link>
       <Link to="/adminLogin"></Link>
       <Link to="/adminSignInPage"></Link>
       <Link to="/userLogin"></Link>
       <Link to="/userSignIn"></Link>
       <Link to="/adminDashboard"></Link>
       <Link to="adminDashboardInOrder"></Link>
       <Link to="/tickets"></Link>
       <Link to="/userTicket"></Link>
       <Link to="/viewTicket"></Link> */}
       <Routes>
        <Route path="/" element={<LoginPageFunction></LoginPageFunction>}></Route>
        <Route path="/adminLogin" element={<AdminLoginPageFunction></AdminLoginPageFunction>}></Route>
        <Route path="/adminSignInPage" element={<SignInPageFunction></SignInPageFunction>}></Route>
        <Route path="/userLogin" element={<UserLoginPageFunction></UserLoginPageFunction>}></Route>
        <Route path="/userSignIn" element={<UserSignInPageFunction></UserSignInPageFunction>}></Route>
        <Route path="/adminDashboard" element={<AdminDashBoardFunction></AdminDashBoardFunction>}></Route>
        <Route path="/adminDashboardInOrder" element={<AdminDashBoardInOrderFunction></AdminDashBoardInOrderFunction>}></Route>
        <Route path="/tickets" element={<TicketsFunction></TicketsFunction>}></Route>
        <Route path="/userTicket" element={<UserTicketFunction></UserTicketFunction>}></Route>
        <Route path="/viewTicket" element={<ViewTickets></ViewTickets>}></Route>
        <Route path="/riseTicket" element={<RiseTicket></RiseTicket>}></Route>
        </Routes>
        </AuthContext.Provider>
        </BrowserRouter>
      {/* <ParentComponent></ParentComponent> */}
      {/* <ToggleComponent></ToggleComponent> */}
      {/* <UseCaseOne></UseCaseOne> */}
      {/* <UseCaseTwo></UseCaseTwo> */}
      {/* <UseCaseThree></UseCaseThree> */}
      {/* <ContactManager></ContactManager> */}
      {/* <HookConsumer></HookConsumer> */}
      {/* <PageRoot></PageRoot> */}
      {/* <TodoComponent></TodoComponent> */}
      {/* <JsonComponent></JsonComponent> */}
      {/* <ArrayConsumer></ArrayConsumer> */}
      {/* <AlgoliaComponent></AlgoliaComponent> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <TodoComponent></TodoComponent> */}
      {/* <CounterApp></CounterApp> */}
      {/* <ContextProvider></ContextProvider> */}
      {/* <AuthProvider></AuthProvider> */}
      {/* <ContextProvider></ContextProvider> */}
      {/* <ContactProvider></ContactProvider> */}

    </>
  )
}
export default App;