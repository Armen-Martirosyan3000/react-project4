//list of items-տարրերի ցուցակ
function ToDo({ item, toggleItem, removeItem }) {
    return (
        //return a list of elements-այստեղ վերադարձնում է տարրերի(առաջադրանքների) ցուցակը
        <div key={item.id} className="item-todo1">
            {/* this provides the ability to draw a line on elements-սա ապահովում է տարրերի վրա գիծ քաշելու հատկությունը */}
            <div
                className={item.complete ? "item-text1 strike1" : "item-text1"}
                onClick={() => toggleItem(item.id)}
            >
                {item.value}
            </div>
            {/* X button-այստեղ տարրերի ջնջման կոճակի աշխատանքն է իրականացվում */}
            <div className="item-delete1" onClick={() => removeItem(item.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo