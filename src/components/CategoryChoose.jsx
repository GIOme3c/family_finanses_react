import { useEffect, useState } from "react"

import styles from './categoryChoose.module.scss'

const categoriesMock = {
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
  
}


export default function CategoryChoose({bigCategoryId, changeCategory}) {
  const [categories, setCategories] = useState(categoriesMock);

  // const chosenCategoryName = categories[Object.keys(categories)[bigCategoryId-1]][0].name
  const chosenCategoryId = categories[Object.keys(categories)[bigCategoryId-1]][0].id

  const [chosenCategory, setChosenCategory] = useState(chosenCategoryId)

  const [isOpen, setIsOpen] = useState(false);

  

  useEffect(() => {
    changeCategory(chosenCategory)
  }, [chosenCategory])

  useEffect(() => {
    const chosenCategoryId = categories[Object.keys(categories)[bigCategoryId-1]][0].id
    setChosenCategory(chosenCategoryId)
  },[bigCategoryId])

  // console.log(chosenCategory, categories[Object.keys(categories)[bigCategoryId-1]])
  const chosenCategoryName = categories[Object.keys(categories)[bigCategoryId-1]].filter(category => category.id === chosenCategory)?.[0]?.name


  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const changeLocalCategory = (e, id) => {
    setChosenCategory(id)
    changeCategory(id)
  }

  const showBigCategoryBlock = (bigCategory) => {
    return (
    <div>
      <div className={styles.bigCategoryName}>{bigCategory}</div>

      <div className={styles.categoriesContainer}>
        {categoriesMock[bigCategory].map(category => {
          return (
            <div className={styles.smallCategoryContainer} onClick={(e) => changeLocalCategory(e,category.id)}>
              <span>icon</span>
              <span className={styles.smallCategoryName}>{category.name}</span>
            </div>
          )
        })}
      </div>
    </div>
    )
  }

  // const categoryChooseButton = <div onClick={open}>{categories.other[0].name}</div>
  const categoryChooseButton = <div onClick={open}>{chosenCategoryName}</div>


  const categoryChooseJSX = 
  <div className={styles.categoryChooseContainer}>
    <div>
      <span onClick={close}>x</span><span>categories</span><span>+</span>
    </div>

    {/* {Object.keys(categories).map(bigCategory => {
      return showBigCategoryBlock(bigCategory)
    })
    } */}
    {bigCategoryId === '1' ? showBigCategoryBlock('income') :
    bigCategoryId === '2' ? showBigCategoryBlock('housing') :
    showBigCategoryBlock('other')}
    
  </div>



  return (
    <div>
      {isOpen ? categoryChooseJSX : categoryChooseButton}
    </div>
  )
}