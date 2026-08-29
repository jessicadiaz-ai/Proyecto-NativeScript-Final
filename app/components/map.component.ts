import { Component } from "@angular/core";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

@Component({
  selector: "ns-map",
  template: '<MapView (mapReady)="onMapReady($event)"></MapView>'
})
export class MapComponent {

  // Punto 7: Inicialización del plugin de mapas de Google
  onMapReady(event: any) {
    const mapView: MapView = event.object;

    // Punto 8: Creación y configuración de un Marker en el mapa
    const marker = new Marker();
    marker.position = Position.positionFromLatLng(19.432608, -99.133209);
    marker.title = "Ubicación de Prueba";
    marker.snippet = "Marcador de Google Maps en NativeScript";

    mapView.addMarker(marker);
    console.log("Mapa cargado con éxito y marcador agregado.");
  }
}
