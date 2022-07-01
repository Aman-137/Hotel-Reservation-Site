import React from "react";

import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";

// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello From RoomsContainer
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
// Without using high-order Component
