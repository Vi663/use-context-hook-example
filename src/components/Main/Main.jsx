import { useAlertToggle } from "../Alert/AlertProvider";
export function Main() {
  const toggle = useAlertToggle()
  return (
    <div>
      <h1>useContext</h1>
      <button onClick={toggle} className={'btn btn-success'}>Show alert</button>
    </div>
  )
}