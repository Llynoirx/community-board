import './App.css';
import Store from './components/Store/Store'

const App = () => {
  const mango_mango = {
    img: '/images/mango_mango.png',
    name: 'Mango Mango Dessert',
    location: 'Squirrel Hill',
    url: 'https://www.mangomangodessert.com/'
  };
  const kyo_matcha = {
    img: '/images/kyo_matcha.png',
    name: 'Kyo Matcha',
    location: 'Squirrel Hill',
    url: 'https://www.kyotomatcha.us/'
  };
  const meccha_matcha = {
    img: '/images/meccha_matcha.png',
    name: 'Meccha Matcha',
    location: 'Squirrel Hill',
    url: 'https://www.mecchamatcha.com/'
  };
  const tous_les_jour = {
    img: '/images/tous_les_jour.png',
    name: 'Tous Les Jour',
    location: 'Shadyside',
    url: 'https://tljus.com/'
  };
  const sumi_cakery = {
    img: '/images/sumi_cakery.png',
    name: 'Sumi Cakery',
    location: 'Squirrel Hill',
    url: 'https://www.ubereats.com/store/sumis-cakery/qU59NYNMWWa_ZH4gnY1W6g?undefined=annual_upgrade&srsltid=AfmBOoqmnbYJhcLiOwWLKFuTW5dVSt3XNOcipvOxmMgFPhpHfPNMI3K6'
  };
  const pink_box = {
    img: '/images/pink_box.png',
    name: 'Pink Box',
    location: 'Squirrel Hill',
    url: 'https://www.pinkboxpgh.com/'
  };
  const prantl_bakery = {
    img: '/images/prantl_bakery.png',
    name: 'Prantl Bakery',
    location: 'Squirrel Hill; Shadyside',
    url: 'https://www.prantlsbakery.com/'
  };
  const tswirl = {
    img: '/images/tswirl.png',
    name: 'T-Swirl',
    location: 'Squirrel Hill',
    url: 'https://t-swirlcrepe.com//'
  };
  const crepe_parisiennes = {
    img: '/images/crepe_parisiennes.png',
    name: 'Crepe Parisiennes',
    location: 'Oakland',
    url: 'https://www.crepesparisiennes.com/'
  };
  const la_gourmandine = {
    img: '/images/la_gourmandine.png',
    name: 'La Gourmandine',
    location: 'Oakland',
    url: 'https://lagourmandinebakery.com/'
  };

  const gaby_et_jules = {
    img: '/images/gaby_et_jules.png',
    name: 'Gaby Et Jules',
    location: 'Squirrel Hill',
    url: 'https://www.gabyetjules.com/'
  };

  const yotea = {
    img: '/images/yotea.png',
    name: 'Yotea',
    location: 'Oakland',
    url: 'https://yoteastudio.com/menu'
  };



  return (
    <div className="App">
      <h1>
        Delicious Bakeries & Cafes in Pittsburgh
      </h1>
      <Store img={mango_mango.img} 
             name={mango_mango.name} 
             location={mango_mango.location} 
             url={mango_mango.url} />
      <Store img={kyo_matcha.img} 
             name={kyo_matcha.name} 
             location={kyo_matcha.location} 
             url={kyo_matcha.url} />
      <Store img={meccha_matcha.img} 
             name={meccha_matcha.name} 
             location={meccha_matcha.location} 
             url={meccha_matcha.url} />
      <Store img={tous_les_jour.img} 
             name={tous_les_jour.name} 
             location={tous_les_jour.location} 
             url={tous_les_jour.url} />
      <Store img={sumi_cakery.img} 
             name={sumi_cakery.name} 
             location={sumi_cakery.location} 
             url={sumi_cakery.url} />
      <Store img={pink_box.img} 
             name={pink_box.name} 
             location={pink_box.location} 
             url={pink_box.url} />
      <Store img={prantl_bakery.img} 
             name={prantl_bakery.name} 
             location={prantl_bakery.location} 
             url={prantl_bakery.url} />
      <Store img={tswirl.img} 
             name={tswirl.name} 
             location={tswirl.location} 
             url={tswirl.url} />
      <Store img={crepe_parisiennes.img} 
             name={crepe_parisiennes.name} 
             location={crepe_parisiennes.location} 
             url={crepe_parisiennes.url} />
      <Store img={la_gourmandine.img} 
             name={la_gourmandine.name} 
             location={la_gourmandine.location} 
             url={la_gourmandine.url} />
      <Store img={gaby_et_jules.img} 
             name={gaby_et_jules.name} 
             location={gaby_et_jules.location} 
             url={gaby_et_jules.url} />
      <Store img={yotea.img} 
             name={yotea.name} 
             location={yotea.location} 
             url={yotea.url} />
    </div>
  )
}

export default App