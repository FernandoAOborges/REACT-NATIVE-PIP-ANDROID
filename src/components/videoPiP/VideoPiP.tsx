import { NativeModules, AppState, Button, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';

const Home = () => {
  const { PipModule } = NativeModules;
  const [backgroundDeteced, setBackgroundDeteced] = useState(false);

  // detect when app is in background and enter pip mode -

  useEffect(() => {
    const appstatus = AppState.addEventListener('change', (e) => {
      if (e === 'background') {
        setBackgroundDeteced(true);
        PipModule.EnterPipMode();
      } else {
        setBackgroundDeteced(false);
      }
    });
    return () => {
      appstatus.remove();
    };
  }, [PipModule]);

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{
          uri: 'https://player.vimeo.com/external/538571502.sd.mp4?s=931e8b30977433ba260a9e08678ac56e13b73aa0&profile_id=165&oauth2_token_id=57447761',
        }}
        style={{
          width: '100%',
          height: 300,
        }}
        pictureInPicture
        fullscreen
        posterResizeMode="cover"
        resizeMode="cover"
        repeat
        playInBackground
        poster="https://images.pexels.com/photos/1546035/pexels-photo-1546035.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {!backgroundDeteced && (
        <Button
          onPress={() => {
            PipModule.EnterPipMode();
          }}
          title="PIP"
        />
      )}
    </View>
  );
};

export default Home;
