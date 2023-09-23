import React from 'react'
import {DeleteFilled} from '@ant-design/icons';
import { useCart, useDispatchCart } from "../../components/ContextReducer";
import axios from "axios";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-white'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async() => {
    for (let i = 0; i < data.length; i++) {
      await axios.put(`http://localhost:5000/books/decrease?id=${data[i].id}`)
    }
    dispatch({ type: "DROP" })
  }

  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Author</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{book.name}</td>
                <td >{book.author}</td>
                <td ><button type="button" className="btn p-0"><DeleteFilled onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}