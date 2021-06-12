import ProductCard from "../../helper/ProductCard"
import styles from "./Productcontent.module.css"

export default function ProductContent() {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
             <ProductCard id={1234} price={1200} name={"Rice and Fresh Stew"} imageSrc={"/img/rice-and-stew.JPG"} />
             <ProductCard id={9392} price={900} name={"Ewa Agoyin With Turkey"} imageSrc={"/img/Ewa-agoyin.JPG"} />
             <ProductCard id={932023} price={1750} name={"Boli with Titus Fish"} imageSrc={"/img/foodimage.JPG"} />
             <ProductCard id={2030} price={850} name={"Jollof Rice"} imageSrc={"/img/jollof-rice.JPG"} />
             <ProductCard id={939293} price={2100} name={"PepperSoup with GoatMeat"} imageSrc={"/img/pepprsoup.JPG"} />
             <ProductCard id={93932} price={700} name={"Pasta and Turkey"} imageSrc={"/img/spagandturkey.JPG"} />
             <ProductCard id={3448} price={900} name={"Ewa Agoyin With Turkey"} imageSrc={"/img/Ewa-agoyin.JPG"} />
             <ProductCard id={544} price={450} name={"Yam and Egg Sauce"} imageSrc={"/img/yamandegg.JPG"} />
             <ProductCard id={65542} price={2100} name={"PepperSoup with GoatMeat"} imageSrc={"/img/pepprsoup.JPG"} />
             <ProductCard id={62456} price={900} name={"Ewa Agoyin With Turkey"} imageSrc={"/img/Ewa-agoyin.JPG"} />
             <ProductCard id={7636} price={1200} name={"Rice and Fresh Stew"} imageSrc={"/img/rice-and-stew.JPG"} />
          </div>
        </div>
    )
}

