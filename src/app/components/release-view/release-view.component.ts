import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgxImageGalleryComponent,
  GALLERY_CONF,
  GALLERY_IMAGE
} from "ngx-image-gallery";
import { ReleaseService } from "src/app/services/release/release.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-release-view",
  templateUrl: "./release-view.component.html",
  styleUrls: ["./release-view.component.sass"]
})
export class ReleaseViewComponent implements OnInit {
  @ViewChild("ngxImageGallery") ngxImageGallery: NgxImageGalleryComponent;

  title = "Demo App";
  release: any;

  // gallery configuration
  conf: GALLERY_CONF = {
    imageOffset: "0px",
    imagePointer: true,
    showDeleteControl: false,
    showCloseControl: false,
    showExtUrlControl: false,
    closeOnEsc: true,
    showImageTitle: false,
    inline: true,
    backdropColor: "default"
  };

  // gallery images
  images: GALLERY_IMAGE[] = [];

  generateImagesPath() {
    for (let i = 1; i <= this.release.pages; i++) {
      this.images.push({
        url: this.release.path + "/" + i + ".jpg",
        thumbnailUrl: this.release.path + "/" + i + ".jpg"
      });
    }
  }

  constructor(private service: ReleaseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      let id = data.id;
      this.service.findById(id).subscribe(release => {
        this.release = release[0];
        this.generateImagesPath();
      });
    });
  }
  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    // console.log(this.ngxImageGallery);
    // this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    // this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    // this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage() {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage() {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info("Gallery opened at index ", index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info("Gallery closed.");
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info("Gallery image clicked with index ", index);
    // this.ngxImageGallery.open(index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info("Gallery image changed to index ", index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info("Delete image at index ", index);
  }
}
