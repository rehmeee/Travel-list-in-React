import Form from "./components/Form";
import Logo from "./components/Logo";
import PackgingList from "./components/PackgingList";
import Stats from "./components/Stats";

export default function App(){
    return <div className="app">
      <Logo/>
      <Form/>
      <PackgingList/>
      <Stats/>
    </div>
}
