import { useState } from "react"

import styles from './categoryChoose.module.scss'

const categoriesMock = {
  housing: [
    {
      id: 1,
      name: 'rent',
      icon: '',
    },
    {
      id: 2,
      name: 'internet',
    },
    {
      id: 3,
      name: 'telephone',
    },
    {
      id: 4,
      name: 'electricity',
    },
    {
      id: 5,
      name: 'drink water',
    },
    {
      id: 6,
      name: 'water',
    },
    {
      id: 7,
      name: 'communalka',
    },


  ],
  other: [
    {
      id: 8,
      name: 'food',
    },
    {
      id: 9,
      name: 'pregnancy',
    },
    {
      id: 10,
      name: 'car',
    },

  ],
  income: [
    {
      id: 11,
      name: 'salary',
    },
    {
      id: 12,
      name: 'child benefit',
    },
  ],
}


export default function CategoryChoose({changeCategory}) {

  const [categories, setCategories] = useState(categoriesMock);
  const [choosenCategory, setChoosenCategory] = useState(categories.other[0].id)

  const [isOpen, setIsOpen] = useState(false);


  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const showBigCategoryBlock = (bigCategory) => {
    return (
    <div>
      <div className={styles.bigCategoryName}>{bigCategory}</div>

      <div className={styles.categoriesContainer}>
        {categoriesMock[bigCategory].map(category => {
          return (
            <div className={styles.smallCategoryContainer}>
              <span>icon</span>
              <span className={styles.smallCategoryName}>{category.name}</span>
            </div>
          )
        })}
      </div>
    </div>
    )
  }

  const categoryChooseButton = <div onClick={open}>{categories.other[0].name}</div>

  const categoryChooseJSX = 
  <div className={styles.categoryChooseContainer}>
    <div>
      <span onClick={close}>x</span><span>categories</span><span>+</span>
    </div>
    {Object.keys(categories).map(bigCategory => {
      return showBigCategoryBlock(bigCategory)
    })
    }
  </div>



  return (
    <div>
      {isOpen ? categoryChooseJSX : categoryChooseButton}
    </div>
  )
}