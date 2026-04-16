import styles from './Top10.module.css'
import { Top10Item } from './Top10Item'
export default function Top10(){
    let top10 = [
        { title: "The Final Empire", author: "Brandon Sanderson" },
        { title: "The Way of Kings", author: "Brandon Sanderson" },
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien" },
        { title: "Saga", author: "Brian K Vaughan" },
        { title: "52", author: "Geoff Johns, Grant Morrison, Greg rucka, Mark Waid, Keith Giffen" },
        { title: "Bad As I Wanna Be", author: "Dennis Rodman, Tim Keown" },
        { title: "Kono Subarashii Sekai ni Shukufuku wo! Oh! My Useless Goddess!", author: "Natsume Akatsuki" },
        { title: "So I'm a Spider, So What?", author: "Okina Baba" }
    ];

    return (
        <section className={styles.top10}>
            <h1>Top 10 Favorite Books</h1>
            <ol className={styles.list}>
                {top10.map((book, i) => {
                    return <Top10Item title={book.title} author={book.author} number={i + 1} />
                })}
            </ol>
        </section>
    )
}