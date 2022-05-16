import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  btnTxt!: string;
  snapped!: boolean;
  btnColor!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}

  ngOnInit() {
    this.btnTxt = 'Oh snap! ❤️';
    this.snapped = false;
    this.btnColor = 'black';
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}