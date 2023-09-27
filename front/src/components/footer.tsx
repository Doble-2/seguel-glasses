export default function Footer() {
  return (
    <footer className=" left-1/2 py-10 px-10 md:px-30 lg:px-[10rem]  sm:w-full  bg-opacity-20 shadow-xl shadow-black backdrop-blur-[0.5rem]  ">
      <div className="my-container text-white  sm:flex grid sm:text-center sm:text-left sm:justify-center sm:justify-between sm:items-start sm:items-center flex-wrap gap-12">
        <div>
          <h1 className="font-primary text-black dark:text-white">Links</h1>
          <ul className="flex flex-col gap-2 font-secondary mt-5">
            <a href="https://t.me/ejemplo" rel="noopener noreferrer" target="_blank" className="">
              <li className="text-gray-700 dark:text-white/70">Telegram Bot</li>
            </a>
           
          </ul>
        </div>
        <div>
          <h1 className="font-primary text-black dark:text-white">Socials</h1>
          <ul className="flex flex-col gap-2 font-secondary  mt-5">
            <a href="https://twitter.com/SuitBotTelegram" rel="noopener noreferrer" target="_blank" className="">
              <li className="text-gray-700 dark:text-white/70">Twitter</li>
            </a>
            <a href="https://t.me/ejemplo" rel="noopener noreferrer" target="_blank" className="">
              <li className="text-gray-700 dark:text-white/70">Telegram Group</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="font-primary text-black dark:text-white">Resources</h1>
          <ul className="flex flex-col gap-2 font-secondary  mt-5">
            <a href="https://suitbot.gitbook.io/bot-telegram-whitepaper" rel="noopener noreferrer" target="_blank" className="">
              <li className="text-gray-700 dark:text-white/70">Whitepaper</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 my-7 h-0.5 w-full rounded-full   dark:bg-opacity-20"></div>
      <h5 className="text-gray-500 text-left break-words max-w-[200px]	 text-sm lg:text-start w-full sm:max-w-[500px]  ">0x4495c3857f49138d3976e7793eb04811da9f71ee
                            </h5>
    </footer>
  );
}
