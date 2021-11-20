import React from 'react'
import Styles from '../styles/books.module.css'
import { useSession, signIn, signOut } from "next-auth/client"

export default function books() {
    const [session, loading] = useSession()


    if (session) {
      window.location.href="http://localhost:3000/welcomeUser"
      // return (
      //   <>
      //     Signed in as {session.user.email} <br />
      //     <button onClick={() => signOut()}>Sign out</button>
      //   </>
      // )
     
    }


    

     const signInHandler = () =>{

       signIn()

       

     }

    return (
        <div className={Styles.main}>
            <h2>Books</h2>
            <img className={Styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7XDBWFqS3cq4JrMKWBKNiMUJqdYA85H70g&usqp=CAU" alt="logo"/>
           
            
            
            <button className={Styles.btn} onClick={signInHandler}>Sign in</button>
            
        </div>
    )
}

