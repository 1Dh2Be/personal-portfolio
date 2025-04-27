import planeViewImage from "../assets/Images/Tunnel.png";

export const DynamicSwitch = () => {
  return (
    <div className="relative mx-[-2rem] mt-8 h-[115vh]">
      <img
        src={planeViewImage}
        alt="Long tunnel with light at the end"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
