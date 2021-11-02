
import { AlertProvider } from "../Alert/AlertProvider";
import { Alert } from "../Alert/Alert";
import { Main } from "../Main/Main";

export function App() {

  return (
    <AlertProvider>
      <div className="container">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

