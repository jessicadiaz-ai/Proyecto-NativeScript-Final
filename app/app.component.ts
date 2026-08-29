import { Component, OnInit } from "@angular/core";
import { firebase } from "@nativescript/firebase";
import * as Toast from "nativescript-toast";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public firebaseToken: string = "";

  ngOnInit() { 
    // Inicialización de Firebase (Punto 1)
    firebase.init({
      onPushTokenReceivedCallback: (token) => {
        // Muestra el token asignado de Firebase
        this.firebaseToken = token;
        console.log("Firebase Token asignado: " + token);
      },
      onMessageReceivedCallback: (message) => {
        // Notificación entrante a la aplicación (Punto II)
        const notificationTitle = message.title || "Nueva Notificación";
        this.showToastNotification(notificationTitle);
      }
    }).then(
      () => console.log("Firebase inicializado con éxito),
      (error) => console.error("Error al inicializar Firebase: " + error)
    );
  }

  // Método para mostrar las notificaciones entrantes como Toast (Punto II)
  showToastNotification(messageText: string) {
    const toast = Toast.makeText(messageText, "log");
    toast.show();
  }
}
