![Android Event](https://github.com/FernandoAOborges/REACT-NATIVE-PIP-ANDROID/actions/workflows/main.yml/badge.svg?event=push)

# React Native PiP (Picture-in-Picture) for Android

This project implements a native PiP (Picture-in-Picture) module for Android using React Native. It enables React Native applications to support PiP functionalities on Android.

Este projeto implementa um módulo nativo de PiP (Picture-in-Picture) para Android, usando React Native. Ele permite que os aplicativos React Native suportem funcionalidades de PiP no Android.

## Demo / Demonstração

https://github.com/FernandoAOborges/REACT-NATIVE-PIP-ANDROID/assets/33990306/5dcec727-3f00-4193-b995-38343cf6b0c0

## Installation / Instalação

To use this module in your React Native project, follow the steps below:
Para utilizar este módulo em seu projeto React Native, siga os passos abaixo:

1. Include the following settings in your `AndroidManifest.xml` within the `MainActivity` activity tag:
   Inclua as seguintes configurações no seu `AndroidManifest.xml`, dentro da tag da atividade `MainActivity`:
    ```xml
    android:resizeableActivity="true"
    android:supportsPictureInPicture="true"
    android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|layoutDirection|fontScale|screenLayout|density|smallestScreenSize|orientation"
    ```

2. Add the following Java files to your project in the appropriate package (e.g., `com.pipandroid`):
   Adicione os seguintes arquivos Java ao seu projeto no pacote apropriado (por exemplo, `com.pipandroid`):

    ### PipModule.java
    ```java
    package com.pipandroid;

    import android.app.PictureInPictureParams;
    import android.os.Build;
    import android.util.Rational;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.bridge.ReactContextBaseJavaModule;
    import com.facebook.react.bridge.ReactMethod;

    public class PipModule extends ReactContextBaseJavaModule {
        private Rational aspectRatio;
        PipModule(ReactApplicationContext context){
            super(context);
            aspectRatio = new Rational(3, 4);
        }

        @Override
        public String getName(){
            return "PipModule";
        }

        @ReactMethod
        public void EnterPipMode(){
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                PictureInPictureParams params = new PictureInPictureParams.Builder()
                    .setAspectRatio(this.aspectRatio)
                    .build();
                getCurrentActivity().enterPictureInPictureMode(params);
            }
        }
    }
    ```

    ### PipPackage.java
    ```java
    package com.pipandroid;

    import com.facebook.react.ReactPackage;
    import com.facebook.react.bridge.NativeModule;
    import com.facebook.react.bridge.ReactApplicationContext;
    import com.facebook.react.uimanager.ViewManager;
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.List;

    public class PipPackage implements ReactPackage {

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }

        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            List<NativeModule> modules = new ArrayList<>();
            modules.add(new PipModule(reactContext));
            return modules;
        }
    }
    ```

3. In the `MainApplication.java` file of your project, register the module by adding the following line:
   No arquivo `MainApplication.java` do seu projeto, registre o módulo adicionando a seguinte linha:
    ```java
    packages.add(new PipPackage());
    ```

## Usage / Uso
   ```java
     const { PipModule } = NativeModules;
     PipModule.EnterPipMode();    


  

