import Image from "next/image";


const Home = () => {
    return (
        <div className=" flex justify-center items-center">
            <Image src={"https://avatars.githubusercontent.com/u/132831970?s=400&u=7c2bc23233c5671ff3204b14eee0eba7cf372ce8&v=4"} className="border-5  border-[#3c91b2] rounded-full" width={300} height={300}  alt="fff"></Image>
        </div>
    );
};

export default Home;