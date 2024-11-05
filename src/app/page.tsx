import React from "react";
function Page() {
  return (
    <div className="w-full h-screen flex justify-evenly items-center md:flex-row flex-col bg-[--pink] px-4 md:px-8">
      <div className="md:w-[30vw] w-full overflow-hidden ">
        <h1
          id="home-main-logo"
          className="font-extrabold text-4xl text-center text-white py-2"
        >
          <span>Mesmerize</span>
        </h1>
        <p
          style={{ lineHeight: "16px" }}
          className=" font-[500] text-pretty px-1 py-1 pb-4 text-[--orange] text-md"
        >
          Be it Professional or Funky, We got you covered with -
        </p>
        <button className="w-full bg-[--orange] hover:bg-[--brown] hover:text-white text-white p-2 rounded text-center my-2 font-bold">Create Poll</button>
        <FeatureCard />
      </div>
      <div className="md:w-[60%] md:h-[80%] rounded overflow-hidden">
        <img src={"https://imgs.search.brave.com/iwPTUiH9aSEAFabvtzezXT6qbpRjYEExRieIT-gYIuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jaGFydC10aGF0/LWhhcy1ncmFwaC10/aGF0LXNheXNncmFw/aG9uLWl0XzExMjA3/MzUtMTU4Ny5qcGc_/c2VtdD1haXNfaHli/cmlk"} alt="Sample Pictures" className="w-full object-cover h-full object-center"/>
        {/* <Image src={image} alt="Sample Pictures" className="w-full object-cover h-full object-center"/> */}
      </div>
    </div>
  );
}

export default Page;

function FeatureCard() {
  const features = [
    "Amazing Color Themes",
    "Great After Poll Visual Analysis",
    "Variety of Poll Types",
    "Pre-Made Customizable Templates",
  ];
  return (
    <ul className="text-sm flex flex-col gap-2">
      {features.map((feature, index) => {
        return (
          <li
            key={index}
            className="bg-white  font-bold cursor-pointer p-2 px-4 rounded text-[--brown] relative hover:bg-[--brown] hover:text-white duration-200 transition-all"
          >
            {feature}
          </li>
        );
      })}
    </ul>
  );
}
