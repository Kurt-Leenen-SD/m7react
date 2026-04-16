import { useState } from "react";

export function GetCat() {
    const [catData, setCats] = useState(null);
    
    const url = "https://mediacollege.dev/api/cats/";

    if (catData === null) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCats(data);
            console.log(data);
        })

        return(
            <div>cats</div>
        )
    } else {
        return(
            <div className="cat">{catData[1].name}</div>
        )
    }
}