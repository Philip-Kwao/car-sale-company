import React from 'react'

const ChooseUsCard = ({title,detail}) => {
  return (
        <div className="max-w-md min-h-[30vh] group duration-300 ease-in-out hover:bg-blue-700 mx-auto p-6 ">
            <h4 className="my-6 font-bold text-xl text-slate-500 group-hover:text-white">{title}</h4>
            <p className="text-slate-600 duration-1000 group-hover:text-white">{detail}</p>
        </div>
  )
}

export default ChooseUsCard