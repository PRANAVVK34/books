import React from 'react'
import Styles from '../../styles/welUser.module.css'

export default function index() {

    const books =[
        {
            name:"book 1",
            price:"10"
        },
        {
            name:"book 2",
            price:"20"
        },
    ]

    return (
        <div 
        style={{display:"flex",flexDirection:"column", 
        alignItems:"center",
        minHeight:"50vh"
        ,minWidth:"50vw"
        }}>
            <h3 style={{textAlign:"left",margin:"10px"}}>Checkout</h3>
            <h4 style={{textAlign:"left",margin:"10px"}}>Details</h4>
            <table >
                <tr >
                    <td >{books[0].name}:</td>
                    <td>{books[0].price}</td>
                </tr>
                <tr>
                <td>{books[1].name}:</td>
                    <td>{books[1].price}</td>
                </tr>
                <tr>
                <td>Total :</td>
                <td>30</td>
             
                </tr>
            </table>

        <button 
        style={{margin:"20px",background:"green",color:"white",borderRadius:"30px",padding:"10px",border:"none",cursor:"pointer"}}
        >
            Pay with stripe
        
        </button>

        </div>
    )
}
