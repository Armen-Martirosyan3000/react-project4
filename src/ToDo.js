//տարրերի ցուցակ
function ToDo({ item, toggleItem, removeItem }) {
    return (
        //այստեղ պահպանվում է տարրերի(առաջադրանքների) դաշտը , ցուցակը
        <div key={item.id} className="item-todo1">
           {/* սրանով ապահովում է տարրերի վրա գիծ քաշելու հատկությունը */}
            <div 
                className={item.complete ? "item-text1 strike1" : "item-text1"}
                onClick={() => toggleItem(item.id)}
                >
                {item.value}
            </div>
             {/* այստեղ տարրերի ջնջման կոճակի աշխատանքն է իրականացվում */}
            <div className="item-delete1" onClick={() => removeItem(item.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo