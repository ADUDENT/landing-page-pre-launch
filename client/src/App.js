import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeaderDrawing from './assets/header_illustration.svg'
import Divider from './assets/divider-curve.svg'
import Collaboration from './assets/collaboration.svg'
import Analytics from './assets/analytics.svg'
import Campaign  from './assets/campaign.svg'
import Network from './assets/network.svg'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <section className="relative h-screen header">
        <div className="flex items-center justify-between px-48 -mt-16 header-container h-5/6">
          <div className="left-content">
            <h1 className="my-5 font-semibold text-8xl text-greytext">Shaping The <br />
              <span className="text-primary">Creators</span> Space In <br />
              South Africa.</h1>
            <p className="my-5 mb-10">What We Are Bringing To You!!</p>
            <a href="https://" className="px-10 py-4 mt-8 duration-300 border border-2 rounded border-primary text-primary hover:bg-pale">LEARN MORE</a>
          </div>
          <div className="mt-auto drawing">
            <img src={HeaderDrawing} alt="illustration" />
          </div>
        </div>
        <img className="absolute left-0 bottom-10" src={Divider} alt="divider" />
      </section>

      <section className="w-screen py-16 platform">
        <div className="title">
          <h1>The Platform We Are Creating</h1>
        </div>
        <div className="container grid w-full px-4 py-16 mx-auto place-items-center">
          <div className="flex flex-wrap w-8/12">
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                    <img src={Collaboration} alt="collaboration" />
                    <h1 className="item-title">Content Creation Collaboration</h1>
                    <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                    <img src={Analytics} alt="collaboration" />
                    <h1 className="item-title">Content Creation Collaboration</h1>
                    <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                    <img src={Campaign} alt="collaboration" />
                    <h1 className="item-title">Content Creation Collaboration</h1>
                    <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                    <img src={Network} alt="collaboration" />
                    <h1 className="item-title">Content Creation Collaboration</h1>
                    <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
           </div>  
        </div>
      </section>
      <section className="py-16 about">
        <div className="title">
          <h1>What We Are About?</h1>
        </div>
        <div className="introduction">

        </div>
        <div className="container grid w-full px-4 py-16 mx-auto place-items-center">
          <div className="flex flex-wrap w-8/12">
            <div className="w-full px-1 my-1 vision md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                <h1>Vision</h1>
                <p>To be the biggest content creators network platform in South Africa.</p></div>
            </div>
            <div className="w-full px-1 my-1 mission md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                <h1>Mission</h1>
                <p>To ensure that creators grow and find value in our platform.</p></div>
            </div>
          </div>
          <div className="flex flex-wrap w-8/12 objectives">
            <div className="w-full px-1 my-1 vision lg:my-4 lg:px-4 ">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >

          <h1>Objectives</h1>
          <ul>
            <li>Empower creators to be better at their craft, providing related inspiration and relevant analytics.</li>
            <li>We ensure creators growth by providing resources and opportunities that will drive growth.</li>
            <li>Ensure that creators are making money from their efforts.</li>
            <li>Making it easy for advertisers and influencers to find suitable content creators.</li>
          </ul>

           </div>
        </div>
        </div>
        </div>
      </section>
      <section className="for">
        <div className="title">
          <h1>Who Is Adudent For?</h1>
        </div>
        <div className="container grid w-full px-4 py-16 mx-auto place-items-center">
          <div className="flex flex-wrap w-8/12">
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                <img src={Collaboration} alt="collaboration" />
                <h1 className="item-title">Content Creation Collaboration</h1>
                <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
            <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="flex flex-col items-center px-10 py-12 overflow-hidden rounded-lg shadow-lg card" >
                <img src={Analytics} alt="collaboration" />
                <h1 className="item-title">Content Creation Collaboration</h1>
                <p className="text-center">Influencers can help create an online buzz about the brand. It also strengthens the brand's reputation, improving audience engagement, and increases conversions. Besides, it also increases the revenue by enhancing the brand's image and making more connections and helps the brand reach its goals. Adudent will make the campaigning process much easier and affordable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="for">
        <div className="title">
          <h1>Be The First To Know When We Release <br />
            Our Platform (MVP)</h1>
        </div>

        <div class="max-w-screen-md mx-auto py-24">

          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6 grid place-items-center">
              <div class="w-8/12 px-3 mb-6 md:mb-0 ">
                <label class="block tracking-wide text-primary text-md font-normal mb-2" for="grid-first-name">
                  Name
                </label>
                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your Name" />
                <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 grid place-items-center">
              <div class="w-8/12 px-3">
                <label class="block tracking-wide text-primary text-md font-normal mb-2" for="grid-password">
                  Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Your Email" />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="flex justify-center w-full px-3">
                <button class="shadow border border-primary border-2 text-primary hover:bg-pale transition duration-5 focus:shadow-outline focus:outline-none font-bold py-2 px-16 rounded" type="submit">
                  Send
                </button>
              </div>

            </div>

          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
