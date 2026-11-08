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
        </div>
    )
}