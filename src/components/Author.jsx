import { Link } from "react-router-dom";

export default function Author() {
  return (
    <div className="author flex py-5">
        <img src={"/images/img1.jpg"} width={60} height={60} className="rounded-full"/>       
        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">Flying High</a></Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
        </div>
    </div>
  )
}