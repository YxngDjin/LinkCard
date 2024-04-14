import { avatar} from "../assets/images";
import { btn } from "../constants";


const linkCard = () => {
  return (
    <section className="px-5 py-9 rounded-3xl  bg-darkgray flex">
      <div className="flex w-full flex-col justify-center">
        <div className="w-full justify-center flex">
          <img 
            src={avatar} 
            alt="Profile Pic"
            className="rounded-full mb-3 border-green border-2 w-[150px] lg:w-[200px]"
          />
        </div>
        <div className="flex w-full justify-center  flex-col">
          <h1 className="flex w-full justify-center font-bold">
            Dennis Lehmann
          </h1>
          <p className="flex justify-center text-green mb-3">
            Brandenburg, Deutschland
          </p>
          <p className="flex justify-center">
            "Lerning Front-End Development"
          </p>
        </div>
          <div className="flex flex-col items-center">
            {btn.map((item, index) => (
              <div key={index} className=" transition-all rounded-xl hover:bg-green hover:text-darkgray bg-gray lg:w-[399px] lg:h-[80px] w-[250px] h-[40px] flex justify-center items-center font-semibold mt-4">
                <a href={item.href}>
                  {item.textList}
                </a>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default linkCard;