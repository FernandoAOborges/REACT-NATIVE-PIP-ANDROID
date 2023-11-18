![Android Event](https://github.com/FernandoAOborges/REACT-NATIVE-PIP-ANDROID/actions/workflows/main.yml/badge.svg?event=push)

# React Native PiP (Picture-in-Picture) for Android

This project implements a native PiP (Picture-in-Picture) module for Android using React Native. It enables React Native applications to support PiP functionalities on Android.

Este projeto implementa um módulo nativo de PiP (Picture-in-Picture) para Android, usando React Native. Ele permite que os aplicativos React Native suportem funcionalidades de PiP no Android.

## Demo / Demonstração

https://github.com/FernandoAOborges/REACT-NATIVE-PIP-ANDROID/assets/33990306/5dcec727-3f00-4193-b995-38343cf6b0c0

## Installation / Instalação

To use this module in your React Native project, follow the steps below:
<br>
Para utilizar este módulo em seu projeto React Native, siga os passos abaixo:

1. Include the following settings in your `AndroidManifest.xml` within the `MainActivity` activity tag:
   Inclua as seguintes configurações no seu `AndroidManifest.xml`, dentro da tag da atividade `MainActivity`:
    ```xml
    android:resizeableActivity="true"
    android:supportsPictureInPicture="true"
    android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|layoutDirection|fontScale|screenLayout|density|smallestScreenSize|orientation"
    ```

2. Add the files `PipModule.java` and `PipPackage.java` in `java.com` to your project.
   Adicione os arquivos `PipModule.java` e `PipPackage.java` em `java.com` no seu projeto.

3. In the `MainApplication.java` file of your project, register the module by adding the following line:
   No arquivo `MainApplication.java` do seu projeto, registre o módulo adicionando a seguinte linha:
    ```java
    packages.add(new PipPackage());
    ```

## Usage / Uso

[Include detailed instructions on how to use the module in a React Native project.]
[Inclua instruções detalhadas sobre como usar o módulo em um projeto React Native.]

