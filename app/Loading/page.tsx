import { DotLoader } from "react-spinners";
import "react-spinners/dist/index.css"; 
<<<<<<< Tabnine <<<<<<<
/**//+
 * A loading component that displays a centered spinner using the DotLoader from react-spinners.//+
 *//+
 * @returns {JSX.Element} - A JSX element representing the loading component.//+
 *///+
export default function Loading() {//+
  return (//+
    <div className="h-screen flex justify-center items-center w-full">//+
      <DotLoader loading={true} color="#000" size={70} />//+
    </div>//+
  );//+
}//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"e517ef3c-ef3e-4fe0-bc41-fd64a5ef7763","source":"instruct"}

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <DotLoader loading={true} color="#000" size={70} />
    </div>
  );
}
