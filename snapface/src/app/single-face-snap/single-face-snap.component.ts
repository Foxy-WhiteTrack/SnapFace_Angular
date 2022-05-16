import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  btnTxt!: string;
  snapped!: boolean;
  btnColor!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.btnTxt = 'Oh snap! ❤️';
    this.snapped = false;
    this.btnColor = 'black';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.snapped == false){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.faceSnap.snaps++;
      this.btnTxt = 'Oops unsnap! 💔';
      this.snapped = true;
      this.btnColor = 'pink';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.faceSnap.snaps--;
      this.btnTxt = 'Oh snap! ❤️';
      this.snapped = false;
      this.btnColor = 'black';
    }
  }
}
