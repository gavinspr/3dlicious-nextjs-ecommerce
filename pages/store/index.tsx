// import {
//   Avatar,
//   Box,
//   Center,
//   Heading,
//   HStack,
//   Image,
//   SimpleGrid,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";
// import { useRouter } from "next/router";

// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// const mockDB = {
//   storeCategories: [
//     {
//       title: "Meals",
//       sub: [
//         { title: "Dinner", src: "/meals2.jpg" },
//         { title: "Lunch", src: "/meals2.jpg" },
//         { title: "Chicken", src: "/meals2.jpg" },
//         { title: "Beef", src: "/meals2.jpg" },
//         { title: "Asian", src: "/meals2.jpg" },
//         { title: "American", src: "/meals2.jpg" },
//         { title: "Italian", src: "/meals2.jpg" },
//         { title: "Snacks", src: "/meals2.jpg" },
//         { title: "Appetizers", src: "/meals2.jpg" },
//         { title: "Seafood", src: "/meals2.jpg" },
//         { title: "Mexican", src: "/meals2.jpg" },
//         { title: "Healthy", src: "/meals2.jpg" },
//         { title: "Vegetarian", src: "/meals2.jpg" },
//         { title: "Baked Goods", src: "/meals2.jpg" },
//         { title: "Other", src: "/meals2.jpg" },
//       ],
//     },
//     {
//       title: "Supplies",
//       sub: [
//         { title: "Supply Kits", src: "/meals2.jpg" },
//         { title: "Fat Carts", src: "/meals2.jpg" },
//         { title: "Fiber Carts", src: "/meals2.jpg" },
//         { title: "Gluten Carts", src: "/meals2.jpg" },
//         { title: "Protein Carts", src: "/meals2.jpg" },
//         { title: "Sweet Carts", src: "/meals2.jpg" },
//         { title: "Salty Carts", src: "/meals2.jpg" },
//         { title: "Sour Carts", src: "/meals2.jpg" },
//         { title: "Bitter Carts", src: "/meals2.jpg" },
//         { title: "Umami Carts", src: "/meals2.jpg" },
//       ],
//     },
//     {
//       title: "Printers",
//       sub: [
//         { title: "New Models", src: "/meals2.jpg" },
//         { title: "3Dlicious Printers", src: "/meals2.jpg" },
//         { title: "Attachments", src: "/meals2.jpg" },
//         { title: "Replacement Parts", src: "/meals2.jpg" },
//       ],
//     },
//   ],
// };

// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// type CategoryProps = {
//   title: string;
//   index: any;
// };

// type ArrowProps = {
//   text: string;
//   className: string;
// };

// const Arrow = ({ text, className }: ArrowProps) => {
//   return <div className={className}>{text}</div>;
// };

// export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// const Category = ({ title, index }: CategoryProps) => {
//   return (
//     <VStack
//       // borderWidth={2} borderColor="red"
//       w="70%"
//       align="left"
//       spacing={4}
//       background="white"
//       p={2}
//       borderRadius={20}
//       overflow="auto"
//       boxShadow="0 4px 8px #2D3748"
//       borderWidth={2}
//       css={{
//         "&::-webkit-scrollbar": {
//           width: "1px",
//           // width: "0",
//           // visibility: "hidden",
//           display: "none",
//         },
//         "&::-webkit-scrollbar-track": {
//           width: "1px",
//           // width: "0",
//           // visibility: "hidden",
//           display: "none",
//         },
//         "&::-webkit-scrollbar-thumb": {
//           background: "#3182CE",
//           borderRadius: "24px",
//         },
//       }}
//     >
//       <ScrollMenu
//         // alignCenter={alignCenter}
//         LeftArrow={ArrowLeft}
//         RightArrow={ArrowRight}
//         onWheel={onWheel}
//       >
//         <Heading
//           // todo: make nav click
//           // borderColor="blue" borderWidth={2}
//           // w="100%"
//           fontSize={36}
//         >
//           {title}:
//           {/* left off formatting these two divs (categorey and products) */}
//         </Heading>
//         <HStack
//           // w="100%"
//           spacing={10}
//           // borderColor="purple" borderWidth={2}
//         >
//           {mockDB.storeCategories[index].sub.map((e: any, i: any) => (
//             <CategoriesItem
//               itemId={i}
//               title={e.title}
//               icon="/store_printers1.png"
//             />
//           ))}
//           {/* <CategoriesItem title="Meals" icon="/meals2.jpg" />
//         <CategoriesItem
//         title="Supplies"
//         icon="https://image.shutterstock.com/image-photo/collage-various-food-meat-dishes-600w-1749565121.jpg"
//         />{" "}
//       <CategoriesItem title="Printers" icon="/store_printers1.png" /> */}
//         </HStack>
//       </ScrollMenu>
//     </VStack>
//   );
// };

