import React from 'react'
import Cards from '../Cards/Cards.js'
import styles from "./Home.module.css"



function Home(props) {

  const category = props.match.params

  return (
    <div className={styles.cardsContainer}> 
      <Cards filter={category}/>
    </div>
  )
}

export default Home