import Banner from "./Banner";
import Follow from "./Follow";
import Options from "./Options";
import Payment from "./Payment";
import PaymentReverse from "./PaymentReverse";
import Support from "./Support";
import Tashim from "./Tashim";
import ZarinCard from "./ZarinCard";
import ZarinPlus from "./ZarinPlus";
function Body() {
  return (
    <>
      <Banner />
      <Payment />
      <PaymentReverse />
      <ZarinCard/>
      <Tashim/>
      <ZarinPlus/>
      <Options/>
      <Follow/>
      <Support/>
    </>
  );
}

export default Body;
