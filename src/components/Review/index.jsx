import React, { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import styles from './styles.module.scss'

import { data } from '../../data'

export default function Review() {
  const [index, setIndex] = useState(0)
  const { name, img, role, testimony } = data[index]

  function checkNumber(number) {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1
    }
    return number
  }

  function incrementEmployeeCounter() {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  function decrementEmployeeCounter() {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const getRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length)

    if (randomNumber === index) {
      randomNumber = randomNumber + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  return (
    <>
      <section>
        <div className={styles.imgContainer}>
          <div className={styles.imgContent}>
            <FaQuoteRight color='#FFF' className={styles.quoteIcon} />
            <img src={img} alt={name} />
          </div>
        </div>

        <div className={styles.heading}>
          <h2>{name}</h2>
          <h6>{role}</h6>
        </div>

        <div className={styles.content}>
          <p>{testimony}</p>
        </div>

        <div className={styles.arrows}>
          <button type='button' onClick={() => incrementEmployeeCounter()}>
            <MdKeyboardArrowLeft color='#49A6E9' />
          </button>
          <button type='button' onClick={() => decrementEmployeeCounter()}>
            <MdKeyboardArrowRight color='#49A6E9' />
          </button>
        </div>

        <button
          type='button'
          className={styles.surpriseBtn}
          onClick={getRandomPerson}
        >
          Surprise me
        </button>
      </section>
    </>
  )
}
