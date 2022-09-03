function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text -2x1 md:text-4x1 lg:text-16x1 uppercase">
          Hello
        </h2>
        <h1 className="text-3x1 md:text-6x1 lg:text-8x1 font-black ippercase mb-8">
          Everyone
        </h1>
        <div className="text-lg md:text-2x1 lg:text-3x1 py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          I'm I Putu Wahyu Bayu Putra Antara
        </div>
        <div id="revue-embed">
  <form action="https://www.getrevue.co/profile/ptwahyubayu/add_subscriber" 
        method="post" 
        target="_blank">

    <div className="flex flex-col md:flex-row justify-center mb-4">
      <input 
          className="text-lg md:text-2x1 placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12
          bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0" 
          placeholder="Your message" 
          type="text" 
          name="message" />
          
      <input 
          type="submit" 
          value="Send" 
          name="Send" 
          className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2x1 py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150"/>
    </div>
  
    <div className="opacity-75 italic">
      Thanks for your message, i hope you enjoy with this website
    </div>
    </form>
    </div>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p></p>
        <div className="flex -mx-6">
          <p  className="mx-3 hover:opacity-80 duration-150">About us</p  >
          <p className="mx-3 hover:opacity-80 duration-150">Privacy</p>
          <p className="mx-3 hover:opacity-80 duration-150">contact</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
