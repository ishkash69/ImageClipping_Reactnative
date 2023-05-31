
// import liraries
import React, { useEffect, useState } from 'react';
import { Canvas, Group, Image, useImage, Skia, SkiaView, Paint, Blur, Rect } from '@shopify/react-native-skia';
import { Dimensions, ImageBackground, SafeAreaView, ScrollView, Image as ViewImage, useWindowDimensions } from 'react-native';

// create a component
const App = () => {

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])
  const image = useImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyICLbwcUSoPBlhz752nwH_6D3aY9Gzv75epW47VP28RsTmL4QNIbekmXUZR1ehUgd4Y&usqp=CAU',
  );
  const leftstar = Skia.Path.MakeFromSVGString(
    'M 0 30 L 120 0 L 120 210 L 0 175 Z',
  );
  const Rightstar = Skia.Path.MakeFromSVGString(
    'M 0 0 L 210 50 L 120 175 L 0 210 Z',

    // (0% 20%, 0% 80%, 100% 100%, 100% 0%)
  );
  const paint = Skia.Paint()

  paint.setColor(Skia.Color("red"))

  // clip-path: polygon(10% 0%, 10% 100%, 100% 90%, 100% 10%);
  Cube3Left = Skia.Path.MakeFromSVGString('M 0 0 L 100 35 L 120 157 L 0 120 Z');
  Cube3Right = Skia.Path.MakeFromSVGString(
    'M 0 35 L 105 0 L 120 120 L 0 151 Z',
  );
  Cube3Top = Skia.Path.MakeFromSVGString('M 99 40 L 0 70 L 99 105 L 198 72 L 99 40 Z',);
  // 43% 36%, 84% 56%, 43% 73%, 5% 57%
  return (
    <>
      <ImageBackground
        style={{
          height: '100%',
          width: '100%',
          flex: 1
        }}
        resizeMode='cover'
        source={{ uri: 'https://images.unsplash.com/photo-1622217122667-701eff45443c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTAxNjA5NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=420&q=60' }}
      >

        <ScrollView
          style={{
            flex: 1
          }}
        >
          <SkiaView
            style={{

              height: Dimensions.get('window').height,
            }}>

            {/* ---2d cube---- */}
            <Canvas
              style={{
                flex: 1,
                marginTop: 30,
                // backgroundColor: 'red',
              }}>

              <Group
                transform={[{ translateY: 0 }, { translateX: 10 }]}
                clip={leftstar}>
                <Rect
                  x={0}
                  y={0}
                  width={120}
                  height={210}
                  color = {'red'}
                />
                <Image
                  image={image}
                  x={0}
                  y={0}
                  width={140}
                  height={210}
                  fit="contain"
                />
              </Group>
              <Group
                transform={[{ translateY: 0 }, { translateX: 132 }]}
                clip={Rightstar}>
                <Rect
                  x={0}
                  y={0}
                  width={120}
                  height={210}
                // fill={{ color: 'red' }}
                color={'red'} 
                />
                <Image
                  image={useImage('https://images.unsplash.com/photo-1564889956434-c1d5b3a4f635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80')}
                  x={0}
                  y={0}
                  width={120}
                  height={210}
                  fit="cover"
                // paint={paint}
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
                transform={[{ translateX: 50 }, { translateY: 70 }]}
              >
                <Image
                  image={useImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')}
                  x={0}
                  y={0}
                  width={100}
                  height={151}
                  fit="cover"
                // paint={paint}

                />
              </Group>
              <Group
                transform={[{ translateY: 70 }, { translateX: 152 }]}
                clip={Cube3Right}>
                <Image
                  image={useImage('https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg')}
                  x={0}
                  y={0}
                  width={100}
                  height={151}
                  fit="cover"
                // paint={paint}

                />
              </Group>
              <Group
                transform={[{ translateY: -2 }, { translateX: 50 }]}
                clip={Cube3Top}>
                <Image
                  image={useImage('https://saiwa.ai/wp-content/uploads/2022/12/Image-Processing-.webp')}
                  x={0}
                  y={0}
                  width={198}
                  height={105}
                  fit="cover"
                // paint={paint}

                />
              </Group>
            </Canvas>

          </SkiaView>
        </ScrollView>
      </ImageBackground>

    </>
  );
};

//make this component available to the app
export default App;

//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import Cube from './Cube';

// // create a component
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//    <Cube/>
//     </SafeAreaView>
//   );
// };

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default App;

