// import React, { useCallback, useRef, useMemo, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   ScrollView,
//   Vibration,
//   TouchableNativeFeedback,
// } from 'react-native';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
// import { Avatar, Icon } from '@rneui/themed';
// import HapticFeedback from 'react-native-haptic-feedback';
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// const MyBottomSheet = () => {
//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<Boolean>(false);
//   // hooks
//   const sheetRef = useRef<BottomSheet>(null);

//   // variables
//   const snapPoints = useMemo(() => ['65%', '90%'], []);

//   // callbacks
//   const handleSheetChange = useCallback((index: any) => {
//     console.log('handleSheetChange', index);
//   }, []);
//   const handleSnapPress = useCallback((index: any) => {
//     sheetRef.current?.snapToIndex(index);
//   }, []);
//   const handleClosePress = useCallback(() => {
//     sheetRef.current?.close();
//   }, []);

//   // render
//   return (
//     <View style={styles.container}>
//       <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
//       <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
//       <Button title="Close" onPress={() => handleClosePress()} />
//       <BottomSheet
//         ref={sheetRef}
//         enablePanDownToClose={true}
//         snapPoints={snapPoints}
//         onChange={handleSheetChange}
//         onAnimate={() => setIsBottomSheetOpen(true)}
//         handleIndicatorStyle={{ backgroundColor: '#00FF00' }}
//         backgroundStyle={{ backgroundColor: '#000' }}
//       >
//         <BottomSheetView style={{ backgroundColor: 'red' }}>
//           <Text style={{ padding: 16, color: 'white' }}>Hello World</Text>
//         </BottomSheetView>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f5f',
//     position: 'absolute',
//     bottom: 0,
//   },
// });

// export default MyBottomSheet;

import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => handleClose(),
    },
  ];

  function handleClose() {
    Alert.alert('Are You Sure?', 'Closed?', [
      {
        text: "Don't close",
        onPress: () => console.log('Ask me later pressed'),
        style: 'cancel',
      },

      {
        text: 'Close',
        onPress: () => setIsVisible(false),
        style: 'destructive',
      },
    ]);
  }

  return (
    <SafeAreaProvider>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <BottomSheet isVisible={isVisible} onBackdropPress={() => handleClose()}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;
