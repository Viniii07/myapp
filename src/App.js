import React from "react";
import { Add } from "./Components/Add";
import { Parent } from "./Components/ChildToParent";
import { Parent2 } from "./Components/ChildToParent2";
import { WithContext } from "./Components/ContextAPI/WithContext";
import { WithContext2 } from "./Components/ContextAPI/WithContext2";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import { DropDown } from "./Components/ListAndKeys/DropDown";
import { Header } from "./Components/ListAndKeys/Header";
import { OrderedList } from "./Components/ListAndKeys/OrderedList";
import { TableList } from "./Components/ListAndKeys/TableList";
import { UnorderedList } from "./Components/ListAndKeys/UnorderedList";
import {PassingData} from "./Components/PassingData";
import { PassingData2 } from "./Components/PassingData2";
import { OrderedListFlower } from "./Components/ReausableComponents/OrderedListFlower";
import { OrderedListColor } from "./Components/ReausableComponents/OrderedListColor";
import { OrderedListSubject } from "./Components/ReausableComponents/OrderedListSubject";
import { WithoutContext } from "./Components/WithoutContext";
import { OrderedListReausable } from "./Components/ReausableComponents/OrderedListReausable";
import { DropDownReausable } from "./Components/ReausableComponents/DropDown";
import { Registration } from "./Components/ReausableComponents/Registration";
import { TableReausable } from "./Components/ReausableComponents/TableReausable";
import LifeCycleMethodMouting from "./Components/LifeCycleMethods/LifeCycleMethodMouting";
import LifeCycleMethodUpdating from "./Components/LifeCycleMethods/LifeCycleMethodUpdating";
import LifeCycleMethodUnmounting from "./Components/LifeCycleMethods/LifeCycleMethodUnmounting";
import ButtonComp from "./Components/HOC/ButtonComp";
import HoverComp from "./Components/HOC/HoverComp";
import ParentComp from "./Components/HOC/ParentComp";
import { ParentCompF } from "./Components/ContextAPI/CustomHooks/ParentCompF";
import AjaxLifeCycleMethod from "./Components/LifeCycleMethods/AjaxLifeCycleMethod";
import { LifeCycleMethodF } from "./Components/LifeCycleMethods/LifeCycleMethodF";
import { LifeCycleMethodUp } from "./Components/LifeCycleMethods/LifeCycleMethodUp";
import { ExampleUseEffect } from "./Components/LifeCycleMethods/ExampleUseEffect";

export const App = () => {
    return (
        <div>
            {/* <Count />   */}
            {/* <CountF />  */}
            {/* <PassingData />  */}
            {/* <PassingData2 />  */}
            {/* <Parent />  */}
            <Parent2 /> 
            {/* <WithoutContext /> */}
            {/* <WithContext />  */}
            {/* <WithContext2 />  */}
            {/* <Add /> */}
            {/* <OrderedList /> */}
            {/* <UnorderedList /> */}
            {/* <DropDown /> */}
            {/* <Header /> */} 
            {/* <TableList /> */}
            {/* <OrderedListColor />
            <OrderedListFlower />
            <OrderedListSubject />
            <OrderedListReausable data={["red","blue","yellow"]} />
            <OrderedListReausable data={["rose","lily","jasmin"]} />
            <OrderedListReausable data={["react","angular","vuejs","nodejs"]} />
            <OrderedListReausable  />
            <DropDownReausable data={["India","Pak","Russia","US","China"]}/>
            <DropDownReausable data={["react","angular","vuejs","nodejs"]}/>
            <Registration />
            <TableReausable 
            headers={["Name","Loc","runs"]} 
            data={[{name:"sachin",loc:"mumbai",runs:10},
            {name:"dhoni",loc:"ranchi",runs:20}]}
            keys={["name","loc","runs"]}/>
            <TableReausable 
            headers={["Color","Flower"]} 
            data={[{color:"pink",flower:"rose"},
            {color:"white",flower:"jasmin"}]}
            keys={["color","flower"]}/> */}
            {/* <LifeCycleMethodMouting name="sachin"/> */}
            {/* <LifeCycleMethodUpdating /> */}
            {/* <LifeCycleMethodUnmounting /> */}
            {/* <ParentComp />  */}
            {/* <ParentCompF /> */}
            {/* <AjaxLifeCycleMethod/> */}
            {/* <LifeCycleMethodF/> */}
            {/* <LifeCycleMethodUp/> */}
            {/* <ExampleUseEffect/> */}
        </div>
    );
};