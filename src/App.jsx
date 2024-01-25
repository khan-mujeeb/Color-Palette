
import { BrowserRouter, Route } from "react-router-dom"

export default function App() {

    return (
        <div className=" w-screen h-screen box-border overflow-x-hidden">
            <BrowserRouter>
                <Route path="/" component={Home} />
            </BrowserRouter>
        </div>
    )
}
