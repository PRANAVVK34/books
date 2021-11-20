import React from 'react'
import Link from 'next/link'
import Styles from '../../styles/welUser.module.css'

export default function welcomeUser() {

    const books = 
    [
        {
            name:"book 1",
            price:"10"
        },
        {
            name:"book 2",
            price:"20"
        },
        {
            name:"book 3",
            price:"30"
        }
    ]

    return (
        <div className={Styles.main}>
          
            <h2>Welcome User</h2>
            <Link href="/checkout">
            <a className={Styles.cart} >Cart<span>1</span></a>
            </Link>
            

           
            <div className={Styles.box}>
            {books.map((book, index) => {
              return (
                <>
                  <ul className={Styles.boxList}>
                    <li >
                    <h5>{book.name}</h5>
                    <p>price : {book.price}</p>
                    <button className={Styles.btn}>Add</button>
                    </li>
                 
                  </ul>
                </>
              );
            })}
          </div>
           

        </div>
    )
}
