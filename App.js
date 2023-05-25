// // //import liraries
// // import React, { Component } from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import {
// //   Canvas,
// //   Group,
// //   Image,
// //   useImage,
// //   Skia,
// //   center,
// //   rotate,
// //   Paint,
// // } from '@shopify/react-native-skia';
// // // create a component
// // const App = () => {
// //   const image = useImage(
// //     'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
// //   );
// //   const leftstar = Skia.Path.MakeFromSVGString(
// //     'M 40 0 L 170 0 L 210 120 L 0 120 Z',
// //   );
// //   const Rightstar = Skia.Path.MakeFromSVGString(
// //     'M 0 0 L 210 0 L 170 120 L 40 120 Z',
// //   );
// //   //  'M 40 0 L 170 0 L 210 120 L 0 120 Z',

  
// //   return (
// //     // 20% 0%, 80% 0%, 100% 100%, 0% 100%
// //     <>
// //       <Canvas
// //         style={{
// //           flex: 1,
// //           marginTop: 100,
// //           // backgroundColor: 'red',
// //         }}>
// //         <Group
// //           // transform={[{ rotate: 1.56 }, { translateY: -150 }, { translateX: 50 },]}
// //           clip={Rightstar}>
// //           <Image
// //             image={image}
// //             x={0}
// //             y={0}
// //             width={256}
// //             height={256}
// //             fit="cover"

// //           />
// //         </Group>
// //         <Group
// //           transform={[{ rotate: 1.56 }, { translateY: -269 }, { translateX: 50 },]}
// //           clip={leftstar}>
// //           <Image
// //           // transform={[{ scaleX: -1 }]}
// //             image={image}
// //             x={0}
// //             y={0}
// //             width={210}
// //             height={120}
// //             fit="cover"
// //           />
// //         </Group>
// //       </Canvas>
// //       <Canvas
// //         style={{
// //           flex: 1,
// //           backgroundColor: 'red',
// //         }}>

// //         <Group
// //           transform={[{ rotate: 1.56 },{ translateY: -200 }, { translateX: 50 } ]}
// //           clip={leftstar}>
// //           <Image
// //           // transform={[{}]}
// //             image={image}
// //             x={0}
// //             y={0}
// //             width={210}
// //             height={120}
// //             fit="cover"
// //           />
// //         </Group>
// //       </Canvas>

// //     </>
// //   );
// // };

// // // define your styles
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#2c3e50',
// //   },
// // });

// // //make this component available to the app
// // export default App;
// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {
//   Canvas,
//   Group,
//   Image,
//   useImage,
//   Skia,
//   center,
// } from '@shopify/react-native-skia';
// // create a component
// const App = () => {
//   const image = useImage(
//     'https://i.scdn.co/image/ab67616d0000b2733a5bc065989932c556d13103',
//   );
//   const leftstar = Skia.Path.MakeFromSVGString(
//     'M 0 20 L 120 0 L 120 210 L 0 185 Z',
//   );
//   const Rightstar = Skia.Path.MakeFromSVGString(
//     'M 0 0 L 220 50 L 130 175 L 0 210 Z',
//   );
//   const upperPart = Skia.Path.MakeFromSVGString(
//     'M 0 0 L 120 120 L 120 210 L 0 210 Z',
//   )
//   return (
//     <>
//       <Canvas
//         style={{
//           flex: 1,
//           marginTop: 100,
//           backgroundColor: 'red',
//         }}>
//         <Group clip={leftstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />
//         </Group>
//         <Group
//           transform={[{translateY: 0}, {translateX: 121}]}
//           clip={Rightstar}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />
//         </Group>
//       </Canvas>
//       <Canvas
//       style={{
//         flex: 1,
//         backgroundColor: 'blue'
//       }}
//       >
//          <Group
//           transform={[{translateY: 0}, {translateX: 121}]}
//           clip={upperPart}>
//           <Image
//             image={image}
//             x={0}
//             y={0}
//             width={120}
//             height={210}
//             fit="cover"
//           />
//         </Group>
//       </Canvas>
//     </>
//   );
// };

// //make this component available to the app
// export default App;
//import liraries
import React from 'react';
import {Canvas, Group, Image, useImage, Skia} from '@shopify/react-native-skia';
// create a component
const App = () => {
  const image = useImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyICLbwcUSoPBlhz752nwH_6D3aY9Gzv75epW47VP28RsTmL4QNIbekmXUZR1ehUgd4Y&usqp=CAU',
  );
  const leftstar = Skia.Path.MakeFromSVGString(
    'M 0 30 L 120 0 L 120 210 L 0 175 Z',
  );
  const Rightstar = Skia.Path.MakeFromSVGString(
    'M 0 0 L 210 50 L 120 175 L 0 210 Z',
  );
// 0 11%, 96% 0, 96% 100%, 0 91%

  Cube3Left = Skia.Path.MakeFromSVGString('M 0 0 L 100 35 L 120 157 L 0 120 Z');
  Cube3Right = Skia.Path.MakeFromSVGString(
    'M 0 35 L 105 0 L 120 120 L 0 151 Z',
  );
  Cube3Top = Skia.Path.MakeFromSVGString('M 99 40 L 0 70 L 99 105 L 198 72 L 99 40 Z',);
// 43% 36%, 84% 56%, 43% 73%, 5% 57%
  return (
    <>
    {/* ---2d cube---- */}
      <Canvas
        style={{
          flex: 0.7,
          marginTop: 30,
          // backgroundColor: 'red',
        }}>
        <Group 
          transform={[{translateY: 0}, {translateX: 10}]}
        
        clip={leftstar}>
          
          <Image
            image={image}
            x={0}
            y={0}
            width={120}
            height={210}
            fit="cover"
          />
        </Group>
        <Group
          transform={[{translateY: 0}, {translateX: 132}]}
          clip={Rightstar}>
          <Image
            image={useImage('https://images.unsplash.com/photo-1564889956434-c1d5b3a4f635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80')}
            x={0}
            y={0}
            width={120}
            height={210}
            fit="cover"
          />
        </Group>
      </Canvas>


    {/* ---3d cube---- */}
      <Canvas
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          
        }}>
        <Group clip={Cube3Left}
        transform={[{ translateX: 50 },{translateY: 70}]}
        >
          <Image
            image={useImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
        <Group
          transform={[{translateY: 70}, {translateX: 152}]}
          clip={Cube3Right}>
          <Image
            image={useImage('https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg')}
            x={0}
            y={0}
            width={100}
            height={151}
            fit="cover"
          />
        </Group>
       <Group
          transform={[{translateY: -2}, {translateX: 50}]}
          clip={Cube3Top}>
          <Image
            image={useImage('https://saiwa.ai/wp-content/uploads/2022/12/Image-Processing-.webp')}
            x={0}
            y={0}
            width={198}
            height={105}
            fit="cover"
          />
        </Group>
      </Canvas>
    </>
  );
};

//make this component available to the app
export default App;
