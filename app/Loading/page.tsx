import { DotLoader } from "react-spinners";
import "react-spinners/dist/index.css"; 

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <DotLoader loading={true} color="#000" size={70} />
    </div>
  );
}
