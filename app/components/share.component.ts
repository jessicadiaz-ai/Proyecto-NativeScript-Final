import { Component } from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import * as camera from "nativescript-camera";
import { ImageSource } from "@nativescript/core";

@Component({ 
  selector: "ns-share",
  templateUrl: "./share.component.html"
})
export class ShareComponent {
  public captureImage: ImageSource | null = null;

  // Punto 3: Compartir texto mediante social-share
  shareTextMessage() {
    const textToShare = "¡Hola! Compartiendo texto desde la app NativeScript.";
    SocialShare.shareText(textToShare);
  }

  // Punto 5: Uso del plugin camera para tomar fotografías
  takePictureWithCamera() {
    camera.requestPermissions().then(() => {
      camera.takePicture({ width: 300, height: 300,keepAspectRatio: true })
        .then((imageAsset) => {
          // Transformación del Asset a ImageSource
          ImageSource.fromAsset(imageAsset).then((imgSource) => {
            this.capturedImage = imgSource;
            console.log("Imagen capturada y transformada con éxito");
          });
        })
        .catch((err) => console.error("Error al tomar foto: " + err.message));
    });
  }
  // Puntos 4 y 6: Compartir la imagen capturada con la cámara mediante social-share
  shareCapturedImage() {
    if (this.capturedImage() { 
      SocialShare.shareImage(this.capturedImage);
    } else {
      console.log("No hay ninguna imagen tomada para compartir.");
    }
  }
}
                