// function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
//   const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//   if (isTouchpad) {
//     ev.stopPropagation();
//     return;
//   }

//   if (ev.deltaY < 0) {
//     apiObj.scrollNext();
//   } else if (ev.deltaY > 0) {
//     apiObj.scrollPrev();
//   }
// }

// type CategoriesItemProps = {
//   icon: string;
//   title: string;
//   itemId: string;
// };

// const CategoriesItem = ({ icon, title, itemId }: CategoriesItemProps) => {
//   const visibility = React.useContext(VisibilityContext);
//   const visible = visibility.isItemVisible(itemId);

//   const router = useRouter();
//   const { id } = router.query;
//   // console.log(id,"ggg")
//   return (
//     <VStack backgroundColor={visible ? "transparent" : "gray"}>
//       <Avatar size="xl" src={icon} />
//       {/* <Box w="10%"> */}
//       {/* <Image
//         // w={1000} h={1000}
//         src={icon}
//       /> */}
//       {/* </Box> */}
//       <Text>{title}</Text>
//     </VStack>
//   );
// };

// // // todo: icons get bigger on hover

// const StoreFront = () => {
//   return (
//     <Center gap={4} w="100%" top="22vh" pos="absolute" flexDir="column">
//       {/* {mockDB.storeCategories.map((element: any, index: any) => ( */}
//         <Category title={"element.title"} index={0} />
//       {/* ))} */}
//     </Center>
//   );
// };

// export default StoreFront;
// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// // // import { LeftArrow, RightArrow } from "./arrows";
// // // import { Card } from "./card";
// // // import { Footer } from "./footer";
// // // import { Header } from "./header";
// // // import "./globalStyles.css";

// // // NOTE: embrace power of CSS flexbox!
// // // import "./arrowsOnBottomOrTop.css";
// // // import "./hideScrollbar.css";
// // // import "./firstItemMargin.css";

// // function Arrow({
// //   children,
// //   disabled,
// //   onClick,
// // }: {
// //   children: React.ReactNode;
// //   disabled: boolean;
// //   onClick: VoidFunction;
// // }) {
// //   return (
// //     <button
// //       disabled={disabled}
// //       onClick={onClick}
// //       style={{
// //         cursor: "pointer",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         right: "1%",
// //         opacity: disabled ? "0" : "1",
// //         userSelect: "none",
// //       }}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // export function LeftArrow() {
// //   const {
// //     isFirstItemVisible,
// //     scrollPrev,
// //     visibleItemsWithoutSeparators,
// //     initComplete,
// //   } = React.useContext(VisibilityContext);

// //   const [disabled, setDisabled] = React.useState(
// //     !initComplete || (initComplete && isFirstItemVisible)
// //   );
// //   React.useEffect(() => {
// //     // NOTE: detect if whole component visible
// //     if (visibleItemsWithoutSeparators.length) {
// //       setDisabled(isFirstItemVisible);
// //     }
// //   }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

// //   return (
// //     <Arrow disabled={disabled} onClick={() => scrollPrev()}>
// //       Left
// //     </Arrow>
// //   );
// // }

// // export function RightArrow() {
// //   const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
// //     React.useContext(VisibilityContext);

// //   // console.log({ isLastItemVisible });
// //   const [disabled, setDisabled] = React.useState(
// //     !visibleItemsWithoutSeparators.length && isLastItemVisible
// //   );
// //   React.useEffect(() => {
// //     if (visibleItemsWithoutSeparators.length) {
// //       setDisabled(isLastItemVisible);
// //     }
// //   }, [isLastItemVisible, visibleItemsWithoutSeparators]);

