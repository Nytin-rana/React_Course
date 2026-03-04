
import { useParams } from "react-router"
function Params() {
    const {Id}=useParams()
  return (
    <div className="h-50 text-4xl text-orange-700 text-center">Params :{Id}</div>
  )
}
export default Params