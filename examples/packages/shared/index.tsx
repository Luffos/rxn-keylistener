/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, StatusBar, View} from 'react-native';

//@ts-ignore
import KeyListener, {KeyEvent} from '../../../index';

const App = () => {
  const [renderArray, setRenderArray] = useState<Array<JSX.Element>>([]);

  const handleKeyDown: (e: KeyEvent) => void = useCallback(e => {
    console.log(e);
    setRenderArray(prevState =>
      [
        ...prevState,
        <View
          key={`keyLog_Down_${Date.now()}_${
            Math.floor(Math.random() * 99999999) + 1
          }`}
          style={{
            width: '100%',
            height: `${100 / 20}%`,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{width: '10%', fontWeight: '100', color: '#fcee33'}}>
            {`[${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s]`}
          </Text>
          <Text
            style={{
              color: 'white',
            }}>{`Key ${e.key} was pressed  (keydown)`}</Text>
        </View>,
      ].splice(-20, 20),
    );
  }, []);

  const handleKeyUp = useCallback(e => {
    setRenderArray(prevState =>
      [
        ...prevState,
        <View
          key={`keyLog_Down_${Date.now()}_${
            Math.floor(Math.random() * 99999999) + 1
          }`}
          style={{
            width: '100%',
            height: `${100 / 20}%`,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{width: '10%', fontWeight: '100', color: '#fcee33'}}>
            {`[${new Date().getHours()}h:${new Date().getMinutes()}m:${new Date().getSeconds()}s]`}
          </Text>
          <Text
            style={{
              color: 'white',
            }}>{`Key ${e.key} was released  (keyup)`}</Text>
        </View>,
      ].splice(-20, 20),
    );
  }, []);

  useEffect(() => {
    const keyDownListener = KeyListener.addListener('keydown', handleKeyDown);
    const keyUpListener = KeyListener.addListener('keyup', handleKeyUp);

    return () => {
      KeyListener.removeListener(keyDownListener);
      KeyListener.removeListener(keyUpListener);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#2f60b5',
        padding: 5,
      }}>
      <StatusBar backgroundColor={'#010300'} barStyle="light-content" />
      {renderArray.map(a => a)}
    </View>
  );
};

export default App;