// //   return (
// //     <Arrow disabled={disabled} onClick={() => scrollNext()}>
// //       Right
// //     </Arrow>
// //   );
// // }

// // export function Card({ title, itemId }: { title: string; itemId: string }) {
// //   const visibility = React.useContext(VisibilityContext);

// //   const visible = visibility.isItemVisible(itemId);

// //   return (
// //     <div
// //       role="button"
// //       style={{
// //         border: "1px solid",
// //         display: "inline-block",
// //         margin: "0 10px",
// //         width: "160px",
// //         userSelect: "none",
// //       }}
// //       tabIndex={0}
// //       className="card"
// //     >
// //       <div>
// //         <div>{title}</div>
// //         <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
// //           visible: {JSON.stringify(visible)}
// //         </div>
// //       </div>
// //       <div
// //         style={{
// //           backgroundColor: "bisque",
// //           height: "200px",
// //         }}
// //       />
// //     </div>
// //   );
// // }

// // export function Header() {
// //   return (
// //     <header
// //       style={{
// //         backgroundColor: "#222",
// //         height: "150px",
// //         padding: "20px",
// //         color: "white",
// //         display: "flex",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <h1>React horizontal scrolling menu V2</h1>
// //     </header>
// //   );
// // }

// // export const Footer = () => {
// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         margin: "50px",
// //         position: "fixed",
// //         bottom: 0,
// //         width: "100%",
// //       }}
// //     >
// //       <span>See more advanced example in </span>
// //       <a
// //         /* eslint-disable react/jsx-no-target-blank */
// //         target="_blank"
// //         rel="noopener"
// //         style={{ paddingLeft: "5px" }}
// //         href="https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu"
// //       >
// //         Project on GitHub
// //       </a>
// //     </div>
// //   );
// // };

// // type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// // const elemPrefix = "test";
// // const getId = (index: number) => `${elemPrefix}${index}`;

// // const getItems = () =>
// //   Array(20)
// //     .fill(0)
// //     .map((_, ind) => ({ id: getId(ind) }));

// // function App() {
// //   const [items] = React.useState(getItems);

// //   return (
// //     <>
// //       <Header />
// //       <div className="example" style={{ paddingTop: "100px" }}>
// //         <div>
// //           <ScrollMenu
// //             LeftArrow={LeftArrow}
// //             RightArrow={RightArrow}
// //             onWheel={onWheel}
// //           >
// //             {mockDB.storeCategories[0].sub.map((e: any, i: any) => (
// //               <CategoriesItem
// //                 itemId={e}
// //                 title={e.title}
// //                 icon="/store_printers1.png"
// //                 key={e}
// //               />
// //             ))}
// //             {/* {items.map(({ id }) => (
// //               // <Card
// //               //   title={id}
// //               //   itemId={id} // NOTE: itemId is required for track items
// //               //   key={id}
// //               // />
// //               <CategoriesItem
// //                 itemId={id}
// //                 title={id}
// //                 icon="/store_printers1.png"
// //                 key={id}
// //               />
// //             ))} */}
// //           </ScrollMenu>
// //         </div>
// //         <Footer />
// //       </div>
// //     </>
// //   );
// // }
// // export default App;

// // function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
// //   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

// //   if (isThouchpad) {
// //     ev.stopPropagation();
// //     return;
// //   }

// //   if (ev.deltaY < 0) {
// //     apiObj.scrollNext();
// //   } else if (ev.deltaY > 0) {
// //     apiObj.scrollPrev();
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById("root"));

//

import React from "react";
import { Center } from "@chakra-ui/react";
import { PRODUCT_TYPES } from "../../constants/ProductType";
import { CategoryList } from "../../components";

const StoreFront = () => {
  return (
    <Center gap={4} w="100%" top="22vh" pos="absolute" flexDir="column">
      {PRODUCT_TYPES.map((element: any, index: any) => (
        <CategoryList title={element} index={index} storefront={true} />
      ))}
    </Center>
  );
};

export default StoreFront;
