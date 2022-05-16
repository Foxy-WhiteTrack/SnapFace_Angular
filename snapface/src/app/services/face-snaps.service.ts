import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'La Guitare',
          description: 'Une des passions que j\'ai développé au lycée',
          createdDate: new Date(),
          snaps: 0,
          imgUrl: 'https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_1280.jpg',
        },
        {
          id: 2,
          title: 'Le Mix DJ',
          description: 'Une activité que j\'ai pratiqué à partir de mes 25 ans',
          createdDate: new Date(),
          snaps: 0,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/13/13/37/audio-720589_1280.jpg'
        },
        {
          id: 3,
          title: 'Le spray paint',
          description: 'Une activité pro que j\'ai fais directement dans la rue à Alès',
          createdDate: new Date(),
          snaps: 0,
          imgUrl: 'https://cdn.pixabay.com/photo/2018/04/25/13/52/spray-3349588_1280.jpg',
          location: 'Alès'
        },
        {
          id: 4,
          title: 'La Guitare',
          description: 'Une des passions que j\'ai développé au lycée',
          createdDate: new Date(),
          snaps: 0,
          imgUrl: 'https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_1280.jpg',
        },
        {
          id: 5,
          title: 'Le Mix DJ',
          description: 'Une activité que j\'ai pratiqué à partir de mes 25 ans',
          createdDate: new Date(),
          snaps: 200,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/13/13/37/audio-720589_1280.jpg'
        },
        {
          id: 6,
          title: 'Le spray paint',
          description: 'Une activité pro que j\'ai fais directement dans la rue à Alès',
          createdDate: new Date(),
          snaps: 0,
          imgUrl: 'https://cdn.pixabay.com/photo/2018/04/25/13/52/spray-3349588_1280.jpg',
          location: 'Alès'
        }
    ];

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}