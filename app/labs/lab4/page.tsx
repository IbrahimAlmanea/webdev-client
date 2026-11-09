"use client"
import "./index.css"
import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import CounterBroken from "./CounterBroken"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ProfileForm from "./profile/ProfileForm"
import ParentStateComponent from "./ParentStateComponent"
import PropDrilling from "./PropDrilling"
import UrlEncoding from "./UrlEncoding"
import ContextExamples from "./context/ContextExamples"
import ReactContextTodoList from "./context/ReactContextTodoList"
import ContextProfileForm from "./context/ContextProfileForm"
import ZustandExamples from "./zustand/ZustandExamples"
import ZustandProfileForm from "./zustand/ZustandProfileForm"
import ReduxExamples from "./redux/ReduxExamples"
import Effect from "./Effect"
import HooksPage from "./hooks/page"



export default function(){
    const sayHello = (hello: string) => {
        alert(hello);
    };

    const sayMyName = () => {
        alert("Ibrahim");
    };

    const sampleFromParent = () => {
        alert("Sample from parent");
    };

    return(
        <div>
            <h2>Lab4</h2> <hr /> <br /><br />
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions myFunction={sayMyName} theFunction={sayHello} theOtherFunction={sampleFromParent} message="Hello from Lab 4"/>
            <CounterBroken/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ProfileForm/>
            <ParentStateComponent/>
            <PropDrilling/>
            <UrlEncoding/>
            <ContextExamples/>
            <ReactContextTodoList/>
            <ContextProfileForm/>
            <ZustandExamples/>
            <ZustandProfileForm/>
            <ReduxExamples/>
            <Effect/>
            <HooksPage/>
        </div>
    )
}