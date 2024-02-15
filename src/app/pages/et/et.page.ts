import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-et',
  templateUrl: './et.page.html',
  styleUrls: ['./et.page.scss'],
})
export class ETPage implements OnInit {

  imageSource:any;

  constructor() { }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.imageSource=image.dataUrl;
  }
  ngOnInit() {
  }

}
