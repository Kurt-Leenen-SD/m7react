import Istyle from './Cookie.module.css'
import Cstyle from './Container.module.css'
import Ustyle from './Upgrade.module.css'
import cookie from './assets/choco_cookie.png'
import { useState } from 'react'

export function CookieClicker(){
    const [cookies, setCookies] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    const [cookiePile, setCookiePile] = useState(0);
    
    function fibonacci(n) {
        if (n < 2) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    function purchaseItem(setitem, baseprice, owned){
        const price = baseprice + fibonacci(owned)
        if (cookies >= price) {
            setitem(owned + 1);
            setCookies(cookies - price);
        }
    }

    return(
        <div className={Cstyle.Container}>
            <div className={Cstyle.Cookie_Container}>
                <h1>{cookies} Cookies</h1>
                <button className={Istyle.Cookie_Button} onClick={() => setCookies(cookies+(1*grandmas)+(10*cookiePile)+1)}>
                    <img src={cookie} alt="Cookie Button" className={Istyle.Cookie_Image} draggable={false}/>
                </button>
            </div>
            <div className={Cstyle.Img_Container}>
                <div className={Cstyle.Img_Layer}>

                </div>
            </div>
            <div className={Cstyle.Upgrade_Container}>
                <h2 className="Upgrade_Title">Upgrades</h2>
                <div className="Upgrade_List">
                    <div className={Ustyle.Grandma_Container}>
                        <label>Grandmas: {grandmas} </label>
                        <button className={Ustyle.upgrade} onClick={()=>purchaseItem(setGrandmas, 10, grandmas)}>Buy grandma: {10+ fibonacci(grandmas)}</button>
                    </div>
                    <div className={Ustyle.Pile_Container}>
                        <label>Cookie Pile: {cookiePile} </label>
                        <button className={Ustyle.upgrade} onClick={()=>purchaseItem(setCookiePile, 250, cookiePile)}>Buy cookie pile: {250+ fibonacci(cookiePile)}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
