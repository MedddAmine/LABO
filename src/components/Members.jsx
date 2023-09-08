import React from 'react'
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <section className="max-w-[1200px] mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Membre de direction</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-28 justify-center">
        {Post()}
        {Post()}
        {Post()}

      </div>
    </section>
  )
}

export default Members


function Post() {
    return (
      <div className="item justify-center text-center">
        <div className="images flex justify-center">
          <Link href={"/"}>
            <a>
              <img
                src={"/images/img1.jpg"}
                className="rounded-2xl"
                width={200}
                height={200}
              />
            </a>
          </Link>
        </div>
        <div className="info flex  flex-col py-4 ">
          <div className="cat">
            <Link href={"/"}>
              <a className="text-gray-800 hover:text-gray-600">Mohamed Amine</a>
            </Link>
          </div>
          <div className="title ">
            <Link href={"/"}>
              <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
                Directeur
              </a>
            </Link>
          </div>
          
        </div>
      </div>
    );
  }