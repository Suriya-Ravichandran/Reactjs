import Evenhandling from "./core-concepts/eventhandling/Evenhandling"
import Simpleform from "./core-concepts/eventhandling/simpleform"
import Example1 from "./core-concepts/hooks/Example1"
import Component1, { Component2 } from "./core-concepts/hooks/Example2"
import JSXExample from "./core-concepts/jsx/JSXExample"
import Ifstatement from "./core-concepts/props/ifstatement"
import PropsExample from "./core-concepts/props/PropsExample"
import StateExample from "./core-concepts/state/StateExample"

function App() {
  return (
    <>
    {/* <JSXExample/>
    <PropsExample name="foo" department="Accountancy"/>
    <StateExample/>
    <Evenhandling/> */}
    {/* <Simpleform/> */}
    {/* <Ifstatement data={false}/> */}
    <Component1/>
    {/* <Component2/>     */}
    </>
  )
}

export default App
