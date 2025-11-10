import Cards from './Cards'

import type { CardProps } from '../types/CardType'
import { data } from '../data/data'
import type React from 'react'
import { useState } from 'react'

const Filter = () => {
    const [listData, setListData] = useState<CardProps[]>(data)

    const filterCategory = (event: React.MouseEvent) => {
        let btnTextContent: string = ''
        const button = (event.target as Element).closest(
            'button'
        ) as HTMLButtonElement | null

        if (button) btnTextContent = button.textContent?.trim() ?? ''

        button?.parentElement?.childNodes.forEach(btn => {
            if (btn.textContent == btnTextContent) {
                if (btn instanceof Element)
                    btn.className = 'bg-orangeBG !text-white dark:!bg-orangeBG'
            } else {
                if (btn instanceof Element) btn.className = ''
            }
        })

        switch (btnTextContent.toLowerCase()) {
            case 'all':
                setListData(data)

                break
            case 'active':
                setListData(data.filter(dt => dt.isActive))
                break

            case 'inactive':
                setListData(data.filter(dt => !dt.isActive))
                break
            default:
                console.error('Wrong option!')
                break
        }
    }

    const removeItem = (itemName: string): void => {
        const newList = listData.filter(dt => dt.name != itemName)
        setListData(newList)
    }

    return (
        <section className="w-[90%] mx-auto mt-10 xl:w-[1139.39px]">
            <div className="md:flex md:justify-between md:items-center ">
                <h1>Extensions List</h1>

                <ul className="filters" onClick={filterCategory}>
                    <button>
                        <li>All</li>
                    </button>
                    <button>
                        <li>Active</li>
                    </button>
                    <button>
                        <li>Inactive</li>
                    </button>
                </ul>
            </div>

            <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
                {listData.map((items: CardProps) => (
                    <Cards
                        key={items.name}
                        {...items}
                        removeItem={removeItem}
                    />
                ))}
            </div>
        </section>
    )
}

export default Filter
