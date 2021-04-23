import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import styles from './styles.module.scss'

export default function Review() {
  return (
    <section>
      <div className={styles.imgContainer}>
        <div className={styles.imgContent}>
          <FaQuoteRight color='#FFF' className={styles.quoteIcon} />
          <img
            src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
            alt=''
          />
        </div>
      </div>

      <div className={styles.heading}>
        <h2>bill anderson</h2>
        <h6>the boss</h6>
      </div>

      <div className={styles.content}>
        <p>
          Edison bulb put a bird on it humblebrag, marfa pok pok heirloom
          fashion axe cray stumptown venmo actually seitan. VHS farm-to-table
          schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby
          chic.
        </p>
      </div>

      <div className={styles.arrows}>
        <button type='button'>
          <MdKeyboardArrowLeft color='#49A6E9' />
        </button>
        <button type='button'>
          <MdKeyboardArrowRight color='#49A6E9' />
        </button>
      </div>

      <button type='button' className={styles.surpriseBtn}>
        Surprise me
      </button>
    </section>
  )
}
