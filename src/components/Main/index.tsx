import Agents from "../Section/Agents"
import Clients from "../Section/Clients"
import PlacesToLive from "../Section/PlacesToLive"
import RecentHouseSales from "../Section/RecentHouseSales"
import RoomAndMessage from "../Section/RoomAndMessage"
import WhyUs from "../Section/WhyUs"

function Main() {
  return (
    <>
      <RecentHouseSales />
      <RoomAndMessage />
      <PlacesToLive />
      <WhyUs />
      <Clients />
      <Agents />
    </>
  )
}

export default Main